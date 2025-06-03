# 🚗 Car Dealership
A RESTful API built for managing cars, categories, and categories, and customers in a car dealership system. This project is designed using **Node.js**, **Express**, **TypeScript**, and **MongoDB**.

___

## 📌 Features

- JWT-based authentication (login and protected routes)
- CRUD operations for:
    - Cars
    - Managers
    - Categories
    - Customers
- Pagination and filters on `GET /cars`:
    - `brand`
    - `model`
    - `price range`
    - `availability`
- Modular and scalable folder structure
- Input validation and sanitization
- Centralized error handling
- Unit tests for Key functionalities
- API documentation using Postman

____

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)
- **Auth**: JWT
- **Testing**: Jest
- **Docs**: Postman Collection

___

## 🛠 Setup Instructions
1. ### **Clone the repo**
    ```
    git clone https://github.com/theChosenDevop/carDealership.git
    cd carDealership
    ```

2. ### **Install dependencies**
    ```
    npm install
    ```

3. ### **Setup environment variables**
    ```
    MONGO_DB=<your_mongodb_connection_string>
    JWT_SECRET=<your_secret>
    PORT=5000
    ```

4. ### **Run server**
    ```
        npm run dev
    ```



👨‍🦱 💻 Author
theChosenDevop