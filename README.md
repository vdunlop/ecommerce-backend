# ecommerce-backend

## Description
The ecommerce backend is the backend app for an e-commerce site. It is a working Express.js API with Sequelize to interact with a MySQL database.

### User-Story
AS A manager at an internet retail company

I WANT a back end for my e-commerce website that uses the latest technologies

SO THAT my company can compete with other e-commerce companies

### Acceptance-Criteria
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database

### Mock-Up

## Installation-Execution
Walkthrough video:
<video width='320' height='240' controls>
<source src="./Assets/challenge12.mp4" type='video/mp4'>
</video>

Open a command terminal, go to the employee-tracker folder.

Open mysql and create the database and seed it:

1. mysql -uroot -p

2. source db/schema.sql

3. source db/seeds.sql

Quit mysql and start the employee-tracker:

node server.js

Once you are in the Employee Tracker cli interface, you can do the following:

1. View All Employees will display a table showing the employee's id, first and last name, role (job title), salary, department and manager's first and last name.

2. View All Departments will display a table showing department ids and names.

3. View All Roles will display a table showing role ids, names (titles) and the department that the role belongs too, along with the salary.

4. Add An Employee will prompt for the new employee's first and last name, role, and manager name. This information will be stored in the database under the new employee.

5. Add a Role will prompt for the new role's name (title) and the salary and title that go with that role. This information will be stored in the database under the new role.

6. Add a Department will prompt for the new department's name. This information will be stored in the database under the new department.

7. Update Employee's role will prompt for the employee to update and the role to update the employee to. This information will be updated stored in the database.

Enter <ctrl>C to quit.

## Usage

The ecommerce backend is the backend of an E-commerce site. It shows a working Express.js API, configured to use Sequelize to intereact with a MySQLDatabase. It can be used as a backend for an E-commerce website.

E-commerce is internet retail. 

## Testing
N/A

## Credits
N/A

## License
N/A