/*
    An example on how to work with event handlers (1)
*/

function changeStyle(items, style, value) {
    var convertedItems = HTMLCollection.prototype.isPrototypeOf(items) ? items : [items];
    for (var i = 0; i < convertedItems.length; i++) {
        convertedItems[i].style[style] = value;
    }
}

// 1. Register event handlers for all input tags

// 2. Register document on load (DOMContentLoaded)

// 3. Register multiple event handlers with addEventListener and check the invocation order

// 4. Register multiple event handlers with attachEvent and check the invocation order

// 5. Register mouseover event handler for a specific button and change the transform origin based on the x and y coordinates within the event and add rotation class

// 6. Register a parent handler on the form and also on the body

// 7. Register a child handler on an input tag with the id input-4 and prevent bubbling vs. NOT

// 8. Click the button, but prevent it from submitting the form

// 9. Instead submit the form in code, after filling out hidden fields with 'kensentme'
