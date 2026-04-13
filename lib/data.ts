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
  // New Programs
  {
    id: "cs-sme",
    slug: "cyber-threats-smes",
    title: "Cyber Threats and Scams Training for SMEs",
    category: "cyber-security",
    description: "Essential cybersecurity awareness and protection training tailored for Small and Medium Enterprises.",
    duration: "2 days",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-pdfs/cs-sme.pdf",
    objectives: ["Identify common cyber threats", "Protect SME infrastructure", "Recognize scams and phishing"],
    prerequisites: ["None"],
    targetAudience: ["SME Owners", "Employees", "Information Technology Staff"]
  },
  {
    id: "cs-isms",
    slug: "iso27001-isms",
    title: "ISO27001 (ISMS)",
    category: "cyber-security",
    description: "In-depth training on implementing and managing an Information Security Management System (ISMS) based on ISO 27001.",
    duration: "3 days",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-pdfs/iso27001.pdf",
    objectives: ["Understand ISO 27001 framework", "Implement ISMS", "Conduct risk assessments"],
    prerequisites: ["Basic Information Technology knowledge"],
    targetAudience: ["Information Technology Managers", "Security Officers", "Compliance Professionals"]
  },
  {
    id: "cs-awareness",
    slug: "cybersecurity-awareness",
    title: "CyberSecurity Awareness",
    category: "cyber-security",
    description: "Fundamental cybersecurity training to build a security-first culture within your organization.",
    duration: "1 day",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-pdfs/cs-awareness.pdf",
    objectives: ["Understand daily cyber risks", "Safe browsing habits", "Password management"],
    prerequisites: ["None"],
    targetAudience: ["All Employees"]
  },
  {
    id: "ai-legal",
    slug: "transforming-legal-with-ai",
    title: "Transforming Legal with Artificial Intelligence",
    category: "ai",
    description: "Explore how Artificial Intelligence is revolutionizing the legal industry and learn practical implementations.",
    duration: "2 days",
    trainerId: "trainer-azizul",
    pdfUrl: "/training-pdfs/ai-legal.pdf",
    objectives: ["Understand Artificial Intelligence in legal context", "Automate document review", "Enhance legal research"],
    prerequisites: ["Basic understanding of legal processes"],
    targetAudience: ["Lawyers", "Legal Assistants", "Paralegals", "Law Firm Managers"]
  },
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
      "Information Technology security fundamentals knowledge"
    ],
    targetAudience: [
      "Security professionals",
      "Network administrators",
      "Information Technology auditors",
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
      "Basic Information Technology knowledge",
      "Understanding of business processes"
    ],
    targetAudience: [
      "Information Technology managers",
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
      "Information Technology professionals"
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
      "Understanding of enterprise Information Technology systems"
    ],
    targetAudience: [
      "Risk managers",
      "Security managers",
      "Compliance officers",
      "Information Technology auditors"
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
      "Basic Information Technology infrastructure knowledge",
      "Familiarity with virtualization concepts"
    ],
    targetAudience: [
      "Cloud architects",
      "System administrators",
      "DevOps engineers",
      "Information Technology professionals transitioning to cloud"
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
      "Information Technology managers"
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
      "Artificial Intelligence researchers",
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
    title: "Artificial Intelligence for Business Leaders",
    category: "ai",
    description: "Strategic overview of Artificial Intelligence implementation and digital transformation.",
    duration: "2 days",
    trainerId: "trainer-006",
    pdfUrl: "/training-pdfs/ai-leaders.pdf",
    objectives: [
      "Understand Artificial Intelligence capabilities and limitations",
      "Identify Artificial Intelligence opportunities in your organization",
      "Develop Artificial Intelligence implementation strategies",
      "Lead Artificial Intelligence-driven transformation initiatives"
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
      "Information Technology directors",
      "Strategy consultants",
      "Change managers"
    ]
  }
]

export const trainers: Trainer[] = [
  {
    id: "trainer-ammar",
    name: "Ammar Haziq Bin Annas",
    title: "Cyber Security Consultant",
    bio: "Ammar Annas has over 5 years of experience in cybersecurity and trainings, having worked as a Cyber Security Engineer, Artificial Intelligence Engineer, and Cyber Security Researcher. He holds CompTia CySA+, CCEP, CCNA, ACT and ISO 27001 LI certifications and has conducted security assessments and penetration testing for organizations across Southeast Asia.",
    expertise: ["Ethical Hacking", "Security Auditing", "ISO 27001", "Penetration Testing", "Artificial Intelligence", "IoT"],
    trainings: ["cs-sme", "cs-isms", "cs-awareness"],
    image: "/trainers/trainer-ammar.jpg"
  },
  {
    id: "trainer-azizul",
    name: "Azizul Ariff Bin Puat Nelson",
    title: "Information Technology & Artificial Intelligence Consultant",
    bio: "Azizul Nelson is an Experienced System Administrator with over 8 years of hands-on expertise in managing hybrid Information Technology environments, including Windows Server, Microsoft 365, and Azure. Proven ability to troubleshoot hardware/software issues, implement application security protocols, and manage enterprise authentication systems such as Active Directory and Entra ID.",
    expertise: ["Artificial Intelligence", "Law", "Information Technology"],
    trainings: ["ai-legal"],
    image: "/trainers/trainer-azizul.jpg"
  }
]

export const categoryLabels: Record<TrainingCategory, string> = {
  "cyber-security": "Cyber Security",
  "it": "Information Technology",
  "ai": "Artificial Intelligence",
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
