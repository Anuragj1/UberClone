# User Registration Endpoint


## Description

This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, creates a new user, and returns a JSON Web Token (JWT) along with the user details.

## Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).



### Example Response

-`user`(object);
    - `fullname`: An object containing:
        - `firstname`: A string with a minimum length of 3 characters   (required).
        - `lastname`: A string with a minimum length of 3 characters (optional).
    - `email`: A string representing the user's email address with a minimum length of 5 characters (required).
    - `password`: A string with a minimum length of 6 characters (required).

-`token` (String): JWT Token
```

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

-----------------------------------------------------------------------------------------------------------------------------------

# User login Endpoint

## Description

This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, creates a new user, and returns a JSON Web Token (JWT) along with the user details.

## Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example Response

- `user` (object):
  - `email`: A string representing the user's email address with a minimum length of 5 characters (required).
  - `password`: A string with a minimum length of 6 characters (required).
- `token` (String): JWT Token

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}

-------------------------------------------------------------------------------------------------------------------------------

User Profile Endpoint
Endpoint
GET /users/profile

Description
This endpoint is used to get the profile of the authenticated user. It requires a valid JWT token.

Responses
Success
Status Code: 200 OK
Body:
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
Unauthorized
Status Code: 401 Unauthorized
Body:
{
  "message": "Authentication required"
}

------------------------------------------------------------------------------------------------------------------------------------

User Logout Endpoint
Endpoint
GET /users/logout

Description
This endpoint is used to log out the authenticated user. It clears the JWT token from cookies and blacklists the token.

Responses
Success
Status Code: 200 OK
{
  "message": "Logged out successfully"
}
Unauthorized
Status Code: 401 Unauthorized
Body:
{
  "message": "Authentication required"
}

------------------------------------------------------------------------------------------------------------------------------------

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain. It validates the input data, checks if the captain already exists, hashes the password, creates a new captain, and returns the captain details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the captain's email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vechile`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: An integer with a minimum value of 1 (required).
  - `vechileType`: A string that must be one of `car`, `motorcycle`, or `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vechile": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vechileType": "car"
  }
}

------------------------------------------------------------------------------------------------------------------------------------------

Captain Login Endpoint
Endpoint
POST /captains/login

Description
This endpoint is used to authenticate a captain. It validates the input data, checks if the captain exists, compares the password, and returns a JSON Web Token (JWT) along with the captain details.

Request Body
The request body should be a JSON object with the following fields:
{
  "email": "jane.doe@example.com", // required, must be a valid email
  "password": "password123" // required, minimum length: 6 characters
}

Responses
Success
Status Code: 200 OK
Body:
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vechile": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vechileType": "car"
    }
  }
}

Validation Errors
Status Code: 400 Bad Request
Body:
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
 
 -----------------------------------------------------------------------------------------------------------------------------------------

 Captain Profile Endpoint
Endpoint
GET /captains/profile

Description
This endpoint is used to get the profile of the authenticated captain. It requires a valid JWT token.

Responses
Success
Status Code: 200 OK
Body:
{
  "_id": "captain_id_here",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vechile": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vechileType": "car"
  }
}
Unauthorized
Status Code: 401 Unauthorized
Body:
{
  "message": "Authentication required"
}

--------------------------------------------------------------------------------------------------------------------------------------

Captain Logout Endpoint
Endpoint
GET /captains/logout

Description
This endpoint is used to log out the authenticated captain. It clears the JWT token from cookies and blacklists the token.

Responses
Success
Status Code: 200 OK
Body:
{
  "message": "Logged out successfully"
}
Unauthorized
Status Code: 401 Unauthorized
Body:
{
  "message": "Authentication required"
}

------------------------------------------------------------------------------------------------------------------------------------------