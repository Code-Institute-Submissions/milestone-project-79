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

* Obiously positioned navigation bar with links to all page sections.

* Search bar allows users to find recipes based on an ingredients list that has been input.

* Recipe cards laid out in an 'easy-to-choose' format with pagination buttons to access all recipes/data.

* "About" section containing information on how to use the site effectively, should the user require it for any reason.

* Contact form.

* Responsive down to a 320px width.

### Features Left to Implement

* An "auto-suggest" feauture for the search bar which suggests ingredients to the user based on the the actual ingredients data contained within the API.

***

## Technologies Used

* [Github](https://www.github.com/) - Used for hosting and version control.

* [Gitpod](https://www.gitpod.io/) - IDE used for writing site source code.

* [Balsamiq](https://www.balsamiq.com) - Blasamiq cloud used for creating wireframes/high resolution mockups.

* [Google Developer Tools - Inspect](https://www.google.com/chrome/) - Used for testing code and bug fixes.

* [jQuery](https://jquery.com/) - JavaScript library used to build site logic.

* [Jasmine](https://jasmine.github.io/) - Used for testing JavaScript and bug fixes. (Removed).

* [Bootstrap](https://getbootstrap.com/) - CDN framework used for layout structure and elements.

* [Font Awesome](https://fontawesome.com/) - Used for icon library for social links.

* [Google Fonts](https://fonts.google.com/) - Raleway and Roboto have been used throughout this project.

* [Adobe Stock](https://www.stock.adobe.com/) - Used public domain images for site background and stock images.

* [Recipe Puppy](https://rapidapi.com/brianiswu/api/recipe-puppy) - API of recipe data used for the site.

* [Loading](https://loading.io/) - Used to create loading .gif.

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

Secondly, although ingredients can be easily inputted into the search bar, there is no indication of whether plurals or indeed the ingredient
itself will actually return a result in the first place. To rectify this, an "auto-suggest" feature within the search bar calling on the
ingredients data itself from the API would provide the best solution to this. Such a feature would fall into the "Features Left to Implement" category.
This has been left unfixed.

### Responsiveness

In order to test responsiveness of the site, Chrome Developer Tools and the [Am I Responsive](http://ami.responsivedesign.is/) test site were used.
The use of Bootstrap and general CSS for layout proved successful across a number of devices. However, going down to the smallest available sized
devide with a width of 320px proved problematic. In order to ensure functionality on a screen size this small, a media query was used within the CSS
with a level of success. Normally, bootstrap and CSS would have been sufficient, however on this occasion due to a mixture of Bootstrap and HTML layout,
this proved to be the simplest and quickest solution.

The content looks consistent across all screen sizes. As the API returns a maximum of 10 recipe cards per search page, the card layout was made to look as
even as possible given the layout of the cards appropriate 'column' and 'row' counts as the screen size changed. This proved to be a challenge at first, however
this was achieved by creating a space in the centre of the page using Bootstrap columns and centering the content (cards) within that.

### Test Driven Development

It was intended that a Jasmine testing suite was to be used to test the JavaScript code as the site was being built, however as time progressed it became
clear that this was not going to be necessary so the suite was removed. The Javascript was iterated using Chrome Devloper Tools to systematically run, test and
build the interactivity of the site.

### Testing Scenarios

1. Search Bar
    * Click on search bar.
    * Submit empty search bar to return error message - "Please enter your ingredients above!".
    * Enter an ingredient that doesn not exist to return error message - "We can't find what you're looking for!".
    * Enter ingredient or ingredients list and press either the enter key or click on the search button to return recipes.

2. Pagination buttons
    * Search for recipe.
    * Click on disbaled Prev button - no action.
    * Click on enabled Next button - moves to page 2, page 3 etc.
    * Search for a recipe list with fewer results - click to page where there is less than 10 results (indicating the last of the data), click on Next button - no action.

3. Page links
    * Click on a page link to go to specific page section by id.
    * Page scrolls to appropriate section.

4. Contact form
    * Go to "Contact" section.
    * Try to submit empty form and required message appears.
    * Try to submit incomplete form and required message appears.
    * Try to submit form with invalid email address based on input pattern and message appears.
    * Enter all fields correctly and upon clicking submit, the page refreshed (A submission message is a feature left to implement).

### Other Bugs and Problems

* One inetersting bug that has been persistent throughout the project is the resolution of the images returned from the API within the recipe cards. The size of the
images within the design are intended to be a consistent size, however the actual image quality returned from this API in particular is that of a thumbnail size. This
may be something to do with the fact that this is a free API and resources may be limited. If a paid, better quality API was used for the project, some of the site's
funcionality and desgin would be improved significantly. This is a trde-off that was considered when building the project.

***

## Deployment

My site has been deployed on GitHub pages. The site can be found [here]().

***

## Credits

### Media:

* [Header image](https://github.com/vdgvzr/milestone-project---2/blob/master/assets/img/food.jpeg) and [about section](https://github.com/vdgvzr/milestone-project---2/blob/master/assets/img/about-section.jpeg)
images were found for free on the [Adobe stock](https://stock.adobe.com/uk/) website.

### Acknowledgements

* I took design and UI inspiration for this project from the [Just Eat](https://stock.adobe.com/uk/) website.