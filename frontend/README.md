AI Portfolio - Frontend
=======================

This is the frontend for the AI Portfolio project.
Built with React, TypeScript, and Tailwind CSS.
It displays projects, experiences, personal info, and integrates with the AI chatbot.

Features:
---------
- Responsive project and experience cards
- Hover effects on cards
- Chatbot interface to ask questions about job fit
- Fetches data from the backend API
- Displays images hosted on AWS S3

Installation:
-------------

$ git clone <repo-url>
$ cd frontend
$ npm install

Run the Development Server:
---------------------------

$ npm start

The app will run at: http://localhost:3000

Folder Structure:
-----------------
/src
  /components     -> React components like ProjectCard, ExperienceCard, Chatbot
  /pages          -> Pages like ProjectsList, ExperiencesList
  /utils          -> Utility functions
  /assets         -> Images and static files

Configuration:
--------------
- Ensure the backend server is running (default: http://localhost:5000)
- Update API endpoints in `fetch` calls if backend URL changes
- Images are served via URLs (e.g., AWS S3)

Usage:
------
- Visit `/projects` to see all projects
- Visit `/experiences` to see all experiences
- Open the AI Chatbot to paste a job description and ask questions about candidate fit
- Hover over cards to see visual effects
- Click project links to visit external project pages

Notes:
------
- Tailwind CSS is used for styling; feel free to customize classes
- Ensure CORS is enabled in backend for localhost:3000
- Chatbot uses Google Gemini API via backend proxy

