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
N/A

## Installation-Execution
Walkthrough video (note, this walkthrough was done using Thunder Client as the API client extension):


To run the ecommerce_backend app, do the following:

1. Open a command terminal, go to the ecommerce backend folder.

2. Open mysql and create the database:

mysql -uroot -p

source db/schema.sql

3. In the command terminal, seed the database:

npm run seed

4. Start the ecommerce backend:

npm run start

1. Once the connection is made, you can use your favorite web API testing app to test the following:

Category endpoint = http://localhost:3001/api/categories

Product endpoint = http://localhost:3001/api/products

Tag endpoint = http://localhost:3001/api/tags

2. Test the GET using the above endpoints

3. Test the GET and DELETE by appending the id of the record you are accessing:

http://localhost:3001/api/categories/5

http://localhost:3001/api/products/5

http://localhost:3001/api/tags/5

4. Test the POST by adding a body for example for creating a new product:

{
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4]
}

5. Test the PUT by adding a body for example for changing a product price:

{ 
    "price" : 150.00
}

and appending the product id to the endpoint as shown in #4 above.

## Usage

The ecommerce backend is the backend of an E-commerce site. It shows a working Express.js API, configured to use Sequelize to intereact with a MySQLDatabase. It can be used as a backend for an E-commerce website.

E-commerce is internet retail. 

## Testing
N/A

## Credits
N/A

## License
N/A