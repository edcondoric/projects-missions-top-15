### FAVS API 

Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

## API endpoints

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
  "email": "test_api_favs@apifavs.com",
  "password": "AFJr*234"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}
```


### Creates a new list of favorites `/api/favs`:

Request Body:
```json
{
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"link": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
```

Response:
```json
{
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "link": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "owner": "6268b2ae11549e1a9052bf4b",
    "_id": "626c752df74f648b664c5c3a",
    "__v": 0
}
```