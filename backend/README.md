AI Portfolio - Backend
=====================

This is the backend for the AI Portfolio project.
Built with Node.js, Express, and MongoDB.
It provides API endpoints for projects, experiences, personal info, and the AI chatbot.

Features:
---------
- CRUD operations for Projects, Experiences, About Me
- AI Chatbot integration using Google Gemini API
- Request throttling to prevent API overload
- MongoDB database connection with Mongoose
- Handles image URLs from S3

Installation:
-------------

$ git clone <repo-url>
$ cd backend
$ npm install

Setup Environment Variables:
----------------------------
Create a `.env` file in the root of the backend folder with the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_generative_ai_key

Run the Server:
---------------
$ npm run dev

Server will run at: http://localhost:5000

API Endpoints:
--------------

Projects:
  GET  /api/projects           -> Fetch all projects
  POST /api/projects           -> Create a new project
  Body example:
  {
    "title": "Project Title",
    "description": "Project description",
    "url": "https://projectlink.com",
    "techStack": ["React", "Node.js"],
    "imageUrl": "https://s3-bucket-link.png"
  }

Experiences:
  GET  /api/experiences       -> Fetch all experiences
  POST /api/experiences       -> Create a new experience
  Body example:
  {
    "role": "Frontend Developer",
    "company": "Tech Corp",
    "startDate": "2023-01-01",
    "endDate": "2024-01-01",
    "description": "Worked on UI development",
    "techStack": ["React", "Tailwind CSS"],
    "imageUrl": "https://s3-bucket-link.png"
  }

About Me:
  GET  /api/about             -> Fetch about me info
  POST /api/about             -> Create or update about me info
  Body example:
  {
    "aboutMe": "I am a software developer...",
    "family": "Married with 2 kids...",
    "gamingAirsoft": "I enjoy Airsoft and gaming in my free time..."
  }

Chatbot:
  POST /api/chat              -> Ask the AI chatbot a question
  Body example:
  {
    "jobDescription": "Frontend Developer role...",
    "question": "How well does this candidate fit?"
  }

Notes:
------
- Make sure MongoDB is running before starting the server.
- Chatbot requests are throttled to prevent API overload.
- Images for projects and experiences are stored on S3 and linked via `imageUrl`.
