# Dev Desk Queue Backend

### https://devdeskqueue-be.herokuapp.com/api/

## Routes

#### Ticket Routes

| Method | Endpoint                 | Description                              |
|--------|--------------------------|------------------------------------------|
| GET    | `/tickets`               | Returns all tickets                      |
| GET    | `/tickets/:id`           | Returns ticket by id                     |
| GET    | `/tickets/admin/:id`     | Returns tickets assigned to admin        |
| GET    | `/tickets/student/:id`   | Returns tickets created by student       |
| POST   | `/tickets`               | Creates a new ticket                     |
| PUT    | `/tickets/:id`           | Updates ticket by id                     |
| DELETE | `/tickets/:id`           | Deletes ticket by id                     |

#### Authentication Routes

| Method | Endpoint                 | Description                              |
|--------|--------------------------|------------------------------------------|
| GET    | `/users`                 | Returns all users                        |
| GET    | `/users/:id`             | Returns user by id                       |
| POST   | `/register`              | Registers a new user                     |
| POST   | `/login`                 | Log in for existing user                 |

## Models

#### Users
---
```
{
  id: INTEGER // set auto by database
  username: STRING // unique, max 100 chars
  password: STRING
  email: STRING // unique
  idAdmin: BOOLEAN // defaults to false, set to true if user is admin
  cohort: STRING // not required
  created_at: DATE & TIME STRING in YYYY-MM-DD [ 0 - 23 ] [HH:MM:SS]
}
```

#### Tickets
---
```
{
  id: INTEGER //set auto by database
  title: STRING //unique, max 250 chars
  description: STRING
  category: STRING
  resolved: BOOLEAN //defaults to false
  assigned: BOOLEAN //defaults to false
  assigned_user: INTEGER // defaults to 0 when in the queue
  created_at: DATE & TIME STRING in YYYY-MM-DD [ 0 - 23 ] [HH:MM:SS]
  user_id: INEGER //foreign key in USERS table
}
```

## Helper Methods

#### Users

`getAllTickets()` -> Returns all tickets in database <br>
`getTicketByID(id)` -> Returns ticket by id <br>
`getTicketsAssignedToAdmin(assigned_user)` -> Returns tickets assigned to admin, by admin id <br>
`getTicketsCreatedByUser(user_id)` -> Returns tickets created by user, by user id <br>
`createTicket(ticket)` -> Inserts new ticket into database <br>
`updateTicket(id, updatedTicket)` -> Updates existing ticket <br>
`deleteTicket(id)` -> Deletes ticket by id <br>

#### Tickets

`getUserByID(id)` -> Returns user by id <br>
`getAllUsers()` -> Returns all users in database <br>
`register(user)` -> Registers new user <br>
`login(username)` -> Logs in existing user <br>
