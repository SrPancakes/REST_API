
# Private Streaming Platform API

The **Private Streaming Platform API** is the backend for a self-hosted media streaming service, offering secure and scalable endpoints for user authentication, profile management, content access, and playback tracking. While it integrates seamlessly with a Synology NAS for media and database hosting, this API can also be used with any MariaDB or MySQL database, providing full flexibility for deployment.

---

## **Features**
- **User Authentication**: Secure JWT-based authentication.
- **Profile Management**: Multi-profile support for users under a single account.
- **Content Endpoints**: Manage movies, series, seasons, and episodes with metadata.
- **Watchlist and History**: Personalized watchlist and viewing history tracking.
- **Playback Progress**: Real-time tracking to resume playback seamlessly.
- **Recommendations and Search**: Smart recommendations and dynamic search capabilities.
- **Scalable Design**: Modular architecture for flexibility and scalability.

---

## **Tech Stack**
- **Backend**: Node.js with Express.js
- **Database**: MariaDB or MySQL (can be hosted on Synology NAS, cloud providers, or local servers)
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT)
- **Static Media Hosting**: Integrated with Synology NAS, WebDAV, or any static file server

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/private-streaming-platform-api.git
cd private-streaming-platform-api
```

### **2. Install Dependencies**
Ensure Node.js and npm are installed on your system, then run:
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory:
```plaintext
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=streaming_platform

# JWT
JWT_SECRET=yourjwtsecret
JWT_EXPIRES_IN=1h

# API
API_BASE_URL=http://localhost:3000
```

### **4. Set Up the Database**
Ensure MariaDB or MySQL is running on your preferred host. Use the provided SQL scripts or Sequelize models to initialize the database schema.

```bash
npm run db:init
```

### **5. Start the Server**
Run the server in development mode:
```bash
npm run dev
```

For production:
```bash
npm start
```

---

## **API Endpoints**

### **Authentication**
| Method | Endpoint          | Description                  |
|--------|--------------------|------------------------------|
| POST   | `/api/auth/signup` | Register a new user          |
| POST   | `/api/auth/login`  | Authenticate and get a token |

### **Profile Management**
| Method | Endpoint                     | Description                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/api/profiles/:userId`       | Get profiles for a user        |
| POST   | `/api/profiles/:userId`       | Create a new profile           |
| PUT    | `/api/profiles/:profileId`    | Update a profile               |
| DELETE | `/api/profiles/:profileId`    | Delete a profile               |

### **Content Management**
| Method | Endpoint                   | Description                           |
|--------|-----------------------------|---------------------------------------|
| GET    | `/api/content/movies`       | Get all movies                       |
| GET    | `/api/content/movies/:id`   | Get a specific movie                 |
| GET    | `/api/content/series`       | Get all series                       |
| GET    | `/api/content/series/:id`   | Get a specific series with episodes  |

### **Playback and Watchlist**
| Method | Endpoint                         | Description                   |
|--------|-----------------------------------|-------------------------------|
| GET    | `/api/playback/:profileId`        | Get playback progress         |
| POST   | `/api/playback/:profileId`        | Update playback progress      |
| GET    | `/api/watchlist/:profileId`       | Get watchlist for a profile   |
| POST   | `/api/watchlist/:profileId`       | Add content to watchlist      |

### **Search and Recommendations**
| Method | Endpoint                    | Description                     |
|--------|------------------------------|---------------------------------|
| GET    | `/api/search?query=string`  | Search content                 |
| GET    | `/api/recommendations/:id`  | Get recommendations for a user |

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

### **How to use this README**
1. Replace placeholders like `yourusername`, `yourjwtsecret`, and `yourpassword` with actual values.
2. Add additional setup instructions if needed, such as steps for database migration or media hosting.
3. Update the **Contact** section with your actual details.