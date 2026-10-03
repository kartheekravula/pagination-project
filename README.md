# Pagination Project – Node.js, Express & MongoDB

A simple **Full Stack Pagination Project** developed using **Node.js, Express.js, MongoDB, and React.js** to demonstrate how pagination is implemented in modern web applications.

This project demonstrates two commonly used pagination techniques:

* **Offset-Based Pagination**
* **Cursor-Based Pagination**



## 📌 Project Objective

The main objective of this project is to understand how large amounts of data can be efficiently retrieved and displayed in smaller sets instead of loading all records at once.

Pagination helps improve:

* Application performance
* Database efficiency
* API response time
* User experience
* Memory utilization



## 🛠️ Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Tools

* Visual Studio Code
* MongoDB Compass
* Postman
* Git & GitHub



## 📂 Project Structure


pagination-project/
│
├── backend/
│   ├── server.js
│   ├── insert.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── ...
│
└── README.md




# 1. Offset-Based Pagination

Offset pagination uses `page` and `limit` parameters to determine which records should be retrieved.

### Example API Request


GET /api/users?page=3&limit=10


For:


page = 3
limit = 10


The server calculates the number of records to skip:


skip = (page - 1) × limit
skip = (3 - 1) × 10
skip = 20


MongoDB query:


User.find()
    .skip(20)
    .limit(10);


Therefore, the API retrieves **10 users starting from the 21st record**.

### Example


Page 1 → Records 1–10
Page 2 → Records 11–20
Page 3 → Records 21–30
Page 4 → Records 31–40
```



# 2. Cursor-Based Pagination

Cursor pagination uses a unique value, commonly MongoDB's `_id`, to identify the position from which the next set of records should be retrieved.

### Example API Request


GET /api/users?limit=10&cursor=64f1a2b3c4d5e6f7


The server uses the cursor to retrieve records after the specified `_id`.

Example MongoDB query:


User.find({
    _id: { $gt: cursor }
})
.limit(10);


The API returns the next set of records along with a cursor that can be used to request the following set of records.

### Advantages

* Efficient for large datasets
* Avoids large `skip()` values
* Suitable for infinite scrolling
* Generally performs well with continuously changing datasets

---

# 🔄 Offset vs Cursor Pagination

| Feature             | Offset Pagination                      | Cursor Pagination                             |
| ------------------- | -------------------------------------- | --------------------------------------------- |
| Parameters          | `page`, `limit`                        | `cursor`, `limit`                             |
| MongoDB approach    | `skip()` + `limit()`                   | Cursor condition + `limit()`                  |
| Implementation      | Simple                                 | Moderate                                      |
| Page number support | Yes                                    | No                                            |
| Large datasets      | `skip()` can become expensive          | Generally more efficient                      |
| Infinite scrolling  | Less suitable                          | Well suited                                   |
| Changing datasets   | Can lead to skipped/duplicated records | Generally provides more consistent navigation |



**How to Run the Project**

**Step 1: Clone the Repository**

Clone the repository using Git:


git clone https://github.com/YOUR-USERNAME/pagination-project.git


Move into the project directory:

cd pagination-project


**Step 2: Start the Backend**

Open a terminal and navigate to the backend folder:


cd backend


Install the required dependencies:

npm install


Start the backend server:

node server.js


The backend server will run at:


http://localhost:5000


**Step 3: Insert Sample Data**

If `insert.js` is provided, run:

node insert.js


This will insert sample user records into the MongoDB database.

> **Note:** Run the data insertion script only when you need to populate the database with the sample records.



**Step 4: Start the Frontend**

Open another terminal.

Navigate to the frontend folder:


cd frontend


Install the required dependencies:


npm install


Start the React application:


npm start


The frontend will normally be available at:


http://localhost:3000



**MongoDB Configuration**

Make sure MongoDB is running on your system before starting the backend.

Example MongoDB connection string:


mongodb://127.0.0.1:27017/paginationDB


The database can be viewed and managed using **MongoDB Compass**.

Example database structure:


Database:
paginationDB

Collection:
users




**Testing the API**

The pagination APIs can be tested using **Postman** or a web browser.

**Offset Pagination**

**Page 1**


GET http://localhost:5000/api/users?page=1&limit=10


**Page 2**


GET http://localhost:5000/api/users?page=2&limit=10


**Page 3**


GET http://localhost:5000/api/users?page=3&limit=10




**Cursor Pagination**

**First Request**


GET http://localhost:5000/api/users?limit=10


The response provides a cursor for retrieving the next set of records.

**Next Request**

GET http://localhost:5000/api/users?limit=10&cursor=YOUR_CURSOR


Replace `YOUR_CURSOR` with the cursor returned by the previous API response.


**Example API Response**

An offset-pagination response may look like:

{
  "users": [
    {
      "_id": "64f1a2b3c4d5e6f7",
      "name": "User 1",
      "email": "user1@example.com"
    }
  ],
  "currentPage": 1,
  "totalPages": 10,
  "totalUsers": 100
}


The exact response structure depends on the implementation in `server.js`.



**Learning Outcomes**

After completing this project, students will understand:

1. What pagination is and why it is required.
2. How offset-based pagination works.
3. How cursor-based pagination works.
4. How MongoDB `skip()` and `limit()` are used.
5. How to implement pagination APIs using Express.js.
6. How to connect Node.js with MongoDB.
7. How to test REST APIs using Postman.
8. How React.js consumes paginated APIs.
9. The differences between offset and cursor pagination.
10. The advantages and limitations of different pagination approaches.

Author

**Ravula Kartheek**
Assistant Professor
Department of Computer Science & Engineering

This project is developed for **academic learning and Full Stack Development laboratory practice**.

---

Support

If you find this project useful for learning **Full Stack Development, REST APIs, MongoDB, and Pagination**, consider giving the repository a ⭐ on GitHub.


Topics Covered

Node.js
Express.js
MongoDB
Mongoose
REST API
Pagination
Offset Pagination
Cursor Pagination
React.js
Postman
Full Stack Development

