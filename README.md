# <Project 2: InkedIn>
### website: <a href='https://agile-everglades-33019.herokuapp.com/'>https://agile-everglades-33019.herokuapp.com/</a>
### github: <a href='https://github.com/JEckfeldt/Project2Tattoo'>https://github.com/JEckfeldt/Project2Tattoo</a>
## Description:
  - Considering the endless applications available, we wanted to create a practical and useful application to everyday consumers
      
  - Tatoos have been incoprorated in many different cultures and their views on it whether good or bad have been integrated in many different lives. 
      
  - We provide a resource that allows you to enter into a community where people can either request or post what they would like for tatoos or tatoo artwork.
      
  - Using JavaScript, HTML, and CSS, our application is filled with functions and styling while being user friendly and reliable to use throughout many platforms

- The InkedIn app allows users to join a community that provides tatoo artworks or tatoos through posts which includes: 
  1. An image of the tatoo or tatoo artwork
  2. Description of the tatoo or request or post
  3. Contact information
  4. Comments 
  

- During this project everyone in the group learned:
  1. How to use outside resources to our advantage
  2. How to efficiently collaborate using Github 
  3. Debugging issues can be a very tedious task
  4. Working with back end to front end is incredibly difficult and prone to issues
  4. Staying organized is very important to eliminate any ambiguity in our teamwork 

## Table of Contents 
- [Credits](#Credits)
- [License](#license)
- [Features](#Features)

## Credits
- Michael Schwarf
- Jake Eckfeldt
- Sle Ahn

- Third-party assets
 1. Sweetalert2 for the beautiful alert button on our login page.
 2. Node Express for framwork
 3. Dotenv for dotenv files
 4. NPM for allowing to use npm resources
 5. Materialize: provide the library for all the CSS we used in InkedIn
 6. Passport providing autentication
 7. JSON Webtoken providing authentication
 8. Sequelize for database handling
 9. MYSQL for dtabase
 10. Heroku for live deploy
 11. JAWSDB for database to use for live server

## License
- This is all free and open source; and we'd like to keep it that way.
- This project was made for educational purposes
- Anything used from this project must be referenced to and can only be used for educational purposes.

## Features
- media responsivness
- Login Page
  1. Validation
    - users will require to login with valid username and password to access site
    - if not, an alert will pop up informing the user to enter valid username and password
- Create Page
  1. Account Creation
    - users will have to create a username and password
    - then will be redirected to login page
- Home Page
  1. Navbar with:
    - Home page navigation
    - My Profile Page navigation
    - About Us page navigation
    - Sign Out navigation
  2. Side Navbar (hidden for large devices)
    - its intention is to show up only when media devices are medium and smaller
    - An alternate navigation without the "contents drop down" 
  3. Create Button on Home page
    - it takes you to create post page
  4. Post Cards with preview images are displayed 
    - appropriate cards with an activator that allows to view full image
    - appropriate Titles for the cards
    - view button in each card to allow an user to go to the card's page
- Post Page
  1. Activated by clicking on the view button
  2. Full image of the picture
  3. Given a full description:
    - whether it is an offer or request
    - description
    - contact info
  4. Ability to comment on the page for the post
  5. Ability to see comments rendered in the page for the post
- Create Post Page
  1. Activated by clicking on the red button with a white cross
  2. A form will appear with:
    - selecting between post or request
    - title
    - image url
    - description
    - contact number
    - email
    - submit button which will render this to the home page as a card
- About Us Page
  1. Title: About InkedIn
  2. Section: About InkedIn
    - description of what SongSlang is
  3. Section: Offers
    - Describes what offers are
  4. Section: Requests
    - Describes what requests are
  5. Section: Our Goal
    - Describes what our goals are
  3. Section: About the Team
    - description of the Team
    - Team Cards that contain:
      - an image of the person
      - Name
      - a brief description
      - LinkedIn link