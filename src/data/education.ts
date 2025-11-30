import type { Education } from '../types';

export const education: Education[] = [
  {
    id: "ubuffalo",
    degree: "M.S., Computer Science",
    institution: "University at Buffalo",
    location: "Buffalo, NY, USA",
    startDate: "Aug 2024",
    endDate: "Dec 2025 (expected)",
    gpa: "4.0/4.0",
    courses: [
      "Algorithms",
      "Machine Learning", 
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Operating Systems",
      "Data Intensive Computing"
    ],
    url: "https://engineering.buffalo.edu/computer-science-engineering.html",
    institutionLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/University_at_Buffalo_logo.svg/330px-University_at_Buffalo_logo.svg.png"
  },
  {
    id: "bits",
    degree: "B.E., Mechanical Engineering; M.Sc. Biological Sciences (dual)",
    institution: "Birla Institute of Technology and Science, Pilani",
    location: "India",
    startDate: "Aug 2016",
    endDate: "May 2021",
    gpa: "8.3/10.0",
    courses: [
      "Calculus and Linear Algebra",
      "Optimization",
      "Probability and Statistics",
      "Control Systems",
      "Robotics",
      "Computer Programming"
    ],
    url: "https://www.bits-pilani.ac.in/news/bits-pilani-raises-the-bar-in-university-rankings/",
    institutionLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/200px-BITS_Pilani-Logo.svg.png"
  }
];
