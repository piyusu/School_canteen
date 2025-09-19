# School Canteen – Express + Mongoose Prototype

Simple backend demonstrating Mongoose middleware:
- Student pre-save (generate referralCode)
- Order pre-validate (validate quantity, compute payableAmount)
- Order post-save (update Snack and Student aggregates)

## Setup
1. Create `.env` from `.env.example` and set `MONGO_URI`.
2. Install and run:
```
npm install
npm run dev
```

## Endpoints
- POST `/seed` – seeds snacks
- POST `/students` – create student `{ name }`
- POST `/orders` – create order `{ studentId, snackId, quantity }`
- GET `/students/:id` – student details with populated orders
- GET `/snacks` – list snacks

## Notes
- Focuses on demonstrating required hooks and clean structure.

