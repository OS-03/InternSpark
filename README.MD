# Job-Seeking Portal (MERN Stack)

## Overview

This project is a comprehensive Job-Seeking Portal designed for the course **Entrepreneurship and E-Business**. It provides dedicated panels for both Companies and Employees, all managed under robust Admin controls. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and implements strong security layers to protect different components and user roles.

## Features

- **Company Panel:**
	- Post, update, and manage job listings
	- View applicants and manage applications
	- Company profile management

- **Employee Panel:**
	- Browse and filter job listings
	- Apply for jobs and track application status
	- Manage personal profile and resume

- **Admin Controls:**
	- Oversee all companies, employees, and job postings
	- Approve or reject company registrations
	- Monitor platform activity and ensure compliance

- **Security:**
	- Authentication and authorization for all user roles
	- Protected routes and role-based access control
	- Secure file uploads and data validation

## Technology Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary

## Folder Structure

- `frontend/` — React application (UI, components, hooks, Redux store)
- `backend/` — Node.js/Express API (routes, controllers, models, middlewares)
- `assets/` — Static assets and images

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Setup Instructions

1. **Clone the repository:**
	 ```bash
	 git clone <your-repo-url>
	 cd InternSpark_Final
	 ```

2. **Install dependencies:**
	 - For backend:
		 ```bash
		 cd backend
		 npm install
		 ```
	 - For frontend:
		 ```bash
		 cd ../frontend
		 npm install
		 ```

3. **Configure environment variables:**
	 - Create `.env` files in both `backend/` and `frontend/` as needed (see sample `.env.example` if provided).

4. **Run the application:**
	 - Start backend server:
		 ```bash
		 cd backend
		 npm start
		 ```
	 - Start frontend dev server:
		 ```bash
		 cd ../frontend
		 npm run dev
		 ```

## Usage

- Register as a company or employee
- Companies can post jobs and review applicants
- Employees can browse jobs and apply
- Admin can manage users and oversee platform activity

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is for educational purposes as part of the Entrepreneurship and E-Business course.
