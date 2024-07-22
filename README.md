# Hospital Management API

This is a simple RESTful API for managing hospital information using Node.js, Express, and MongoDB.

## Features

- Create a new hospital entry
- Delete a hospital entry by ID
- Edit a hospital entry by ID
- Retrieve all hospital entries
- Retrieve a hospital entry by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- body-parser
- cors

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running
- npm installed

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SrikantAich/SumerPEP.git
    ```

2. Navigate to the project directory:

    ```bash
    cd SumerPEP
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and other necessary environment variables:

    ```env
    PORT=`PORT NO`
    MONGO_URI=your_mongodb_connection_string
    ```

5. Start the server:

    ```bash
    node app.js
    ```

## API Endpoints

### Create Hospital

- **Method:** `POST`
- **Endpoint:** `/api/v1/addhospital`
- **Body (JSON):**

    ```json
 {
        
        "name": "TEST",
        "city": "TEST",
        "image": "TEST.JPG",
        "speciality": [
            "Cardiology"
        ],
        "rating": 5,
        "description": "TEST",
        "numberOfDoctors": 1,
        "numberOfDepartments": 1
        
    }
    ```

### Delete Hospital

- **Method:** `DELETE`
- **Endpoint:** `/api/v1/deletehospital`
- **Body (JSON):**

    ```json
    {
        "id": "60c72b2f9b1e8b001c8e4d3b"  // Example ID
    }
    ```

### Edit Hospital

- **Method:** `PUT`
- **Endpoint:** `/api/v1/edithospital`
- **Body (JSON):**

    ```json
    {
        "id": "60c72b2f9b1e8b001c8e4d3b",  // Example ID
        "name": "Updated Hospital Name"
    }
    ```

### Get All Hospitals

- **Method:** `GET`
- **Endpoint:** `/api/v1/getallhospitals`

### Get Hospital by ID

- **Method:** `GET`
- **Endpoint:** `/api/v1/hospitalsbyid/:id`
- **URL Parameter:**
  - `id`: The ID of the hospital to retrieve, e.g., `60c72b2f9b1e8b001c8e4d3b`

## Project Structure

```plaintext
project-root/
│
├── controllers/
│   └── hospitalController.js
│
├── routes/
│   └── hospitalRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── app.js
├── package.json
└── README.md
