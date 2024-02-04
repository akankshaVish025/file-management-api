**The project is organized into different directories to maintain a clean and modular code structure.**

1. /src

The /src directory contains the source code of the application.

2. /controllers

authController.js: Manages user authentication.

fileController.js: Handles file-related operations.

3. /middlewares

authMiddleware.js: Ensures the authentication of requests.

errorMiddleware.js: Handles errors and sends appropriate responses.

uploadMiddleware.js: Manages file upload middleware.

4. /models

userModel.js: Defines the User model for user-related data.

5. /routes

authRoutes.js: Defines routes related to user authentication.

fileRoutes.js: Manages routes for file operations.

6. /services

fileService.js: This file implements file-related services.

7. /utils

encryptionUtil.js: This file contains utility functions for encryption and decryption.

8. /uploads

uploads/: It is a directory to store uploaded files.

9. app.js

It is the main application file where the server is configured and initialized.


**Steps to Run the Application**

Install dependencies: npm install

Start the MongoDB server.

Run the application: node app.js OR npm start

Use an API testing tool (e.g., Postman) to interact with the endpoints.

**API Endpoints**

User Authentication

POST /api/auth/login: User login endpoint.

POST /api/auth/register: User registration endpoint.

File Management

POST /api/upload: Upload a file (requires authentication).

DELETE /api/delete/:filename: Delete a file by filename (requires authentication).

GET /api/list: Get a list of uploaded files (requires authentication).

**Contributions**
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.
