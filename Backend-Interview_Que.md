# 🚀 Node.js, Express.js, Mongoose & Postman  
## 150 Interview Questions and Answers

Beginner to Medium level interview questions for **Backend / MERN Developers**.

---

## 🟢 NODE.JS (1–40)

### 1. What is Node.js?
Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows running JavaScript on the server.

### 2. Is Node.js single-threaded?
Yes, but it uses an event loop and non-blocking I/O.

### 3. What is the Event Loop?
It handles asynchronous operations and executes callbacks.

### 4. What is non-blocking I/O?
Operations that do not block other code execution.

### 5. What is npm?
Node Package Manager for managing dependencies.

### 6. Difference between dependencies and devDependencies?
- dependencies: production  
- devDependencies: development only

### 7. What is package.json?
Project metadata and dependency file.

### 8. What is package-lock.json?
Locks dependency versions.

### 9. What is CommonJS?
Node module system using require/export.

### 10. ES Module vs CommonJS?
ESM uses import/export, CommonJS uses require.

### 11. What is fs module?
File system operations.

### 12. What is path module?
Handles file paths.

### 13. What is process object?
Provides process-related info.

### 14. What is environment variable?
Config values stored outside code.

### 15. What is .env file?
Stores environment variables securely.

### 16. What is callback?
Function passed as argument.

### 17. What is callback hell?
Deeply nested callbacks.

### 18. How to avoid callback hell?
Promises or async/await.

### 19. What is Promise?
Represents future result of async operation.

### 20. What is async/await?
Cleaner way to handle promises.

### 21. What is try-catch?
Error handling block.

### 22. What is setTimeout?
Runs code after delay.

### 23. What is setInterval?
Runs code repeatedly.

### 24. What is REPL?
Read–Eval–Print–Loop.

### 25. What is middleware?
Functions executed during request lifecycle.

### 26. What is nodemon?
Auto-restarts server.

### 27. What is clustering?
Using multiple CPU cores.

### 28. What is buffer?
Temporary binary data storage.

### 29. What is stream?
Process data in chunks.

### 30. What is REST API?
Client-server architecture.

### 31. What is HTTP?
Communication protocol.

### 32. HTTP vs HTTPS?
HTTPS is encrypted.

### 33. What is status code?
Response status indicator.

### 34. What is JSON?
Lightweight data format.

### 35. What is CORS?
Cross-origin request security rule.

### 36. How to enable CORS?
Using cors middleware.

### 37. What is JWT?
JSON Web Token.

### 38. What is hashing?
One-way encryption.

### 39. What is salting?
Adds randomness before hashing.

### 40. Node.js use cases?
APIs, real-time apps, microservices.

---

## 🟡 EXPRESS.JS (41–80)

### 41. What is Express.js?
Minimal Node.js web framework.

### 42. Why use Express?
Simplifies routing and middleware.

### 43. What is app in Express?
Express application instance.

### 44. What is routing?
Handling URLs and HTTP methods.

### 45. What is middleware?
Function with req, res, next.

### 46. Types of middleware?
Application, Router, Error, Built-in, Third-party.

### 47. What is next()?
Moves to next middleware.

### 48. What is body-parser?
Parses request body.

### 49. What is express.json()?
Parses JSON body.

### 50. What is express.urlencoded()?
Parses form data.

### 51. GET vs POST?
GET fetches, POST sends data.

### 52. What is req.params?
Route parameters.

### 53. What is req.query?
Query string data.

### 54. What is req.body?
Request payload.

### 55. What is res.send()?
Sends response.

### 56. What is res.json()?
Sends JSON response.

### 57. What is res.status()?
Sets HTTP status.

### 58. What is router?
Modular routing.

### 59. Why use Router?
Better structure.

### 60. What is MVC?
Model–View–Controller.

### 61. What is error-handling middleware?
Middleware with (err, req, res, next).

### 62. What is cookie-parser?
Parses cookies.

### 63. What is session?
Server-side user storage.

### 64. Session vs JWT?
Session is stateful, JWT is stateless.

### 65. What is authentication?
Verify user identity.

### 66. What is authorization?
Check permissions.

### 67. What is protected route?
Auth-required route.

### 68. What is rate limiting?
Limit request count.

### 69. What is Helmet?
Security middleware.

### 70. What is compression?
Reduces response size.

### 71. What is RESTful routing?
Standard API structure.

### 72. PUT vs PATCH?
PUT replaces, PATCH updates partially.

### 73. What is API versioning?
Multiple API versions.

### 74. What is proxy?
Intermediate server.

### 75. How to serve static files?
express.static().

### 76. What is template engine?
Dynamic HTML rendering.

### 77. What is EJS?
Embedded JavaScript templates.

### 78. Request lifecycle?
Request → Middleware → Route → Response.

### 79. What is logging middleware?
Logs requests (morgan).

### 80. Express vs Node?
Express is framework, Node is runtime.

---

## 🟠 MONGOOSE / MONGODB (81–120)

### 81. What is MongoDB?
NoSQL document database.

### 82. What is Mongoose?
ODM for MongoDB.

### 83. ODM vs ORM?
ODM for NoSQL, ORM for SQL.

### 84. What is schema?
Document structure.

### 85. What is model?
Schema wrapper.

### 86. What is collection?
Group of documents.

### 87. What is document?
Single record.

### 88. What is _id?
Unique identifier.

### 89. What is ObjectId?
MongoDB ID type.

### 90. What is mongoose.connect()?
Connect DB.

### 91. What is create()?
Insert document.

### 92. find vs findOne?
Array vs single document.

### 93. What is findById()?
Find by ID.

### 94. What is updateOne()?
Update one record.

### 95. What is findByIdAndUpdate()?
Find & update.

### 96. What is deleteOne()?
Delete record.

### 97. What is populate()?
Join collections.

### 98. What is reference?
ObjectId relation.

### 99. What is embedded document?
Nested document.

### 100. Embedded vs Reference?
Performance vs flexibility.

### 101. What is validation?
Data correctness.

### 102. Required field?
required: true.

### 103. What is unique?
Unique constraint.

### 104. What is enum?
Restricted values.

### 105. Default value?
Used when missing.

### 106. What is timestamps?
createdAt & updatedAt.

### 107. What is Mongoose middleware?
Pre/Post hooks.

### 108. What is pre-save hook?
Runs before save.

### 109. What is index?
Performance optimization.

### 110. What is aggregation?
Pipeline processing.

### 111. What is $match?
Filter stage.

### 112. What is $group?
Group records.

### 113. What is $project?
Select fields.

### 114. What is $lookup?
Join collections.

### 115. What is $regex?
Pattern search.

### 116. What is pagination?
Limit records.

### 117. What are limit & skip?
Pagination helpers.

### 118. What is transaction?
Atomic operations.

### 119. What is MongoDB Atlas?
Cloud MongoDB.

### 120. MongoDB vs SQL?
Schema-less vs relational.

---

## 🔵 POSTMAN (121–150)

### 121. What is Postman?
API testing tool.

### 122. Why use Postman?
Test APIs without frontend.

### 123. What is collection?
Group of requests.

### 124. What is environment?
Variable storage.

### 125. What is GET?
Fetch data.

### 126. What is POST?
Send data.

### 127. What is PUT?
Full update.

### 128. What is PATCH?
Partial update.

### 129. What is DELETE?
Remove data.

### 130. What is request body?
Payload data.

### 131. Body types?
raw, form-data, x-www-form-urlencoded.

### 132. What are headers?
Request metadata.

### 133. Authorization tab?
Auth configuration.

### 134. Bearer token?
JWT format.

### 135. What is status code?
Response result.

### 136. What is response time?
API speed.

### 137. What is test script?
JS response validation.

### 138. What is pre-request script?
Runs before request.

### 139. How to send JWT?
Authorization → Bearer Token.

### 140. What is cookie?
Session storage.

### 141. What is Postman console?
Debug tool.

### 142. What is mock server?
Fake APIs.

### 143. What is documentation?
Auto API docs.

### 144. What is Newman?
Postman CLI.

### 145. How to test errors?
Send invalid data.

### 146. How to test protected routes?
Add token.

### 147. What is collection runner?
Runs multiple requests.

### 148. Variable scopes?
Global, Environment, Collection.

### 149. How to share APIs?
Export collection.

### 150. Why backend dev uses Postman?
Testing, debugging, validation.

---
