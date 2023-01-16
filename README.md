# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1) Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Welcome! 👋

Thanks for checking out my front-end coding challenge.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` fields are empty
  - The email address is not formatted correctly

### Screenshot
#### Normal state
![](./screenshot.png)
#### Error
![](./screenshot-error.png)

### Links

- Live Site URL: (https://vtrv123.github.io/challengeIntroWithSignup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

In this challenge, I practiced my HTML5, CSS3 and JavaScript skills. The main challenge for me was validating all the forms simultaneously, with the added difficulty of displaying a different error message for the email field, in case the given email was formatted wrongly. As a new learning experience, I was able to practice creating forms in HTML, changing input field styles in CSS and manipulating the DOM and validating data with JavaScript.

The main layout of the page was divided vertically using CSS Grid. Flexbox was used to center the contents on the page. Absolute positioning was necessary in order to position the warning signs.

The JS script consists of an event listener function to listen to the "submit" event and validate the form data, signaling empty fields and especially invalid email addresses. The validation function uses RegEx to check if the string containing the email address corresponds correctly to an email address' format. There are some functions to manipulate the DOM and receive information from it, changing the CSS styles and HTML elements to display error messages or revert the form to its original state.

### Continued development

The next step would be to adapt the code to mobile devices and smaller screens through the responsive.css file.
