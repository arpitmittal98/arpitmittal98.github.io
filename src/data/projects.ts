import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "diabetes_chatbot",
    title: "Multilingual Diabetes Health Chatbot",
    summary: "Multilingual medical assistant for diabetes education, symptom checking, and lifestyle advice using NLP techniques.",
    date: "April 2025",
    tags: ["Natural Language Processing", "Deep Learning", "Large Language Models", "Chatbot"],
    image: "/images/diabetes_chatbot/featured.png",
    category: "Natural Language Processing",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/arpitmittal98/multilingingual-diabetes-assistant"
      },
      {
        type: "report",
        url: "https://drive.google.com/file/d/1KZedXTZ3GATNgjkV2IoI-99Hu1EbCPJV/view?usp=drive_link"
      }
    ]
  },
  {
    id: "dmql",
    title: "Relational Database Design and Optimization for E-commerce Logistics",
    summary: "Designed and optimized a relational database schema for an e-commerce logistics system, focusing on efficient data retrieval and storage.",
    date: "March 2025",
    tags: ["Database Design", "SQL", "Optimization"],
    image: "/images/dmql/featured.png",
    category: "Full-stack Development",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/arpitmittal98/Ecommerce-logistics-sql-project"
      }
    ]
  },
  {
    id: "papersphere",
    title: "Research Paper Recommendation System",
    summary: "A recommendation system that suggests research papers based on user interests and reading history using collaborative filtering techniques.",
    date: "Oct 2024",
    tags: ["Natural Language Processing", "Machine Learning", "Deep Learning", "Large Language Models"],
    image: "/images/papersphere/featured.png",
    category: "Natural Language Processing",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/arpitmittal98/PaperSphere-all-in-one-research-assistant"
      }
    ]
  },
  {
    id: "ceeri_uav_navigation",
    title: "Autonomous Navigation of UAVs using Reinforcement Learning",
    summary: "Developed an autonomous navigation system for UAVs in complex environments using reinforcement learning algorithms.",
    date: "March 2020",
    tags: ["Reinforcement Learning", "Autonomous Navigation", "Robotics"],
    image: "/images/ceeri_uav_navigation/featured.png",
    category: "Reinforcement Learning",
    featured: false,
    links: [
      {
        type: "report",
        url: "https://drive.google.com/file/d/1WOCkFAWX5HAyXB2zB4Gka5_uoAHad86J/view?usp=drive_link"
      }
    ]
  }
];
