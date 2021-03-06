# Outdoor.sy Webapp

>Customer intake in just three clicks!

Before you start, be sure to start-up the [back-end](https://github.com/TJBachorz/odsy-customer-intake-api) first!

## Table of Contents
* [About](#about)
* [Getting Started](#getting-started)
* [Technologies](#technologies)
* [Contact](#contact)

## About

Outdoor.sy is a fictional company with a problem.  They have lists of customers on .txt files that they need saved to a database.  This webapp retrieves those customers and lists them in an easy-to-read table structure and also allows users to upload .txt files directly to the API, where the data can be parsed and saved to the database.  Additionally, users can sort the customers list by the customers' names or by the types of vehicles they have, in either ascending or descending order.

## Getting Started

Clone down this repo into a directory of your choice and begin by running:

#### `npm install`

followed by...

#### `npm run start`

If you're already running the backend on `port: 3000` then you will get a prompt asking if you would like to start up on the next available port (most likely `port 3001`). Hit `Y` and `enter` to start the server.

Visit http://localhost:3001, and you should be greeted with the webapp!

[<img src="https://i.imgur.com/lGMO7pN.png" alt="Outdoor.sy webapp homepage"/>](https://i.imgur.com/lGMO7pN.png)

Note: The .env file containing the API URL has been purposefully included in this repo for the ease of others cloning down and running the project quickly and without any blockers.  Normally this file would be excluded from the remote repository.

To demo the app, two files have been included in this repo that can be uploaded through the webapp in order to seed data, `pipes.txt` and `commas.txt`.

## Technologies

* Javascript
* React JS
* Material UI

## Contact

[<img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" alt="github logo" width="40" height="40"/>](https://github.com/TJBachorz) &nbsp; [<img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png" alt="linkedin logo" width="40" height="40"/>](https://www.linkedin.com/in/tjbachorz/) &nbsp; [<img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/medium-512.png" alt="medium logo" width="40" height="40"/>](https://tjbachorz.medium.com/)
