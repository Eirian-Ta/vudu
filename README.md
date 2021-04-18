# Vudu 

●	This is a school project for WEB322@Seneca. It is designed for practical experience in building Dynamic websites and Server-Side Web applications using Node.js and Express. 
●	The website is a more simplified version of the original VUDU website, developed with MVC model. The copyright of all images as well as information belongs to the original one.

## Technologies

●	All back-end functionality is acomplished using `Node JS` and `Express`. The web appication is connected to `mongoDB` database using `Mongoose`. Encryption is done with `bcryptjs`.
●	Views are built using `Express-Handlebars` to consume the data from the Back-End by making HTTP Requests and then populating the DOM.
●	The hero section is currently implemented as a slide show using `Carousel` from Bootstrap 4. Other content sections implement sliders using `lightSlider`.

## Live Demo

https://vudu-eirianversion.herokuapp.com/

## Usage

●	A visitor can browse all the movies, TV shows and they are also able to search for the title they want without having to logged into the web app. However, in other to rent or buy a movie, they have to log in.
●	The Search function is implemented in a way so that the visitor can enter keywords of the titles they are looking for in any order. For example: they can enter "lambs silence" and still get the movie "The Silence of the Lambs".

●	A visitor can register an account by going to Sign In >> Create an acount. The validate password for an account must contain at least 8 characters, 1 number, 1 lowercase character, and 1 uppercase character. No special characters are allowed for passwords. After sucessfully registered, the user can use their email and password to log in.
After having logged in, the user will be directed to their user dashboard. For an admin account, he/she will be directed to an admin dashboard instead.

●	Only logged in customers can add movies & TV shows to their cart and view it. When the user clicks the “Confirm Order” button, the application will clear the  cart and send email with the entire order information to the user.

●	For an admin, he/she can go to the Items Dashboard after logging in, to create, edit or delete a movie or Tv show. Only jpgs, gifs, and pngs are allowed to be uploaded for the TV shows' and movies' posters. All changes will immediately reflects on the whole website. For the scope of this project, the admin account is manually created in the database.


