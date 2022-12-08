# Web Application Structure

Instead of copying and pasting repetitive code comments for everything, the code structure and functionalitity will be described here.  

In the app folder, there are three folders...  

## Components
Which has a folder that represents each survey and the homepage.  
For each survey there is a...  

**Add-(survey-name) Folder**  
This folder contains all the logic for the surveys (Survey.js).  
The code to edit the survey questions and values is in the .ts files.  

**(survey-name) Folder**  
This folder contains the code that displays the tables.  
The HTML files hold the dynamic table code and runs a for loop to go throught the displayedColumn and dataSource values in the .ts file.  
The .ts file contains functions that call the service files to call HTTP requests.  

## Models
The models folder contains .ts files for each survey and represent the structure of each survey.  
The first interface model is used for HTTP request datatyping.  
The remaining column objects are for the dynamic table code.  

## Services
The services folder contains .ts files for each survey that hold functions for HTTP requests for CRUD functions.