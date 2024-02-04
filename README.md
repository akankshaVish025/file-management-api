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

Run the application: node app.js   OR   npm start

Use an API testing tool (e.g., Postman) to interact with the endpoints.

**API Endpoints**

User Authentication

POST /api/auth/login: User login endpoint.

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/f6af6f0e-a1da-4c22-b62a-b7ad7b23697e)


POST /api/auth/register: User registration endpoint.

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/261ff737-0fc0-47ab-9918-86887c0d8416)


File Management

POST /api/upload: Upload a file (requires authentication).

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/32ec0533-1cc4-4325-afc4-9c6b715106e0)


DELETE /api/delete/:filename: Delete a file by filename (requires authentication).

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/33fb1914-0d21-4b15-9e4e-46e9fa0d2320)


GET /api/list: Get a list of uploaded files (requires authentication).

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/44bcb455-7d06-4337-bb22-58abf6fcf13f)


GET /api/search: Search files by matching filenames (requires authentication).

![image](https://github.com/akankshaVish025/file-management-api/assets/100062465/a946673d-7980-44d3-9c1c-0b8cfc9c8ece)



**Contributions**
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.
