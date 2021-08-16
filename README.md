# Pizza Time

This application has all the basic functions of a cash regester. 
Add here >> submit, add something to the menu
Clicking on the menu removes it from the menu and adds it to What you ate
Set up for Heroku.

This simple application has the basic functions of an on screen order menu. On the back end it will save your order and modify the menu to allow a customer to keep ordering. The back end has intentionally been set up so it can be easily modified to save all kinds of things including, but not limited to, price, tax, and order completion. 

DONT FORGET TO ADD YOUR OWN PASSWORD TO MYSQL IN CONNECTION.JS, FOUND IN THE CONFIG FILE.

# Prerequisites

* Node.js
* MySQL


# Dependencies

* Express
* Express-Handlebars
* MySQL
* ORM (Object-Relational Mapping)
* body-parser
* method-override
* Bootstrap


# Command line Directions:

1. cd into this file

2. npm install

3. Start MySQL command line tool and login: (mysql -u root -p) or (mysql -u userName -p)

4. On first Run:
	Option1: Run the schema.sql and seeds.sql files into the mysql server from the command line. 
	Option2: Copy and paste the contents of schema.sql manually. Start by creating the database. (CREATE DATABASE IF NOT EXISTS pizzas_db;) Then enter (USE pizzas_db;) to enter the database. After you're in the directory copy and paste the "CREATE TABLE pizzas" table.
	After your done, to leave SQL shell, type "exit;".

5. Make sure that you are still in this file directory. type yarn start.

6. in the browser, type (http://localhost:3000) or (127.0.0.1:3000)
