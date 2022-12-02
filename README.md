# The Beast (Name subject to change) Web Application
"The Beast" is a web application used by the Department of Psychiatry at UNC-Chapel Hill to collect and examine data from various mental health agencies across North Carolina to help find employment for those who are struggling with mental health and/or substance use disorders.

The intended goal of "The Beast" is to make the data collection more streamline for our client.

## Project Structure

"The Beast" utilizes the MEAN stack.  
    - MongoDB  
    - Express.js  
    - Angular  
    - Node.js  

The frontend web application is built up using Angular and Survey.js.  
The backend API is built up using Node.js, Express.js, and mongoose for database connection.  
The database is MongoDB.

**Programming Languages**  
Frontend: HTML/CSS, Typescript  
Backend: Javascript  

![Architecture Diagram](https://github.com/frachen/thebeast/blob/backend/my-app/imgs/architecture_diagram.png)

# Frontend Structure

The frontend has component folders for each required survey. Within those folders there are more specific components that relate to adding data and displaying group or individual data. More details in code comments.

There is also a model folder, with instances that relate to each survey for data interfacing/modeling purposes, and a service folder that has components for HTTP to the backend API connections.

Resources used for the frontend:
> [Connecting Angular to a Node.js application](https://www.bezkoder.com/mean-stack-crud-example-angular-14/)  
> [Creating a dynamic Angular Mat Table](https://muhimasri.com/blogs/create-an-editable-dynamic-table-using-angular-material/)  

# Backend Structure

The backend follows a RESTful API structure. 

Resources used for the backend:
> [RESTful API structure](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)  
> [Express Routing](https://expressjs.com/en/guide/routing.html#express-router)

## Starting the application

In it's current state, the application is not running on a server so it must be run on `localhost`.

We recommend cloning and accessing the repo through [GitHub Desktop](https://desktop.github.com/).

Once you have the repo... 
> Open the repo in whatever IDE you choose to use
> Then open the terminal and run...
```
npm install
```
> To download all dependancies needed
> Upon completion, open another terminal and in one terminal run...
```
cd api
node app.js
```
> To start up the API. Make sure you have you MongoDB server running
> In the other terminal run...
```
cd my-app
ng serve
```
> And open it in your `localhost` browser

**More detailed breakdown of the application was provided to the client.**  
**For more questions, contact us [here](https://tarheels.live/comp523teamb2022/team/).**