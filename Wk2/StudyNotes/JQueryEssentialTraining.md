JQuery Essential Training           
=====================

20/07/2014 

Purpose
-----------
A free open JavaScript Library. Focus on simplify common script tasks:
- Simplifies the task of creating highly responsive web pages
- Getting and manipulating page content (DOM)
- Working with the modern browser event model
- Adding sophisticated effects (image fade, animations, etc)
- Most modern web development scenarios involve common patterns, jQuery make it really easy.
    + Page loads -> perform a bunch of page setup
    + event -> Retrive content from the page -> Manipulate or animate the content -> Put the content back in the page
- Leverages your existing knowledge of CSS
- Works with sets of elements
- Performs multiple operations on a set of elements with one line of code (known as statement chaining)
- Hides various browser quirks (so you can concentrate on the end result)
- Is extensible (so you can use third-party plug-ins or write your own, for specialized tasks)
- Currently compatible with modern versions of all the main browsers in use today (IE: version 6 and later, Safari v3, Firefox v2, Opera v9)
- Abstracts away browser-specific features, allowing you to concertrate on design

Download both version of jQuery:
- use uncompressed development version for development, so that it is easy to troubleshooting;
- use compressed production jQuery for production, so that it is minimal to transfer and load faster

Compare javascript code before and after reference to jQuery
- Before using jQuery:
    + The on-load event only fires after all of the page content has downloaded, including images
    + It's also harder to add multiple load functions 
        *  You got to sqeeze all those onload functions into big one,
        *  or you got to work with different DOM elements, which is handled differently by different browsers
/*
function runOnLoad() {
    alert ("the page just loaded!");
}
window.onload = runOnLoad();
 */

- After using jQuery:
    + jQuery provides a way to run code when the DOM of the page is ready, not everything including images downloaded;
    + this is called the 'document.ready' event
    + It can be called multiple times, and jQuery will chain those requests one by one to be called by succession
/*
$("document").ready(function() {
    alert ("the page just loaded!");
});
 */

JQuery features can be break down into 8 major catalogues:
-------------------------------------------------------------------------------
- Core functionalities: implement core functions as well as commonly used utilities
- Selection and Traversal: Functions to find contents in the document and navigatoring among the content of the document (navigating in the DOM)
- Manipulating & CSS: editing and change the document content, and working with CSS data such as positioning info
- Events: simplifies working with the modern DOM events, and provides common event helper functions (that pop up in the interactive web page design etc)
- Effects: Functions for creating basic animations and efforts, such as hiding and showing elements, moving objects around. 
- AJAX: Utilities of working with AJAX, such as loading content from remote pages and dealing with JSON data.

JQuery Selectors and Filters (Query part of the jQuery)
------------------------------------------------------------------------------
- jQuery selectors and filters retrieve content from the document, so it can be manipulated using other functions
- jQuery selectors return an array of objects that match the selection criteria:
    + This array is not a set of DOM elements (unlike '.getElementById' or ByTagName or ByClass, which returns DOM element)
- jQuery filters operate on a selector to further refine the results array that the selector returns
- The array is a connection of jQuery objects that provide a large number of predefined functions for further operating on the objects
    + It is a banch of jQuery objects warped around DOM elements
    + so that you don't have go back to DOM to do your actions, but act directly on those jQuery objects instead

Basic jQuery Selectors
-----------------------------------
- CSS Style selectors and filters are based on familiar CSS syntax, working pretty the same way as CSS does
- Below is a list of selectors that workd identical as CSS selectors, such as:
    + Tagname:  Finds all elements that are named tagename
    + #Identifier:   Finds all elements with ID of identifier
    + .className:   Finds all elements that has class attribute with the value of className
    + tag.className:   Gets elements of type tag that has a class attribute with the value of className
    + tag#id.className:   Retrieves the tag element that has an ID of id and a class attribute with the value of className
    + *: wildcard charactor, that would find all the elements on the page.  // this one is new to me;

/*  Examples of plain browser DOM vs. jQuery selectors
- document.getElementsByTagName("p")              as:             $("p")
- document.getElementById("list1")                        as:            $("#list1")

Below is the improvement part:
- $("li.a"): select 'a' class object inside 'li' items. If using plain browser DOM selector, it has to first select 'li' element, then use a loop to find and return 'a' element from the 'li' element returned results.
- #("ul.b"): select 'b' class object inside 'ul' section or sections. again, old way has to use the loop, but this new way you just need to specify it, and jQuery will automatically return the result back to you.

Example of HTML document used are below:
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <ul id="list1">
        <li class="a">item1</li>
        <li class="b">item2</li>
        <li class="a">item3</li>
        <li class="b">item4</li>
    </ul>
    <p>This is paragraph 1</p>
    <p>This is paragraph 2</p>
</body>
</html>
 */

Hierarchy and combination jQuery Selector Syntax
-------------------------------------------------------------------
- It is used to select elements based on hierarchical relationships or on a series of common criteria
- "selector, selector, ... ": Finds all of the specified selectors
- ".class1.class2": Finds all elements with both .class1 and .class2 applied // Series of criterias
- "parent > child": Finds all child elements that are direct children of elements of type parent    // This one is not tested in example;
- "ancestor descendant": Finda all descendant elements that are contained within the elements of type ancestor
- "prev + next": Finda all next elements that are next to a prev element
- "prev ~ siblings": Finds all sibling elements that come after prev and match the siblings selector

Basic jQuery Filters, in dix categories
--------------------------------
- Basic: Provides basic filtering, like getting the first, last; even or odd numbered items; in a returned set <from selector's results>
    + :first ==> select only the first instance of the selector's returned set
    + :last ==> select only the last instance of the selector's returned set
    + :even ==> select only even-numbered elements in the selector's returned set     // remember that index is zero-based, so 'even' means #1, 3, 5, ..
    + :odd ==> select only odd-numbered elements in the selector's returned set        // For the same token, 'odd' actually means #2, 4, 6, ...
    + :eq(n) ==> Filters out elements that are not positioned at the given index           // again, index is zero-based in JavaScript
    + :gt(n) ==> includes elements that are past the given index
    + :lt(n) ==> includes elements that are before the given index
    + :header ==>   selects all header elements (H1, H2, H3, etc)
    + :animated ==> selects all elements that are currently being animated in some way
    + :not(selector) ==> include elements that do not match the given selector
    
- Content: Filters a set of elements based on the content, like whether an element contains a particular string

- Visibility: Filters a set of elements using the visibility setting of each element as a test

- Attribute: Examines a given attribute on an element to determine whether it should be filtered out
    + [attribute] ==> includes elements in the result set if they have the specified attribute
    + [attribute=value] ==> includes elements in the result set if they have the specified attribute and it has the given value
    + [attribute!=value] ==> includes elements in the result set if they have the specified attribute and it does not have the given value
    + [attribute^=value] ==> includes elements that have the specified attribute and it starts with the specified value    // Typically used with string;
    + [attribute$=value] ==> includes elements that have the specified attribute and it ends with the specified value
    + [attribute*=value] ==> includes elements that have the specified attribute and it contains with the specified value
    + [attrFilter1][attrFilterN] ==> includes elements that match all of the specified attribute filters

- Child: Selects elements based upon their relatioship with their parent element

- Form: Provides specialized filters that operate on form elements


4/8/2014:  After spend 7 days to finish CSS2.1 course, and wasted last week on two car issues, I am back to continue this one, and doing so at same time with 'Intro to Linux' course.

