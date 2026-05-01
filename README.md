# 🧠 IdeaBoard - Project Idea Sharing Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&style=for-the-badge)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## Why IdeaBoard?
As a **B.Tech CSE student at VIT** and **B.S. Data Science student at IIT Madras**, I built IdeaBoard as a sleek, modern web application for my Full Stack Developer Internship assignment. It serves as a collaborative platform where developers can share innovative project ideas, get inspired, and find their next build.

This project synthesizes modern web development practices with a robust full-stack architecture, utilizing a **Next.js App Router** frontend and a **MongoDB** backend, styled with **Tailwind CSS** and **Framer Motion** for a premium user experience.

### Key Features
- **User Authentication** - Secure sign up & log in using NextAuth.js with Credentials provider and bcrypt password hashing.
- **Protected Dashboard** - Route guarding ensures only authenticated users can post and manage their ideas.
- **Dynamic Idea Board** - Browse a curated feed of innovative ideas across various categories (Web App, AI/ML, DevOps, etc.).
- **Category Filtering** - Instantly filter project ideas by specific domains to find exactly what you're looking for.
- **Responsive Dark Theme** - A polished glassmorphism UI that adapts seamlessly across all devices, complete with micro-animations.
- **Optimized Performance** - Built with Next.js Server Components and API Route Handlers for fast rendering and data fetching.

---

### Application Interaction
| Feature | Action | Experience |
|---------|--------|------------|
| **Authentication** | Sign up or log in via the nav bar | Secure credential validation and session management using JWTs. |
| **Share an Idea** | Click 'New Idea' in the dashboard | Animated form appears; upon submission, the idea is instantly saved to MongoDB. |
| **Filter Ideas** | Click on category tags | The grid dynamically filters displayed ideas using responsive staggered animations. |
| **Responsive Nav** | Resize the window to mobile | The navigation bar smoothly collapses into an accessible, animated hamburger menu. |

### Engineering Highlights
- **Backend Architecture**: Utilizes Next.js API Routes (`/api/*`) as a serverless backend for handling user registration and idea management securely.
- **Database Integration**: Seamlessly connects to a MongoDB Atlas cluster using Mongoose schemas for structured data validation.
- **Security**: Passwords are securely hashed with bcrypt (12 salt rounds) before storage, and API routes validate active sessions to prevent unauthorized actions.
- **Frontend Design**: Fully built with Tailwind CSS v4 and Framer Motion, ensuring a visually stunning and highly interactive UI without sacrificing load times.

---

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/chopra-yuvraj/deknek3d_Internship.git
cd deknek3d_Internship
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
```
Edit `.env.local` to include your MongoDB URI and NextAuth Secret.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Future Enhancements
Ideas for the next version:
- [ ] **Upvoting System** - Allow users to upvote their favorite ideas.
- [ ] **Comments & Discussions** - Enable threaded conversations on individual project ideas.
- [ ] **User Profiles** - Create public profiles showing all ideas posted by a specific user.
- [ ] **OAuth Integration** - Add GitHub and Google sign-in options via NextAuth.
- [ ] **Search Functionality** - Implement full-text search for finding ideas by keywords.

---

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

---

## Acknowledgments
Special recognition to:
- **My professors at VIT Vellore** for the comprehensive Web Programming curriculum.
- **IIT Madras coursework** for instilling a robust approach to data structures and architecture.
- **Vercel & MongoDB** for providing excellent developer-friendly deployment and database platforms.

---

## About the Developer

**Yuvraj Chopra** *B.Tech Computer Science Engineering - VIT Vellore* *B.S. Data Science - IIT Madras* Vellore, Tamil Nadu, India

*Passionate about building simple, effective solutions to everyday problems. Currently exploring the intersection of software engineering and data science.*

### Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-chopra--yuvraj-181717?style=for-the-badge&logo=github)](https://github.com/chopra-yuvraj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-chopra--yuvraj-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/chopra-yuvraj)
[![Email](https://img.shields.io/badge/Email-yuvrajchopra19%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yuvrajchopra19@gmail.com)

---

<div align="center">

**Built By Yuvraj Chopra**

[ **View on GitHub**](https://github.com/chopra-yuvraj/deknek3d_Internship)

</div>
