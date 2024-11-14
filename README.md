Brilliant Clone
A simplified version of Brilliant's learning platform, focusing on the landing page, authentication flow, and course dashboard. This project is designed to showcase modern web interface skills using React and TypeScript.

Live Demo
Check out the deployed project on Vercel: https://brilliant-clone-93lw.vercel.app/

Table of Contents
Features
Technologies Used
Getting Started
Project Structure
Available Scripts
Contributing
License
Features

Landing Page: A clean and modern landing page showcasing the platform’s capabilities.

Authentication: Secure sign-up and login with Firebase, including error handling and validation.
Course Dashboard: Displays available courses for the user with a minimalistic, user-friendly design.
State Management: Utilized Redux for global state management to ensure a seamless user experience.


Technologies Used
React with TypeScript: For building a scalable, type-safe front-end.
Redux: For efficient and centralized state management across components.
Firebase Authentication: To handle user sign-up, login, and authentication status.
Vercel: For seamless deployment and hosting of the application.
CSS Modules : Tailwind css


Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites
Node.js and npm installed on your machine.
A Firebase project for authentication.
Installation
Clone the repository:

git clone https://github.com/rahulyadav0296/brilliant-clone.git
cd brilliant-clone
Install dependencies:

npm install
Firebase Configuration:

Go to your Firebase Console.
Create a project and enable authentication (e.g., Email/Password).


Copy your Firebase configuration and create a .env file in the root of your project:
env

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 to view it in the browser.

Deployment
The app is deployed on Vercel and can be accessed at [Brilliant Clone] (https://brilliant-clone-93lw.vercel.app/).

Project Structure
A quick look at the project structure:

bash
Copy code
.
├── public             # Static assets
├── src
│   ├── components     # Reusable UI components
│   ├── pages          # Route-based pages
│   ├── redux          # Redux store and slices
│   ├── utils          # Utility functions
│   ├── App.tsx        # Main app component
│   └── index.tsx      # Entry point
├── .env               # Environment variables
├── package.json
└── README.md
Available Scripts
In the project directory, you can run:

npm run dev: Runs the app in development mode.
npm run build: Builds the app for production.
npm run serve: Serves the built app (after running npm run build).
npm run lint: Checks for linting errors.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find a bug or have a feature request.

License
This project is licensed under the MIT License.
