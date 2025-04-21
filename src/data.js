const data = {
  personal: {
    name: "Sarah Johnson",
    designation: "Data Scientist",
    contacts: [
      { type: "tel", label: "+1-555-123-4567" },
      { type: "email", label: "sarah.johnson@example.com" },
      { type: "website", label: "sarahjohnson.dev", urlPrefix: "https://" },
      { type: "location", label: "Boston, MA" },
    ],
  },
  summary:
    "Results-driven Data Scientist with 5 years of experience developing machine learning models and data-driven solutions. Skilled in transforming complex datasets into actionable insights that drive business decisions. Expertise in predictive modeling, natural language processing, and computer vision. Passionate about solving challenging problems through innovative applications of AI while maintaining a strong focus on ethical considerations and business impact.",
  experience: [
    {
      role: "Senior Data Scientist",
      type: "Full-time",
      from: "Jan 2022",
      till: "Present",
      company: "TechVision Analytics",
      location: "Boston, MA",
      achievements: [
        "Led a team of 4 data scientists in developing a real-time customer churn prediction model that increased retention by 23%",
        "Designed and implemented an NLP pipeline that improved document classification accuracy by 31%",
        "Created interactive data visualizations for executive dashboards that streamlined quarterly business reviews",
        "Mentored junior data scientists and developed internal training materials for ML best practices",
      ],
    },
    {
      role: "Data Scientist",
      type: "Full-time",
      from: "Mar 2020",
      till: "Dec 2021",
      company: "HealthCore Systems",
      location: "Cambridge, MA",
      achievements: [
        "Developed a computer vision algorithm to detect anomalies in medical imaging with 92% accuracy",
        "Implemented a patient risk stratification model that reduced hospital readmissions by 17%",
        "Collaborated with clinicians to translate medical requirements into technical specifications",
        "Built and deployed ML models using AWS SageMaker and monitored performance in production",
      ],
    },
    {
      role: "Data Analyst",
      type: "Full-time",
      from: "Jun 2018",
      till: "Feb 2020",
      company: "Global Retail Insights",
      location: "New York, NY",
      achievements: [
        "Analyzed customer purchase patterns to optimize product placement, increasing sales by 15%",
        "Created automated reporting systems that saved 20+ hours of manual work weekly",
        "Performed A/B testing on marketing campaigns that improved conversion rates by 28%",
        "Developed SQL queries and data pipelines to extract insights from multi-terabyte datasets",
      ],
    },
  ],
  education: [
    {
      certification: "Master of Science, Data Science",
      from: "2016",
      till: "2018",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
    },
    {
      certification: "Bachelor of Science, Statistics",
      from: "2012",
      till: "2016",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
    },
  ],
  keyAchievements: [
    {
      title: "Developed patent-pending ML algorithm",
      desc: "Created a novel approach to time-series forecasting that outperformed industry benchmarks by 35% and is currently in the patent application process",
    },
    {
      title: "Published research in top AI conference",
      desc: "First-author paper on interpretable machine learning models accepted at NeurIPS 2021",
    },
    {
      title: "Led open-source ML library development",
      desc: "Core contributor to PyTimeSeries, a library with over 500,000 downloads used for time-series analysis and forecasting",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "SQL",
    "R",
    "AWS",
    "Docker",
    "Kubernetes",
    "Tableau",
    "Power BI",
    "Git",
    "MLOps",
  ],
};

export default data;
