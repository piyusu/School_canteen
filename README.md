# School Canteen – Express + Mongoose Prototype

Simple backend demonstrating Mongoose middleware:
- Student pre-save (generate referralCode)
- Order pre-validate (validate quantity, compute payableAmount)
- Order post-save (update Snack and Student aggregates)

## Setup
1. Install and run:
```
npm install
npm run dev or nodemon src/server.js or node src/server.js
```

## Endpoints
- POST `/seed` – seeds snacks
- POST `/students` – create student `{ name }`
- POST `/orders` – create order `{ studentId, snackId, quantity }`
- GET `/students/:id` – student details with populated orders
- GET `/snacks` – list snacks

## Notes
- Focuses on demonstrating required hooks and clean structure.

## Add .env and add mongouri and port there 
- MONGO_URI=mongodb+srv://piyush89332_db_user:2KxsQcj22nh6boij@cluster4.ipuzzhc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4
- PORT=4000
