import React from 'react';
import './Projects.css';
import gold from '../logos/gold.PNG'
import dynamo from '../logos/dynamo.jpg'
import youtube from '../logos/wallhaven-0p5jqj_1920x1080.png'
import dental from '../logos/dental.jpg'
import travel from '../logos/travel.png'
import face from '../logos/face.jpg'
import pixel from '../logos/pixel.PNG'
const projects = [
  {
    title: "Dynamo - A Search Engine Platform",
    description: "Dynamo is an innovative search engine that combines traditional text search with advanced voice recognition and AI-driven image generation capabilities. Designed for seamless interaction, it empowers users to search, generate, and explore content through an intuitive and modern interface.",
    image: dynamo,
    link: "https://dynamo-ai.netlify.app/"
  },
  {
    title: "PixelVault - Cloud-Based Photo Storage",
    description: "A secure cloud-based photo storage platform that allows users to store and access their important photos from anywhere. Built using the MERN stack, it features JWT authentication for secure login and signup, and integrates Cloudinary for efficient image storage and retrieval.",
    image: pixel, // Replace with the actual image variable
    link: "https://pixel-vault.netlify.app/"
  },
  {
    title: "YouTube Clone",
    description: "A robust video streaming platform replicating YouTube's core functionality while introducing advanced features such as dynamic video quality adjustment, theme customization based on user location, secure email verification, and seamless payment gateway integration.",
    image: youtube,
    link: "https://yourtubeproject.netlify.app/"
  },
  {
    title: "Face Recognition Attendance System",
    description: "An advanced attendance system leveraging face recognition technology to automate attendance marking. The system identifies and matches faces with over 60% accuracy, requiring three successful matches to confirm identity. Once verified, attendance is automatically recorded in a Google Spreadsheet.",
    image: face,
    link: "https://github.com/RajatChoudhary1023/Face_Recognition_Attendance_System.git"
  },
  {
    title: "Find_The_Gold",
    description: "An interactive mini-game where players must search for hidden gold by clicking on the screen. The goal is simple: click in the right spot to uncover the gold and claim it as your reward. The game offers a fun and engaging experience with an element of surprise, perfect for quick play sessions. ",
    image: gold,
    link: "https://github.com/RajatChoudhary1023/Find_The_Gold.git"
  },
  {
    title: "Dental Appointment Booking Website",
    description: "A user-friendly dental website designed to simplify appointment scheduling. The platform allows patients to book dental appointments effortlessly using email, ensuring convenience and accessibility. With a clean and intuitive interface, this project enhances patient engagement and streamlines clinic operations.",
    image: dental,
    link: "https://github.com/piyushd23/Dental-Clinic-Website.git"
  },
  // {
  //   title: "Tourism Website Design",
  //   description: "Ganga Odyssey is a visually stunning UI/UX design project crafted in Figma, showcasing a travel website concept. Designed to inspire wanderlust, the interface features elegant layouts, intuitive navigation, and a seamless user experience.",
  //   image: travel,
  //   link: "https://www.figma.com/proto/HdUash0Ad7C6zVbKcvGS5m/ShopX?page-id=0%3A1&node-id=100-302&viewport=785%2C147%2C0.1&t=KrFbRwW1Lg6ciMMe-1&scaling=scale-down&content-scaling=fixed"
  // },

];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
