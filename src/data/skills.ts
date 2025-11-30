import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    id: "ml-ai",
    name: "Machine Learning & AI",
    items: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Langchain", icon: "https://python.langchain.com/img/brand/wordmark.png" },
      { name: "AI Agents", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
      { name: "MCP", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "FAISS", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png" },
      { name: "pgvector", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" }
    ]
  },
  {
    id: "distributed-systems",
    name: "Distributed Systems",
    items: [
      { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
      { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
      { name: "ETL Pipelines", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" }
    ]
  },
  {
    id: "backend-apis",
    name: "Backend & APIs",
    items: [
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" }
    ]
  }
];
