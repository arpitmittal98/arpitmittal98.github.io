import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: "nutanix-mts2",
    position: "Member of Technical Staff Intern",
    company: "Nutanix, Inc.",
    location: "San Jose, CA, USA",
    startDate: "May 2025",
    endDate: "Dec 2025",
    current: true,
    description: [
      "Developed LLM-based agents and retrieval systems to automate root-cause analysis at enterprise scale",
      "Built and optimized ML engineering components including data pipelines, inference integrations, and evaluation tooling",
      "Experimented with prompt strategies, RAG architectures, and orchestration frameworks (LangChain, LangGraph) to improve reliability and response quality of production-facing AI agents"
    ],
    companyUrl: "https://www.nutanix.com/company",
    companyLogo: "https://www.sansonetworks.com/images/products/img-nutanix.jpg"
  },
  {
    id: "gra",
    position: "Graduate Research Assistant",
    company: "Cube Lab, University at Buffalo",
    location: "Buffalo, NY, USA",
    startDate: "Feb 2025",
    endDate: "May 2025",
    description: [
      "Designing methodologies to identify and mitigate biases in textual data using NLP methods, agent-based strategies and socio-cognitive theories",
      "Optimized data pipeline by iteratively masking text attributes to assess their impact on gender prediction accuracy"
    ],
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/University_at_Buffalo_logo.svg/330px-University_at_Buffalo_logo.svg.png",
    companyUrl: "https://cse.buffalo.edu/cubelab/"
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
    companyLogo: "/images/endovision.jpg",
    companyUrl: "https://endovisionai.com/"
  },
  {
    id: "iitb",
    position: "Summer Research Intern",
    company: "Indian Institute of Technology, Bombay",
    location: "Mumbai, India",
    startDate: "May 2019",
    endDate: "Jul 2019",
    description: [
      "Improved the efficiency of the YOLO Object Detection Algorithm.",
      "Optimized the algorithm to work in Real-Time for Car Detection."
    ],
    companyUrl: "https://www.iitb.ac.in/en/",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/320px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
  }
];
