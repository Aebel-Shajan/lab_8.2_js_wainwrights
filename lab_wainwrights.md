# Lab - JS Wainwrights

We've explored the fundamentals of JavaScript and had a refresher of HTML and CSS. Now that we are familiar with the DOM, let's take this all a step further and attempt to bring all together.

Using an external API, we can construct a frontend application which populates a page with dynamic information which we can then filter. We'll be using `fetch()`, **DOM manipulation** and taking in **user input**.

For this lab we will be making use of a resource which contains some information about Wainwrights.

Alfred Wainwright was a British fellwalker who published the seven-volume *Pictoral Guide to the Lakeland Fells* in the 1950s/60s. It covered 214 fells (hills) of the English Lake District which subsequently became known as *Wainwrights*.

`https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json`

In the brief below, we focus on making as few requests to the external API as possible by mkaing use of a local variable to house the information of *all* Wainwrights. We can then use this within our filter in place of a second API call.

## MVP

1. Copy over your start code from `coursenotes`
2. In `index.js` create a function called `getAllWainwrights()` which houses a `fetch()` request to the wainwrights resource and returns the reponse as JSON. You should assign the return data to a global variable you can access both now and later when you implement a filter (see below, step 5).
3. Create a function to create a series of new HTML elements, populating each with information about each Wainwright (such as `name`, `height`, `area`, etc), and add them to the `<ul>` in your HTML. Call this within your `getAllWainwrights` function.
4. Add a simple `<form>` to your HTML with a single text box input and a button or input. Create a function which is called when the form is submitted. Capture the value of the input and, as an intermediate step, log this out to the console.
5. Create a function which takes the global variable (see above, step 2) and filters it based on the value received from your form. Replace the contents of the `wainwrights-list` with the filtered results.

> TIPS
- Remember you can use dot notation (object.property) to access the value of a specified property
- The MDN Documentation has all you may need on JavaScript functionality. If you're unsure on any part, start there
- To clear the entire contents of a given element, you can use `Element.innerHTML` method and set it to an empty string `""`
- When creating your filter, you may find the String.toLower() method helpful

## Extensions
6. Neaten up your JavaScript functionality, making abstract functions for any repeated functionality
7. Add a dynamic heading which tells the user that the countries are being filtered. Add an artificial delay so that this header can be viewed as well as the original "Awaiting API.." <p> element
8. Make your page display an error message should it meet an error on querying the API. Test this out by trying to access an endpoint which doesn't exist for the API

> TIPS
- You can check whether a fetch request is successful or not by accessing the ok property of the response which is either true or false
- When creating functionality tied to the appearance of an error, this should be housed within a try catch block