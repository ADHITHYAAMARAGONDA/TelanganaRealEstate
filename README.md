Telangana RealEstate App

Telangana RealEstate is a full-featured web application designed to facilitate the process of buying, selling, and renting properties across Telangana. It provides a responsive user interface, secure authentication, property listing management, image uploads, advanced search filters, and contact functionality between users and property listers.

Table of Contents

- Problem Statement  
- Objectives and Key Learnings  
- Project Architecture  
- Technologies Used  
- Features and Functional Modules  
- Folder Structure  
- Future Scope  
- Conclusion  
- Live Demo  
- References  
- Team

Problem Statement

To develop a web-based platform that allows users to list, search, and manage real estate properties in Telangana. The application includes features such as email and social login, listing creation and updates, toast notifications, image uploads, and communication via email.

Objectives and Key Learnings

Objectives:  
- Develop a scalable application with authentication and listing management  
- Integrate external services for secure login, storage, and messaging  
- Implement responsive frontend with state management and backend APIs  

Key Learnings:  
- Building frontend components and routing  
- Developing backend APIs and securing endpoints  
- Handling file uploads and data validation  
- Firebase authentication and OAuth integration  
- Managing state with Redux Toolkit  
- Integrating EmailJS for contact services  
- Real-time notifications using toast libraries  

Project Architecture

Frontend ←→ Axios ←→ Express API ←→ MongoDB  
        ↑              ↓                ↓  
Firebase Hosting  Firebase Auth     Firebase Storage  

Technologies Used

Frontend: React, Redux Toolkit, Tailwind CSS, Swiper.js  
Backend: Node.js, Express.js  
Database: MongoDB  
Authentication: Firebase Authentication, Google OAuth, Facebook OAuth  
Storage: Firebase Storage  
Email Services: EmailJS  
Notifications: react-toastify  
Tools: VS Code, Git, GitHub, Postman

Features and Functional Modules

Frontend

- User registration and login with email/password and social login  
- Dynamic home page with property carousel  
- Create, update, and delete property listings with up to 6 images  
- Search with filters: property type, amenities, sorting, pagination  
- View listing details with contact option  
- User profile view and update  
- Contact landlords using email form with toast notifications  

Backend

- User registration and login with JWT authentication  
- Password encryption using bcrypt  
- Protected routes with middleware verification  
- CRUD operations for property listings  
- Image handling using Firebase Storage  
- Email contact endpoint with EmailJS integration

Folder Structure

client/  
├── src/  
│   ├── assets/  
│   ├── components/  
│   │   ├── Contact.jsx  
│   │   ├── Footer.jsx  
│   │   ├── Header.jsx  
│   │   ├── ListingItem.jsx  
│   │   ├── OAuth.jsx  
│   │   ├── PrivateRoute.jsx  
│   ├── pages/  
│   │   ├── About.jsx  
│   │   ├── Contact.jsx  
│   │   ├── CreateListing.jsx  
│   │   ├── Home.jsx  
│   │   ├── Listing.jsx  
│   │   ├── Profile.jsx  
│   │   ├── Search.jsx  
│   │   ├── SignIn.jsx  
│   │   ├── SignUp.jsx  
│   │   ├── UpdateListing.jsx  
│   ├── redux/  
│   │   ├── store.js  
│   │   └── user/  
│   │       └── userSlice.js  
│   ├── utils/  
│   │   └── Emailjs.js  
│   ├── App.jsx  
│   ├── firebase.js  
│   ├── index.css  
│   ├── main.jsx  
│   ├── .env  
│   └── package.json  

server/  
├── controllers/  
│   ├── auth.controller.js  
│   ├── listing.controller.js  
│   └── user.controller.js  
├── models/  
│   ├── listing.model.js  
│   └── user.model.js  
├── routes/  
│   ├── auth.route.js  
│   ├── listing.route.js  
│   └── user.route.js  
├── utils/  
│   ├── error.js  
│   └── verifyUser.js  
├── index.js  
├── .env  
└── package.json  

Future Scope

- Role-based access control for admin and users  
- Integration with payment gateways for premium listings  
- Virtual tours and property walkthroughs  
- Rating and review system for listed properties  
- AI-driven property recommendation system  
- Multi-language support  
- Mobile application version

Conclusion

Telangana RealEstate delivers a complete real estate solution with a secure, scalable, and user-friendly platform. It integrates essential web development technologies with Firebase services to provide social login, cloud storage, and messaging. The application successfully implements modern design patterns, state management, backend logic, and third-party service integration, providing a ready-to-scale solution for property buyers, sellers, and renters in Telangana.

Live Demo(Deployed Link)

https://telangana-realestate.web.app

 

 
