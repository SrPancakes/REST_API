# Private Streaming Platform API

The **Private Streaming Platform API** is the backend for a self-hosted media streaming service, offering secure and scalable endpoints for user authentication, profile management, content access, and playback tracking. This API integrates seamlessly with media and database storage on a Synology NAS.

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
- **Database**: MariaDB (hosted on Synology NAS)
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT)
- **Static Media Hosting**: Integrated with Synology NAS or WebDAV

---

## **Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/private-streaming-platform-api.git
cd private-streaming-platform-api