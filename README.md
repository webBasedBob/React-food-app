# SHOWARMA

Live version: https://react-course-proje.web.app/

An app created from my love for two things, Shawarma and entertainment.

*The project is still under development*

## Table of contents
- [Introduction](#introduction)
- [Tech stack](#tech-stack)
- [Project walk-through](#walk-through)
- [Setup/Launch](#setup)
- [Status](#status)

# Introduction

A(nother) food delivery app dedicated to Shawarma. The users select the shawarma, then they select an restaurant close to them to deliver it (I embedded a map from Google Maps API the user can interact with, and from the coordinates provided by the user, a few more API calls are made to convert them into an address and to get Shawarma restaurants close to the location).
During the delivery and after the delivery has succeeded, the users can watch some random videos based on a category the users selected.

# Tech Stack

-React
-Redux
-React Router
-SASS
-WebPack
-React testing library

# Walk Through

You can check the app's pages walk-through down below:
(Recruiter and Admin pages are not available in the live version for basic users, you can check them here)

Project's pages walkthrough:

#### [Home Page](https://react-course-proje.web.app/)

  Home page
  
#### [Available Meals](https://react-course-proje.web.app/food)

 A list of foods (mainly Shawarma and Kebab)
  
#### [Cart](https://react-course-proje.web.app/checkout)

The cart with cart items. If the cart contains items, the users are able to complete the ordering process, which incudes:
 - searching for locations and mark on a map the location of delivery (the map is provided by Google maps API)
 - selecting a restaurant close to the location provided beforehand (used some more Google APIs for this one)
 - checking the order summary with all the relevant data one more time and confirming it

#### [Entertainment](https://react-course-proje.web.app/entertainment)

Here the users can watch youtube videos while eating.
They select one category of videos they want to watch (e.g. humor, sports, politics) and then watch them without leaving the app.
For this feature I used the Youtube Data API v3, on top of which react-youtube library was created.

# Setup

To run the the app on your machine and play around, just clone the repo and run npm install command in your terminal, then run npm run start command (which is a npm script - can be found in package.json) to start a development server - and you're done.

# Status

The project is still under development.
