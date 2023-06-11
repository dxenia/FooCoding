# To Do App Project: MySQL Database and Node Server.

This is my project for FooCoding's Week 3 of the databases module. I created a server using Node.js and Express.js, which interacts with a MySQL database to perform a series of requests.

## Information and general setup

This project was created with:

- Node.js
- Express.js
- MySQL
- readme.so
  And tested using:
- Postman

To access this project you are going to need Node.js and MySQL installed on your laptop. To test the app you can use Postman, either as a website or as a VSCode extension.

First of all, clone this repository using
```
git clone git@github.com:dxenia/FooCoding.git
```
To access this project you are going to need Node.js and MySQL installed on your laptop. To test the app you can use Postman, either as a website or as a VSCode extension.

### Setting up the database

Use the dump file provided to create a clone of my database schema (see todo-dump.sql)

### Installation

To be installed in the same folder path as the cloned repository:

```bash
    cd /Users/.../Week3
    npm install
```

This will install all dependencies needed based on the package.json provided by me.

### Database connection

Make sure to substitute the following values with your personal information to be able to create a connection between app and database locally.

```
const connection = mysql.createConnection({
  host: <host>,
  user: <user>,
  password: <password>,
  database: <database-name>,
});
```

### Server

To get the server started you can run:

```
node app.js
```

The server should be now running on http://localhost:3000/.

## Testing (using [Postman](https://www.postman.com/))

- Select the request type (POST, DELETE, PUT)
- Insert the correct route url. Whenever needed, :id should be replaced by the id of a specific element, i.e.

```
http://localhost:3000/lists/1016
```

- Select body > raw > JSON
- Create a JSON object using the correct keys and values, i.e.

```
{
  "username": "dxenia"
}
```

## Tests that can be performed

The route url can be modified accordingly, by substituting :id with a specific id number. The request body should contain the necessary data.
Examples below can be used to perform testing.

### Create new user:

```http
  POST http://localhost:3000/users
```

_Request body_:

```
{
  "username": "testusername",
  "email": "test@email",
  "password": "testpassword"
}
```

### Create new to do item:

```http
  POST http://localhost:3000/items
```

_Request body_:

```
{
  "listId": "1015",
  "tagId": "72",
  "task": "test task"
}
```

### Delete to do item:

```http
  DELETE http://localhost:3000/items/:id
```

###### _Parameter_:

:id -----> **item_id** (i.e. http://localhost:3000/items/221)

### Create new to do list:

```http
  POST http://localhost:3000/lists
```

_Request body_:

```
{
  "userId": "3",
  "listName": "test list",
  "reminder": "2023-06-12 00:00:00"
}
```

### Delete to do list:

```http
  DELETE http://localhost:3000/lists/:id
```

###### _Parameter_:

:id -----> **list_id** (i.e. http://localhost:3000/lists/1012)

### Mark an item as completed:

```http
  PUT http://localhost:3000/items/:id
```

###### _Parameter_:

:id -----> **item_id** (i.e. http://localhost:3000/items/222)

### Add a reminder for a list:

```http
  PUT http://localhost:3000/lists/:id
```

###### _Parameter_:

:id -----> **list_id** (http://localhost:3000/lists/1030)

_Request body_:

```
{
    "reminder": "2023-06-12 00:00:00"
}
```

https://to-do-04qu.onrender.com/
