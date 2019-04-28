### https://devdeskqueue-be.herokuapp.com/api/

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
