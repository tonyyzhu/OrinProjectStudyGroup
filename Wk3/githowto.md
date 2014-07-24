Git How To
=======

24/7/14

- Install Git

    yum install git-core
    apt-get install git-core    // This is the one for Ubuntu
    zypper in git-core 

- Setting up name and email address

    git config --global user.name "tonyyzhu"
    git config --global user.email "tonyyzhu@tpg.com.au"

- Installation Options Line Endings

    git config --global core.autocrlf input
    git config --global core.safecrlf true

- Creating a Project

    mkdir hello
    cd hello
    touch hello.html
    nano hello.html          // Add "Hello, World" into the file
    git init                        // Initialize empty Git repository in /Users/tony/Documents/git_tutorial/hello$

- Check the status of the repository

    git status
        + On branch master                                          //the repository stores the current state of the working directory,
            nothing to commit, working directory clean   // and there are no changes to record.

- Making changes

    nano hello.html           // <h1> Hello, World </h1>
    git status
        + On branch master
            Changes not staged for commit:
            (use "git add <file>..." to update what will be committed)
            (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   hello.html

            no changes added to commit (use "git add" and/or "git commit -a")
            // git knows that hello.html file has been changed but no yet committed to the repository.
            // It hints what to do next: "git add" to add the change (but not commit yet), or undo change using "git checkout".


- Staging the changes

    git add hello.html
    git status
        + On branch master
            Changes to be committed:
            (use "git reset HEAD <file>..." to unstage)

            modified:   hello.html
            // Changes has been staged (git knows about the change, but it is not permanent in the repository).
            // the next commit will include the changes staged.
            // Should you decided not to commit the change, use "git reset" command to unstage the change as hinted.

- Staging and Committing

    git commit -m "Commit change for hello.html"
        + [master 39563a8] Commit change for hello.html
            1 file changed, 1 insertion(+), 1 deletion(-)       // change committed
        + Suppose that you got two other files 'a.html' & 'b.html'. They are not added yet therefore not committed this time. You can then add them as above and then commit them as above. By separating staging and committing, you get the chance to easily customize  what goes into a commit.
        + If you didn't include "-m ...", git will pop you into the editor of your choice, for entering the commit message.
    git status
        + On branch master
            nothing to commit, working directory clean

- Git work with CHANGES, not FILES as most version control systems do.  // Investigation below.

    nano hello.html     // add more tag including html and body.
    git add hello.html
    nano hello.html    // add head tag
    git status
        + On branch master
            Changes to be committed:
            (use "git reset HEAD <file>..." to unstage)

            modified:   hello.html                  // added but not committed, for the first change;

            Changes not staged for commit:
            (use "git add <file>..." to update what will be committed)
            (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   hello.html                 // not added at all, for the second change;
    git commit -m "Added standard HTML page tags"
    git status
        + On branch master
            Changes not staged for commit:
            (use "git add <file>..." to update what will be committed)
            (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   hello.html

            no changes added to commit (use "git add" and/or "git commit -a")
            // So first change committed, second change not added nor committed;
    git add .
    git status
        + On branch master
            Changes to be committed:
            (use "git reset HEAD <file>..." to unstage)

            modified:   hello.html
    git commit -m "Added HTML header"
        + [master 3f43695] Added HTML header
            1 file changed, 2 insertions(+)             // second change committed, done.

- History

    git log             // I am not going to show the log here - too long;
    git log --pretty=oneline    // using the single line format;
        + 3f436956312f8973e494373e037d9b11323b0463 Added HTML header
            4631e02e5d4ad833e987aa71539dcd8f57870a9a Added standard HTML page tags
            39563a82e019d398daf77c7b3340beea22f8c232 Commit change for hello.html
            8051278f25452c0275eb28a0aad0146e6fd51634 First Commit
    Other formats of "git log":
        + git log --pretty=oneline --max-count=2
        + git log --pretty=oneline --since='5 minutes ago'
        + git log --pretty=oneline --until='5 minutes ago'
        + git log --pretty=oneline --author=tonyyzhu
        + git log --pretty=oneline --all
    Getting fancy:
        + git log --all --pretty=format:"%h %cd %s (%an)" --since='7 days ago'
        + git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
        + details of parameters:
            * --pretty="..." defines the output format.
            * %h is the abbreviated hash of the commit
            * %d commit decorations (e.g. branch heads or tags)
            * %ad is the commit date
            * %s is the comment
            * %an is the name of the author
            * --graph tells git to display the commit tree in the form of an ASCII graph layout
            * --date=short keeps the date format short and nice
    Another command "gitk" can be used after install the package of gitk. [early version outdated?]

- Set up Aliases                    // so that you don't have to remember and type long commands;
    + For Windows Users:      // Common ones: git status, git add, git commit;
        * git config --global alias.co checkout
        * git config --global alias.ci commit
        * git config --global alias.st status
        * git config --global alias.br branch
        * git config --global alias.hist 'log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'
        * git config --global alias.type 'cat-file -t'
        * git config --global alias.dump 'cat-file -p'
    + Option 1 for Unix User: add following to .gitconfig file in $HOME directory:      // I don't want to do it;
        * [alias]
        *     co = checkout
        *     ci = commit
        *     st = status
        *     br = branch
        *     hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
        *     type = cat-file -t
        *     dump = cat-file -p
    + (Option 2) Command aliases - if your shell supports aliases or shortcuts      // Yes. I did.
        * alias hist='git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'
        * alias gs='git status '
        * alias ga='git add '
        * alias gb='git branch '
        * alias gc='git commit'
        * alias gd='git diff'
        * alias go='git checkout '
        * alias gt='git tag'
    + (Option 2: continue) Find out all alias in my system: a few surprises here:
    /*
    tony@tony-RV511:~/Documents/git_tutorial/hello$ alias
    alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
    alias egrep='egrep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias ga='git add '
    alias gb='git branch '
    alias gc='git commit'
    alias gd='git diff'
    alias go='git checkout '
    alias grep='grep --color=auto'
    alias gs='git status'
    alias gt='git tag'
    alias hist='git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'
    alias l='ls -CF'
    alias la='ls -A'
    alias ll='ls -alF'
    alias ls='ls --color=auto'
     */
    // I need to find out what that 'alert' alias do;

- Getting previous snapshot (or older version of the file) into the working directory

    /*    Below is the example of what I did:
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist
    * 3f43695 2014-07-24 | Added HTML header (HEAD, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]     // This is the target I want to try;
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go 39563a8        // checkout this one;
    Note: checking out '39563a8'.

    You are in 'detached HEAD' state. You can look around, make experimental
    changes and commit them, and you can discard any commits you make in this
    state without impacting any branches by performing another checkout.

    If you want to create a new branch to retain commits you create, you may
    do so (now or later) by using -b with the checkout command again. Example:

      git checkout -b new_branch_name      // Possible solution for branch out older version, and continue from there;

    HEAD is now at 39563a8... Commit change for hello.html
    tony@tony-RV511:~/Documents/git_tutorial/hello$ ls
    hello.html
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html    // Yes it was that version;
    <h1>Hello, World</h1>
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go master           // return to latest version in master branch;
    Previous HEAD position was 39563a8... Commit change for hello.html
    Switched to branch 'master'
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html    // back to latest default one, before change;
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
     */

- Tagging Commit Versions for Future References

    /*      =====examples below for more details======
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist        // before adding tag;
    * 3f43695 2014-07-24 | Added HTML header (HEAD, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist master --all    // there is no difference
    * 3f43695 2014-07-24 | Added HTML header (HEAD, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ gt v1    // tag current version of the page as version 1;
    tony@tony-RV511:~/Documents/git_tutorial/hello$ ls
    hello.html
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html    // Still current version, no change;
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist
    * 3f43695 2014-07-24 | Added HTML header (HEAD, tag: v1, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist master --all      // experiment: tag added;
    * 3f43695 2014-07-24 | Added HTML header (HEAD, tag: v1, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go v1^         // Checkout previous version of current version;
    Note: checking out 'v1^'.

    You are in 'detached HEAD' state. You can look around, make experimental
    changes and commit them, and you can discard any commits you make in this
    state without impacting any branches by performing another checkout.

    If you want to create a new branch to retain commits you create, you may
    do so (now or later) by using -b with the checkout command again. Example:

      git checkout -b new_branch_name

    HEAD is now at 4631e02... Added standard HTML page tags           // Second last version in history;
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html    // Yep, the right one I intended;
    <html>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
    tony@tony-RV511:~/Documents/git_tutorial/hello$ gt v1-beta    // tag as "v1-beta";
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist              // history up to current version of "v1-beta";
    * 4631e02 2014-07-24 | Added standard HTML page tags (HEAD, tag: v1-beta) [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ hist master --all    // all version, include "v1";
    * 3f43695 2014-07-24 | Added HTML header (tag: v1, master) [tonyyzhu]
    * 4631e02 2014-07-24 | Added standard HTML page tags (HEAD, tag: v1-beta) [tonyyzhu]
    * 39563a8 2014-07-24 | Commit change for hello.html [tonyyzhu]
    * 8051278 2014-07-24 | First Commit [tonyyzhu]
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go v1          // switch to "v1";
    Previous HEAD position was 4631e02... Added standard HTML page tags
    HEAD is now at 3f43695... Added HTML header
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go v1-beta  // switch back to "v1-beta";
    Previous HEAD position was 3f43695... Added HTML header
    HEAD is now at 4631e02... Added standard HTML page tags
    tony@tony-RV511:~/Documents/git_tutorial/hello$ gt              // find out all tags;
    v1
    v1-beta
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go v1        // back to "v1";
    Previous HEAD position was 4631e02... Added standard HTML page tags
    HEAD is now at 3f43695... Added HTML header
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html     // check: it is right;
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
    tony@tony-RV511:~/Documents/git_tutorial/hello$
     */

- Discarding local changes (before staging)

    /*        =====Example below=======
    tony@tony-RV511:~/Documents/git_tutorial/hello$ ls
    hello.html
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go master        // Make sure I am on latest commit;
    Switched to branch 'master'
    tony@tony-RV511:~/Documents/git_tutorial/hello$ ls
    hello.html
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html   // double checking: ok.
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
    tony@tony-RV511:~/Documents/git_tutorial/hello$ nano hello.html     // add one line for experiment;
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        <!-- This is a bad comment. I want to revert it. -->                            // This is the change I don't want.
        </body>
    </html>
    tony@tony-RV511:~/Documents/git_tutorial/hello$ gs          // checking status: change not added, not commit;
    On branch master
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   hello.html

    no changes added to commit (use "git add" and/or "git commit -a")
    tony@tony-RV511:~/Documents/git_tutorial/hello$ go hello.html        // get previous version -- last commit;
    tony@tony-RV511:~/Documents/git_tutorial/hello$ gs            // Now local repository is same as working folder;
    On branch master
    nothing to commit, working directory clean
    tony@tony-RV511:~/Documents/git_tutorial/hello$ cat hello.html      // Double check: Yep!
    <html>
        <head>
        </head>
        <body>
        <h1>Hello, World</h1>
        </body>
    </html>
     */



