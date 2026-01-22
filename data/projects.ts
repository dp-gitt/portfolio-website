import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern, high-performance portfolio website built with Next.js and HeroUI.",
    longDescription: "You're looking at it! A fully responsive personal portfolio designed to showcase my experience and projects. Built with Next.js 14 (App Router) for SEO and performance, tailored with Tailwind CSS for styling, and interactive components powered by HeroUI and Framer Motion.",
    imageUrl: [
      "/images/portfolio-hero.png",
      "/images/portfolio-experience.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourname/portfolio", 
  },
  {
    id: "scamalytics",
    title: "Scamalytics",
    description: "Real-time scam detection application using RNN and Naive Bayes models.",
    longDescription: "A sophisticated web application designed to combat telecommunications fraud. It utilizes Recurrent Neural Networks (RNN) and Naive Bayes classifiers to analyze call patterns and SMS content in real-time, flagging potential scams with high accuracy.",
    imageUrl: [],
    tags: ["Python", "TensorFlow", "RNN", "Naive Bayes", "React"],
    githubUrl: "https://github.com/yourname/scamalytics",
  },
  {
    id: "cell-annotation",
    title: "Cell Annotation App",
    description: "Medical image annotation tool for ML cell identification research.",
    longDescription: "Developed as a Capstone project, this software enables medical researchers to annotate high-resolution microscopy images. It features efficient zooming/panning controls and exports structured datasets used to train machine learning models for cell identification.",
    imageUrl: [],
    tags: ["JavaScript", "Python", "Machine Learning", "Canvas API"],
  },
  {
    id: "habit-circle",
    title: "HabitCircle",
    description: "Full-stack habit tracking application deployed on AWS.",
    longDescription: "A social habit-tracking platform that allows users to form circles and track goals together. The infrastructure was deployed on AWS EC2 instances using Nginx as a reverse proxy, ensuring scalable and secure web hosting.",
    imageUrl: [],
    tags: ["AWS", "Nginx", "Node.js", "React", "PostgreSQL"],
  },
];