import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: "nutanix-mts2",
    position: "Member of Technical Staff Inten",
    company: "Nutanix, Inc.",
    location: "San Jose, CA, USA",
    startDate: "May 2025",
    endDate: "Present",
    current: true,
    description: [
      "Developing an AI code-review agent that scans and provides reviews for 200+ enterprise-level pull requests weekly",
      "Developing integrations to enhance inference in an enterprise AI offering"
    ],
    companyUrl: "https://www.nutanix.com/company",
    companyLogo: "https://www.sansonetworks.com/images/products/img-nutanix.jpg"
  },
  {
    id: "wellsfargo-ds",
    position: "Data Scientist (Quant)",
    company: "Wells Fargo",
    location: "Bangalore, India",
    startDate: "July 2021",
    endDate: "July 2024",
    description: [
      "Built a prototype LLM-based document compliance tracker using Llama-2, reducing manual review time by 60%",
      "Automated model-validation workflows via FastAPI and HTML, cutting TAT by 65% and saving $500k annually",
      "Implemented a gender debiasing algorithm for word2vec and BERT embeddings within customer-facing NLP models, achieving a 25% reduction in gender bias",
      "Developed and tested ML models to minimize model risk in marketing, credit and fraud domains"
    ],
    companyUrl: "https://www.wellsfargo.com/about/",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png"
  },
  {
    id: "endovision",
    position: "Machine Learning Intern",
    company: "Endovision AI",
    location: "Remote, Hong Kong",
    startDate: "Jan 2021",
    endDate: "May 2021",
    description: [
      "Strengthened ETL pipelines and streamlined end-to-end deployment of vision models for medical imaging",
      "Built a real-time JavaScript GUI for doctors to visualize model predictions during endoscopy",
      "Enhanced YOLOv5 detection system with augmentation and ensembling in PyTorch, achieving mAP over 75%"
    ],
    companyLogo: "https://avatars.githubusercontent.com/u/2951919?s=280&v=4",
    companyUrl: "https://www.inria.fr/en/stars"
  },
  {
    id: "thomson-reuters",
    position: "Technical Intern",
    company: "Thomson Reuters",
    location: "Hyderabad, India",
    startDate: "2020-08-26",
    endDate: "2020-12-23",
    description: [
      "Successfully programmed full-stack of a web portal responsible for tracking projects and maintaining a hierarchical user access",
      "Also implemented a machine learning model for time-series forecasting of monthly expenses of different business units of the organization",
      "Achieved an accuracy of 94.5% on overall expenses and 85.12% on individual business units on a test set of 4th quarter of 2020"
    ],
    companyLogo: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/51/51197/51197.png",
    companyUrl: "https://www.thomsonreuters.com/en/about-us"
  },
  {
    id: "rapha-medic",
    position: "Software Development Intern",
    company: "Rapha Medic Pvt. Ltd.",
    location: "Hyderabad, India",
    startDate: "2020-06-01",
    endDate: "2020-07-31",
    description: [
      "Developed full-stack of a native mobile application capable of providing end-to-end medical services to users",
      "Implemented the front-end using Angular and Ionic Framework, and back-end using Express.js and Spring Boot",
      "Integrated video conferencing service using Twilio, and live chat using web sockets to allow seamless interaction of users with medical experts"
    ]
  }
];
