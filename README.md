# Online Tutor Booking Platform

A modern, responsive web application that connects students with qualified tutors for personalized learning experiences. Built with React and powered by Firebase for seamless user authentication and data management.

## 🌐 Live Demo
**[Visit Live Site](https://online-tutor-booking-platform.vercel.app/)**

## 📋 Project Overview
The Online Tutor Booking Platform is designed to bridge the gap between students seeking quality education and experienced tutors offering their expertise. The platform provides an intuitive interface for browsing tutors, booking sessions, and managing educational content.

## ✨ Key Features

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure authentication system using Firebase
- **JWT Authentication** - Token-based authentication with JWT tokens stored client-side
- **Token Verification** - JWT tokens sent with API calls for user verification
- **Social Login Support** - JWT implementation for both email/password and social authentication
- **Private Routes** - Protected pages with JWT token validation for authenticated users only
- **User Profiles** - Personalized user experience

### 👨‍🏫 Tutor Management
- **Find Tutors** - Browse and search through available tutors
- **Tutor Details** - Comprehensive tutor profiles with ratings and specializations
- **Featured Tutors** - Highlighted top-performing tutors on homepage
- **Add Tutorials** - Tutors can create and manage their tutorial offerings

### 📚 Booking System
- **My Booked Tutors** - Students can view and manage their booked sessions
- **My Tutorials** - Tutors can manage their created tutorials
- **Session Management** - Complete booking workflow

### 🎨 User Experience
- **Responsive Design** - Optimized for all device sizes
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Language Categories** - Organized learning categories
- **Statistics Dashboard** - Platform usage statistics
- **Testimonials** - User feedback and reviews
- **FAQ Section** - Common questions and answers
- **Loading States** - Smooth loading animations and spinners

### 🌟 Interactive Elements
- **Animated Features** - Engaging animations using Framer Motion
- **Lottie Animations** - Beautiful micro-interactions
- **Image Carousels** - Interactive content presentation
- **Toast Notifications** - Real-time user feedback
- **Sweet Alerts** - Enhanced user confirmations

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **React Router DOM 7.6.2** - Client-side routing
- **Vite 6.3.5** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Tailwind CSS component library
- **React Icons 5.5.0** - Popular icon library
- **Framer Motion 12.18.1** - Animation library

### Backend & Database
- **Firebase 11.9.1** - Authentication, database, and hosting
- **Axios 1.9.0** - HTTP client for API requests

### User Experience
- **React Toastify 11.0.5** - Toast notifications
- **SweetAlert2 11.22.0** - Beautiful alert dialogs
- **React Spinners 0.17.0** - Loading spinners
- **Lottie React 2.4.1** - Lottie animations
- **React Responsive Carousel 3.2.23** - Image carousels

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Support** - Type definitions for React

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── firebase/           # Firebase configuration
├── layouts/            # Page layouts
├── pages/              # Application pages
├── router/             # Routing configuration
└── assets/             # Static assets
```

## 🎯 Core Pages

- **Home** - Landing page with featured content
- **Find Tutors** - Browse available tutors
- **Tutor Details** - Individual tutor profiles
- **Add Tutorials** - Create new tutorials (Tutors)
- **My Tutorials** - Manage created tutorials (Tutors)
- **My Booked Tutors** - View booked sessions (Students)
- **Login/Register** - Authentication pages

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Highlights

- **Modern React Architecture** - Built with React 19 and modern hooks
- **Firebase Integration** - Secure authentication and real-time database
- **JWT Token Authentication** - Secure token-based authentication for API calls
- **Protected Routes** - JWT-secured private routes with token verification
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Enhanced UX with Framer Motion and Lottie
- **Type Safety** - TypeScript support for better development experience
- **Performance Optimized** - Fast loading with Vite and code splitting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React, Firebase, and Tailwind CSS**