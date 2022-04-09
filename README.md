# Assesment II

The objective of this mission is to put into practice what you have learned in the program. The topics that will be covered are: Node.js, express, mongodb, testing.

The mission consists of two parts: first you will have to build a RestFul api and then you will have to answer a series of questions. In the mission report you must add the link to the project repository and the answers to the questions.

The deadline for delivery will be Friday, April 22.

## Mission in Classroom:

All mentors to assign the `Assesment Backend` mission that you can find when exploring the missions in your course, there, go to module 9.

The deadline to publish this mission is Friday, April 8.

<img width="825" alt="mission" src="https://user-images.githubusercontent.com/1481964/161668620-0b932455-f92c-4f8f-ab3d-d94c24e0e716.png">


## 1. Challenge

### FAVS API with JS

Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

### Current Status

The CEO of *Favs* hired you to develop the initial version of his product. It’s worth mentioning that she does not have any technical background.

However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.

### Requirements

- Each user will have a **unique** id, and he will authenticate using a **non-empty email** and a **password**.
- Each user will be able to save a list of favs. Each fav will have an **title** , **description** and **link**, and each list will be defined by a **unique** id and a name.
- The system have to allow the following actions
    - Create a new list with a given name (auto-generate the **unique** id)
    - Get the users lists
    - Get an individual list for the user
    - Add items to a given list (based on the generated id)
    - All endpoints have to be secured with Bearer Auth (JWT) `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkNBTUlMTyB6dWx1YWdhIiwicm9sZSI6InZpZXdlciIsImVtYWlsIjoiaysxQGxvLmNvbSIsImlhdCI6MTY0ODg0Mzc2NCwiZXhwIjoxNjQ4ODUwOTY0fQ.SG40QSQ7IZgvDT98Vr7KMYb2Oxfpy_mfeSHRv3fXZcY`
- You should ensure that the password is strong enough

### What are we looking for?

- **A well-designed solution and architecture** Avoid duplication, extract re-usable code where makes sense. We want to see that you can create an easy-to-maintain codebase.
- **Storage** We need a MongoDB database implementation.
- **Testing** Try to create tests covering the main functionalities of your code. Feel free to create both unit tests and functional tests.
- **Documentation** The CEO has a non-tech background so try to explain your decisions, as well as any other technical requirement (how to run the API, external dependencies, etc ...)

## **How to submit your solution**

- Push your code to the `develop` branch - we encourage you to commit regularly to show your thinking process was.
- **Create a new Pull Request** to `main` branch & **merge it**.

Once merged you **won't be able to change or add** anything to your solution, so double-check that everything is as you expected!

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/favs           | GET       | `isAuthenticated()`| Get all list of favorites            |
| /api/favs           | POST      | `isAuthenticated()`| Creates a new list of favorites      |
| /api/favs/:id       | GET       | `isAuthenticated()`| Get a single list of favorites       |
| /api/favs/:id       | DELETE    | `isAuthenticated()`| Deletes a list of favorites          |
| /auth/local/login   | POST      |                    | Login user by email/password         |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a user or log in, here we have some examples.

### Authentication **user** `/auth/local/login`:

Request Body:
```json
{
  "email": "kz@mz.com",
  "password": "12345"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}
```

## 2. Questions

1. Indicate which are the parts of the following url: `https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone`
2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-
3. When we talk about `CRUD`, what does it mean?

