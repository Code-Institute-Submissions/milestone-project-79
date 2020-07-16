![Recipeasy responsiveness screenshot](/assets/img/recipeasy-responsive.png)

# Milestone Project 2 - Interactive Frontend Development

# Recipeasy

For this project I have decided to bring to life a simple idea and a thought that comes into my head every time I look in my scarce food cupboards - 
what can I make with what I have left?

The premise is simple - enter the ingredients you have left into the search bar, and the site will return to you a list of recipes that you can make with what you have.
Even if you don't have everything, it's a step in the right direction.

I will utilise JavaScript and jQuery to provide the interactiivity of the site and to communicate with a recipe database API which should return information
required for any potential users.

***

## UX

The demographic of the website is potentilly quite a broad specturm of people, as everybody will at some point need to cook a meal and may face the tough decision of what they
actually want to cook. For this reason, the site will need to be as straighforward as possible to use, with clear directions and interactivity on how to use it. If a user is potentially
not as tech savvy, then an "About" section will be included in order to explain the premise of the site, as well as a "Contact" section where any potential users may wish to provide feedback
on the functionality of the site.

Because of this, I have identified one main user of the site:

### User Stories

#### Casual User

As a casual user, I would like to be able to navigate each page easily, so that I can enjoy the content and get straight to the point without worrying about getting lost.

High-resolution wireframes can be found [here](https://github.com/vdgvzr/milestone-project---2/blob/master/assets/mockups/recipeasy-mockup.pdf).

***

## Features

### Existing Features

* Obiously positioned navigation bar with links to all page sections

* 

### Features Left to Implement

* 

***

## Technologies Used

* [Github](https://www.github.com/) - Used for hosting and version control.

* [Gitpod](https://www.gitpod.io/) - IDE used for writing site source code.

* [Balsamiq](https://www.balsamiq.com) - Blasamiq cloud used for creating wireframes/high resolution mockups.

* [Google Developer Tools - Inspect](https://www.google.com/chrome/) - Used for testing code and bug fixes.

* [jQuery](https://jquery.com/) - JavaScript library used to build site logic.

* [Jasmine](https://jasmine.github.io/) - Used for testing JavaScript and bug fixes.

* [Bootstrap](https://getbootstrap.com/) - CDN framework used for layout structure and elements.

* [Font Awesome](https://fontawesome.com/) - Used for icon library for social links.

* [Google Fonts](https://fonts.google.com/) - Raleway and Roboto have been used throughout this project.

* [Adobe Stock](https://www.stock.adobe.com/) - Used public domain images for site background and stock images.

* [Recipe Puppy](https://rapidapi.com/brianiswu/api/recipe-puppy) - API of recipe data used for the site.

* [Loading](https://loading.io/) - Used to create loading .gif.

* [emailjs](https://www.emailjs.com/) - Used as an email service for the contact form.

* [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code.

* [Am I Responsive?](http://ami.responsivedesign.is/) - Used to quickly see how the responsive design looked across all media.

***

## Testing

### Manual Testing

My first step in manual testing the site was to verify the validity of the HTML, CSS and JavaScript code.

* HTML

The HTML code was run through the [W3C Markup Validation Service](https://validator.w3.org/). Although no errors were 
presented, there were warnings regarding the use of semantic elements. For example, h1 headings were used within section
elements instead of h2-h6. Upon modifying the code, the HTML was run through the validator with no errors or warnings to show.

* CSS

As with the HTML, the CSS was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Upon running the test,
there were no errors or warnings to show.

* JavaScript

Both main.js and sendEmail.js were tested using [jshint](https://jshint.com/). The test returned no major issues and advised that the
jQuery selector within the template literals used to target the API data (${results['results'][i]}) would be better written as dot notation - 
(${results.results[i]}).

While running the website, the console log returned [warnings](https://github.com/vdgvzr/milestone-project---2/blob/master/assets/img/console-warnings.png) 
specific to the security of the links of the recipes returned from the API. However it is my understanding that this data is something that can altered only
on the API end.

Used jshint to test js
Am I responsive?
pic resize picresize.com
color test https://color.a11y.com/

html validator
css validator

### Peer Testing

To test the UX and interactivity of the site, I asked a friend to use the site and provide feedback:

1. Does the site provide a good solution to your expectations?

    *  "Yes."

2. Do you think there is a better way to have designed the site?

    * "Plurals - when I search for cucumbers, recipes with cucumber didnt come up, unless I searched for cucumber.
    When I searched for potatoes, nothing came up but when I searched for potato they did. It would be nice if 
    similar words came up in this case, because when searching for multiple ingredients, it can take quite a few tries to get it right."

3. Are the resources on the site easy to find?

    * "Yes, unless I missed useful info not knowing about it."

4. Is the site's navigation consistent?

    * "Yes."

5. Do all of the recipe links work?

    * "The ones I tried, yes."

6. Is the site straightforward and easy to use without having to look at any documentation or instructions?

    * "Yes, very straightforward."

7. Is the site intuitive, or is it confusing to use?

    * "Intuitive."

8. Do you feel like you are in complete control of the interactiivity of the site?

    * "Yes."

The peer test resulted in two major changes that could be made to the site. Firstly, it revealed a bug in which if the defensive programming
protocol of "no recipe found" was returned, then the pagination buttons would disappear for any search performed after that.

### Testing Scenarios

1. 
    * 

***

## Deployment

My site has been deployed on GitHub pages. The site can be found [here]().

***

## Credits

### Contents:

* 

### Media:

* 

### Acknowledgements

* 