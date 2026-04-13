export type TrainingCategory = "cyber-security" | "it" | "ai" | "general"

export interface Training {
  id: string
  slug: string
  title: string
  category: TrainingCategory
  description: string
  duration: string
  trainerId: string
  pdfUrl: string
  objectives: string[]
  prerequisites: string[]
  targetAudience: string[]
}

export interface Trainer {
  id: string
  name: string
  title: string
  bio: string
  expertise: string[]
  trainings: string[]
  image: string
}

export const trainings: Training[] = [
  // Cyber Security
  {
    id: "cs-001",
    slug: "certified-ethical-hacking",
    title: "Certified Ethical Hacking (CEH)",
    category: "cyber-security",
    description: "Learn to think and act like a hacker to better protect your organization from cyber threats.",
    duration: "5 days",
    trainerId: "trainer-001",
    pdfUrl: "/training-pdfs/ceh-training.pdf",
    objectives: [
      "Understand ethical hacking methodologies and phases",
      "Master footprinting, scanning, and enumeration techniques",
      "Learn system hacking, malware threats, and social engineering",
      "Perform penetration testing on networks and applications"
    ],
    prerequisites: [
      "Basic understanding of networking concepts",
      "Familiarity with operating systems (Windows/Linux)",
      "IT security fundamentals knowledge"
    ],
    targetAudience: [
      "Security professionals",
      "Network administrators",
      "IT auditors",
      "Security consultants"
    ]
  },
  {
    id: "cs-002",
    slug: "information-security-management",
    title: "Information Security Management",
    category: "cyber-security",
    description: "Comprehensive training on ISO 27001 standards and information security best practices.",
    duration: "3 days",
    trainerId: "trainer-001",
    pdfUrl: "/training-pdfs/isms-training.pdf",
    objectives: [
      "Understand ISO 27001 framework and requirements",
      "Implement information security management systems",
      "Conduct risk assessments and gap analysis",
      "Prepare for ISO 27001 certification"
    ],
    prerequisites: [
      "Basic IT knowledge",
      "Understanding of business processes"
    ],
    targetAudience: [
      "IT managers",
      "Security officers",
      "Compliance professionals",
      "Risk managers"
    ]
  },
  {
    id: "cs-003",
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals",
    category: "cyber-security",
    description: "Master the fundamentals of network security, firewalls, and intrusion detection systems.",
    duration: "4 days",
    trainerId: "trainer-002",
    pdfUrl: "/training-pdfs/network-security.pdf",
    objectives: [
      "Configure and manage firewalls effectively",
      "Implement intrusion detection and prevention systems",
      "Secure network infrastructure and protocols",
      "Monitor and respond to network security incidents"
    ],
    prerequisites: [
      "TCP/IP networking knowledge",
      "Basic system administration skills"
    ],
    targetAudience: [
      "Network administrators",
      "System administrators",
      "Security analysts",
      "IT professionals"
    ]
  },
  {
    id: "cs-004",
    slug: "cybersecurity-risk-assessment",
    title: "Cybersecurity Risk Assessment",
    category: "cyber-security",
    description: "Learn to identify, assess, and mitigate cybersecurity risks in enterprise environments.",
    duration: "2 days",
    trainerId: "trainer-002",
    pdfUrl: "/training-pdfs/risk-assessment.pdf",
    objectives: [
      "Apply risk assessment frameworks and methodologies",
      "Identify and categorize cybersecurity threats",
      "Quantify and prioritize risks effectively",
      "Develop risk mitigation strategies"
    ],
    prerequisites: [
      "Basic cybersecurity knowledge",
      "Understanding of enterprise IT systems"
    ],
    targetAudience: [
      "Risk managers",
      "Security managers",
      "Compliance officers",
      "IT auditors"
    ]
  },
  // IT
  {
    id: "it-001",
    slug: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    category: "it",
    description: "Comprehensive training on Amazon Web Services cloud infrastructure and services.",
    duration: "5 days",
    trainerId: "trainer-003",
    pdfUrl: "/training-pdfs/aws-cloud.pdf",
    objectives: [
      "Design and deploy scalable AWS architectures",
      "Configure and manage core AWS services",
      "Implement security best practices in AWS",
      "Optimize costs and performance"
    ],
    prerequisites: [
      "Basic IT infrastructure knowledge",
      "Familiarity with virtualization concepts"
    ],
    targetAudience: [
      "Cloud architects",
      "System administrators",
      "DevOps engineers",
      "IT professionals transitioning to cloud"
    ]
  },
  {
    id: "it-002",
    slug: "microsoft-azure-administration",
    title: "Microsoft Azure Administration",
    category: "it",
    description: "Learn to manage and administer Microsoft Azure cloud solutions.",
    duration: "4 days",
    trainerId: "trainer-003",
    pdfUrl: "/training-pdfs/azure-admin.pdf",
    objectives: [
      "Manage Azure subscriptions and resources",
      "Configure virtual networks and storage",
      "Implement identity and security controls",
      "Monitor and troubleshoot Azure services"
    ],
    prerequisites: [
      "Windows Server administration experience",
      "Basic networking knowledge"
    ],
    targetAudience: [
      "Azure administrators",
      "System administrators",
      "Cloud engineers",
      "IT managers"
    ]
  },
  {
    id: "it-003",
    slug: "devops-practices-tools",
    title: "DevOps Practices and Tools",
    category: "it",
    description: "Master CI/CD pipelines, containerization, and infrastructure as code.",
    duration: "4 days",
    trainerId: "trainer-004",
    pdfUrl: "/training-pdfs/devops.pdf",
    objectives: [
      "Build and manage CI/CD pipelines",
      "Containerize applications with Docker",
      "Orchestrate containers with Kubernetes",
      "Implement infrastructure as code practices"
    ],
    prerequisites: [
      "Software development experience",
      "Linux command line proficiency",
      "Version control with Git"
    ],
    targetAudience: [
      "DevOps engineers",
      "Software developers",
      "System administrators",
      "Release engineers"
    ]
  },
  {
    id: "it-004",
    slug: "database-administration",
    title: "Database Administration",
    category: "it",
    description: "Comprehensive training on SQL Server and MySQL database administration.",
    duration: "3 days",
    trainerId: "trainer-004",
    pdfUrl: "/training-pdfs/database-admin.pdf",
    objectives: [
      "Install and configure database servers",
      "Implement backup and recovery strategies",
      "Optimize database performance",
      "Manage security and user access"
    ],
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of relational databases"
    ],
    targetAudience: [
      "Database administrators",
      "System administrators",
      "Application developers",
      "Data analysts"
    ]
  },
  // AI
  {
    id: "ai-001",
    slug: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    category: "ai",
    description: "Introduction to machine learning algorithms, models, and practical applications.",
    duration: "5 days",
    trainerId: "trainer-005",
    pdfUrl: "/training-pdfs/ml-fundamentals.pdf",
    objectives: [
      "Understand supervised and unsupervised learning",
      "Implement common ML algorithms",
      "Evaluate and optimize model performance",
      "Apply ML to real-world problems"
    ],
    prerequisites: [
      "Python programming skills",
      "Basic statistics knowledge",
      "Linear algebra fundamentals"
    ],
    targetAudience: [
      "Data scientists",
      "Software developers",
      "Data analysts",
      "Research professionals"
    ]
  },
  {
    id: "ai-002",
    slug: "deep-learning-python",
    title: "Deep Learning with Python",
    category: "ai",
    description: "Advanced training on neural networks, TensorFlow, and PyTorch frameworks.",
    duration: "4 days",
    trainerId: "trainer-005",
    pdfUrl: "/training-pdfs/deep-learning.pdf",
    objectives: [
      "Build and train neural networks",
      "Work with CNN and RNN architectures",
      "Use TensorFlow and PyTorch effectively",
      "Implement transfer learning techniques"
    ],
    prerequisites: [
      "Machine learning fundamentals",
      "Strong Python programming skills",
      "Mathematical foundations (calculus, linear algebra)"
    ],
    targetAudience: [
      "ML engineers",
      "Data scientists",
      "AI researchers",
      "Software engineers"
    ]
  },
  {
    id: "ai-003",
    slug: "natural-language-processing",
    title: "Natural Language Processing",
    category: "ai",
    description: "Learn to build NLP applications including chatbots and sentiment analysis.",
    duration: "3 days",
    trainerId: "trainer-006",
    pdfUrl: "/training-pdfs/nlp.pdf",
    objectives: [
      "Understand NLP fundamentals and techniques",
      "Build text classification systems",
      "Develop conversational AI applications",
      "Implement sentiment analysis solutions"
    ],
    prerequisites: [
      "Python programming proficiency",
      "Basic machine learning knowledge"
    ],
    targetAudience: [
      "Data scientists",
      "NLP engineers",
      "Software developers",
      "Product managers"
    ]
  },
  {
    id: "ai-004",
    slug: "ai-business-leaders",
    title: "AI for Business Leaders",
    category: "ai",
    description: "Strategic overview of AI implementation and digital transformation.",
    duration: "2 days",
    trainerId: "trainer-006",
    pdfUrl: "/training-pdfs/ai-leaders.pdf",
    objectives: [
      "Understand AI capabilities and limitations",
      "Identify AI opportunities in your organization",
      "Develop AI implementation strategies",
      "Lead AI-driven transformation initiatives"
    ],
    prerequisites: [
      "Business management experience",
      "No technical background required"
    ],
    targetAudience: [
      "C-level executives",
      "Business managers",
      "Strategy consultants",
      "Department heads"
    ]
  },
  // General
  {
    id: "gen-001",
    slug: "project-management-professional",
    title: "Project Management Professional",
    category: "general",
    description: "Comprehensive PMP certification preparation course.",
    duration: "5 days",
    trainerId: "trainer-007",
    pdfUrl: "/training-pdfs/pmp.pdf",
    objectives: [
      "Master PMBOK Guide knowledge areas",
      "Apply project management processes",
      "Prepare for PMP certification exam",
      "Develop practical PM skills"
    ],
    prerequisites: [
      "Project management experience (3+ years)",
      "Secondary degree or equivalent"
    ],
    targetAudience: [
      "Project managers",
      "Team leaders",
      "Program managers",
      "PMO professionals"
    ]
  },
  {
    id: "gen-002",
    slug: "agile-scrum-master",
    title: "Agile Scrum Master",
    category: "general",
    description: "Master Agile methodologies and Scrum framework for project delivery.",
    duration: "2 days",
    trainerId: "trainer-007",
    pdfUrl: "/training-pdfs/scrum-master.pdf",
    objectives: [
      "Understand Agile principles and values",
      "Facilitate Scrum ceremonies effectively",
      "Coach teams on Agile practices",
      "Remove impediments and drive improvements"
    ],
    prerequisites: [
      "Basic project management knowledge",
      "Team collaboration experience"
    ],
    targetAudience: [
      "Scrum masters",
      "Project managers",
      "Team leads",
      "Agile coaches"
    ]
  },
  {
    id: "gen-003",
    slug: "business-analysis-fundamentals",
    title: "Business Analysis Fundamentals",
    category: "general",
    description: "Learn essential business analysis techniques and documentation.",
    duration: "3 days",
    trainerId: "trainer-008",
    pdfUrl: "/training-pdfs/business-analysis.pdf",
    objectives: [
      "Elicit and document requirements effectively",
      "Model business processes and data",
      "Analyze and validate solutions",
      "Communicate with stakeholders"
    ],
    prerequisites: [
      "Business process knowledge",
      "Communication skills"
    ],
    targetAudience: [
      "Business analysts",
      "System analysts",
      "Product owners",
      "Project managers"
    ]
  },
  {
    id: "gen-004",
    slug: "digital-transformation-strategy",
    title: "Digital Transformation Strategy",
    category: "general",
    description: "Strategic planning for organizational digital transformation initiatives.",
    duration: "2 days",
    trainerId: "trainer-008",
    pdfUrl: "/training-pdfs/digital-transformation.pdf",
    objectives: [
      "Assess digital maturity levels",
      "Develop digital transformation roadmaps",
      "Manage change and adoption",
      "Measure transformation success"
    ],
    prerequisites: [
      "Management or leadership experience",
      "Understanding of business operations"
    ],
    targetAudience: [
      "Business leaders",
      "IT directors",
      "Strategy consultants",
      "Change managers"
    ]
  }
]

export const trainers: Trainer[] = [
  {
    id: "trainer-001",
    name: "Ahmad Razak bin Ismail",
    title: "Senior Cybersecurity Consultant",
    bio: "Ahmad Razak has over 15 years of experience in cybersecurity, having worked with major financial institutions and government agencies in Malaysia. He holds CISSP, CEH, and CISM certifications and has conducted security assessments for organizations across Southeast Asia.",
    expertise: ["Ethical Hacking", "Security Auditing", "ISO 27001", "Penetration Testing"],
    trainings: ["cs-001", "cs-002"],
    image: "/trainers/trainer-001.jpg"
  },
  {
    id: "trainer-002",
    name: "Dr. Sarah Chen Wei Lin",
    title: "Network Security Specialist",
    bio: "Dr. Sarah Chen holds a PhD in Computer Science from Universiti Malaya with specialization in network security. She has published extensively on intrusion detection systems and serves as a consultant to several multinational corporations.",
    expertise: ["Network Security", "Firewall Management", "Risk Assessment", "Security Architecture"],
    trainings: ["cs-003", "cs-004"],
    image: "/trainers/trainer-002.jpg"
  },
  {
    id: "trainer-003",
    name: "Muhammad Hafiz bin Abdullah",
    title: "Cloud Solutions Architect",
    bio: "Hafiz is an AWS Certified Solutions Architect Professional and Microsoft Azure Expert with over 12 years of experience in cloud infrastructure design and implementation. He has led cloud migration projects for enterprises across various industries.",
    expertise: ["AWS", "Microsoft Azure", "Cloud Architecture", "Infrastructure Design"],
    trainings: ["it-001", "it-002"],
    image: "/trainers/trainer-003.jpg"
  },
  {
    id: "trainer-004",
    name: "Tan Mei Ling",
    title: "DevOps Engineer & Database Expert",
    bio: "Mei Ling brings 10 years of hands-on experience in DevOps practices and database administration. She has implemented CI/CD pipelines for Fortune 500 companies and specializes in database optimization and high-availability solutions.",
    expertise: ["DevOps", "CI/CD", "Docker", "Kubernetes", "SQL Server", "MySQL"],
    trainings: ["it-003", "it-004"],
    image: "/trainers/trainer-004.jpg"
  },
  {
    id: "trainer-005",
    name: "Dr. Rajesh Kumar",
    title: "AI & Machine Learning Researcher",
    bio: "Dr. Rajesh is a former research scientist at a leading AI lab with a PhD from MIT. He has published over 30 papers on machine learning and has helped numerous Malaysian companies implement AI solutions.",
    expertise: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Computer Vision"],
    trainings: ["ai-001", "ai-002"],
    image: "/trainers/trainer-005.jpg"
  },
  {
    id: "trainer-006",
    name: "Nurul Aisyah binti Hassan",
    title: "NLP & AI Strategy Consultant",
    bio: "Aisyah specializes in natural language processing and AI business strategy. She has helped organizations across Malaysia and Singapore implement conversational AI and develop AI-driven business transformation roadmaps.",
    expertise: ["NLP", "Chatbots", "AI Strategy", "Digital Transformation"],
    trainings: ["ai-003", "ai-004"],
    image: "/trainers/trainer-006.jpg"
  },
  {
    id: "trainer-007",
    name: "David Wong Chee Keong",
    title: "PMP & Agile Coach",
    bio: "David is a certified PMP and Professional Scrum Master with over 18 years of project management experience. He has coached hundreds of project managers and led agile transformations for major corporations in Malaysia.",
    expertise: ["Project Management", "Agile", "Scrum", "PRINCE2", "Stakeholder Management"],
    trainings: ["gen-001", "gen-002"],
    image: "/trainers/trainer-007.jpg"
  },
  {
    id: "trainer-008",
    name: "Fatimah binti Omar",
    title: "Business Analysis & Strategy Expert",
    bio: "Fatimah is a certified CBAP with extensive experience in business analysis and strategic planning. She has led digital transformation initiatives for government agencies and private sector organizations across ASEAN.",
    expertise: ["Business Analysis", "Requirements Engineering", "Digital Strategy", "Process Improvement"],
    trainings: ["gen-003", "gen-004"],
    image: "/trainers/trainer-008.jpg"
  }
]

export const categoryLabels: Record<TrainingCategory, string> = {
  "cyber-security": "Cyber Security",
  "it": "IT",
  "ai": "AI",
  "general": "General"
}

export function getTrainingsByCategory(category: TrainingCategory): Training[] {
  return trainings.filter(t => t.category === category)
}

export function getTrainerById(id: string): Trainer | undefined {
  return trainers.find(t => t.id === id)
}

export function getTrainingById(id: string): Training | undefined {
  return trainings.find(t => t.id === id)
}

export function getTrainingBySlug(slug: string): Training | undefined {
  return trainings.find(t => t.slug === slug)
}

export function getTrainerByTrainingId(trainingId: string): Trainer | undefined {
  const training = getTrainingById(trainingId)
  if (!training) return undefined
  return getTrainerById(training.trainerId)
}
