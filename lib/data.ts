export type TrainingCategory = "cyber-security" | "it" | "general"

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
    duration: "1 day",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-posters/cybersec-and-scams-training.pdf",
    objectives: ["Identify common cyber threats", "Protect SME infrastructure", "Recognize scams and phishing"],
    prerequisites: ["None"],
    targetAudience: ["SME Owners", "Employees", "Information Technology Staff"]
  },
  {
    id: "cs-awareness",
    slug: "information-security-awareness",
    title: "Information Security Awareness",
    category: "cyber-security",
    description: "Fundamental cybersecurity training to build a security-first culture within your organization.",
    duration: "2 days",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-posters/cs-awareness.pdf",
    objectives: ["Understand daily cyber risks", "Safe browsing habits", "Password management"],
    prerequisites: ["None"],
    targetAudience: ["All Employees"]
  },
  {
    id: "ai-legal",
    slug: "transforming-legal-with-ai",
    title: "Transforming Legal with Artificial Intelligence",
    category: "it",
    description: "Explore how Artificial Intelligence is revolutionizing the legal industry and learn practical implementations.",
    duration: "1 day",
    trainerId: "trainer-azizul",
    pdfUrl: "/training-posters/ai-legal.pdf",
    objectives: ["Understand Artificial Intelligence in legal context", "Automate document review", "Enhance legal research"],
    prerequisites: ["Basic understanding of legal processes"],
    targetAudience: ["Lawyers", "Legal Assistants", "Paralegals", "Law Firm Managers"]
  },
  {
    id: "ai-spm-success",
    slug: "ai-exposure-spm-success",
    title: "AI Exposure for SPM Success",
    category: "it",
    description: "Learn how to leverage AI tools for better study habits, efficient learning, and SPM success.",
    duration: "1 day",
    trainerId: "trainer-zafir",
    pdfUrl: "/training-posters/ai-spm-success.pdf",
    objectives: ["Understand AI tools", "Improve study efficiency", "Ethical use of AI"],
    prerequisites: ["None"],
    targetAudience: ["SPM Students", "Educators"]
  },
  {
    id: "ai-at-work",
    slug: "ai-at-work-practical-guide",
    title: "How to Use AI at Work: A Practical Guide for Office Teams",
    category: "it",
    description: "A practical guide for office teams to integrate Artificial Intelligence into their daily workflows to enhance productivity.",
    duration: "1 day",
    trainerId: "trainer-zafir",
    pdfUrl: "/training-posters/ai-at-work.pdf",
    objectives: ["Automate daily tasks", "Enhance productivity with AI", "Improve workflow efficiency"],
    prerequisites: ["Basic Information Technology skills"],
    targetAudience: ["Office Teams", "Administrators", "Managers"]
  },
  {
    id: "ai-study-smart",
    slug: "ai-study-smart",
    title: "AI Study Smart: AI-Powered Learning Skills for SPM Students & Beyond",
    category: "it",
    description: "Discover AI-powered learning skills and techniques to excel in SPM and further education.",
    duration: "1 day",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-posters/ai-study-smart.pdf",
    objectives: ["Leverage AI for learning", "Develop smart study techniques", "Future-proof skills"],
    prerequisites: ["None"],
    targetAudience: ["SPM Students", "High School Students"]
  },
  {
    id: "gen-esg",
    slug: "esg-awareness",
    title: "ESG Awareness",
    category: "general",
    description: "Comprehensive awareness training on Environmental, Social, and Governance (ESG) principles and implementation.",
    duration: "1 day",
    trainerId: "trainer-nazri",
    pdfUrl: "/training-posters/esg-awareness.pdf",
    objectives: ["Understand ESG principles", "Implement ESG frameworks", "Improve corporate sustainability"],
    prerequisites: ["None"],
    targetAudience: ["Corporate Leaders", "Managers", "All Employees"]
  },
  {
    id: "gen-abms",
    slug: "iso37001-abms",
    title: "ISO 37001: Anti-Bribery Management System (ABMS)",
    category: "general",
    description: "Learn the requirements and guidelines for establishing, implementing, maintaining, and improving an anti-bribery management system.",
    duration: "2 days",
    trainerId: "trainer-nazri",
    pdfUrl: "/training-posters/iso37001-abms.pdf",
    objectives: ["Understand ISO 37001 requirements", "Implement ABMS", "Mitigate bribery risks"],
    prerequisites: ["None"],
    targetAudience: ["Compliance Officers", "Management", "Auditors"]
  },
]

export const trainers: Trainer[] = [
  {
    id: "trainer-ammar",
    name: "Ammar Haziq Bin Annas",
    title: "Cyber Security Consultant",
    bio: "Ammar Annas has over 4 years of experience in cybersecurity and trainings, having worked as a Cyber Security Engineer, Artificial Intelligence Engineer, and Cyber Security Researcher. He holds CompTia CySA+, CCEP, CCNA, ACT and ISO 27001 LI certifications and has conducted security assessments and penetration testing for organizations across Southeast Asia.",
    expertise: ["Ethical Hacking", "Security Auditing", "ISO 27001", "Penetration Testing", "Artificial Intelligence", "IoT"],
    trainings: ["cs-sme", "cs-awareness", "ai-study-smart"],
    image: "/trainer-images/ammar-haziq.jpg"
  },
  {
    id: "trainer-azizul",
    name: "Azizul Ariff Bin Puat Nelson",
    title: "Information Technology & Artificial Intelligence Consultant",
    bio: "Azizul Nelson is an Experienced System Administrator with over 8 years of practical expertise in managing hybrid Information Technology environments, including Windows Server, Microsoft 365, and Azure. Proven ability to troubleshoot hardware and software issues, implement application security protocols, and manage enterprise authentication systems such as Active Directory and Entra ID.",
    expertise: ["Artificial Intelligence", "Law", "Information Technology"],
    trainings: ["ai-legal"],
    image: "/trainer-images/trainer-azizul.jpg"
  },
  {
    id: "trainer-nazri",
    name: "Dr. Nazri Abdullah",
    title: "Lead Software Architect/Engineer Consultant",
    bio: "Nazri is a highly accomplished Lead Software Architect and Full-Stack Developer with over 20 years of experience across industrial, academic, and entrepreneurial sectors. He specializes in designing and deploying production-grade microservices architectures, particularly in the Fintech, Blockchain, and Maritime industries. With a deep background in Computer Security and Backend Engineering, he has a proven track record of building scalable, secure systems for global markets including Malaysia, Sweden, Morocco, and the UAE.",
    expertise: ["Software Architecture & System Design", "Cyber Security", "Cryptography", "DevOps & Cloud"],
    trainings: ["gen-esg", "gen-abms"],
    image: "/trainer-images/nazri-abd.png"
  },
  {
    id: "trainer-zafir",
    name: "Zafir Eqkhmal Bin Abdul Jalil",
    title: "MDEC Web Developer Associate",
    bio: "Zafir Jalil is proficient in JavaScript, TypeScript, and Python, he delivers efficient solutions using frameworks like ReactJS, Laravel, and WordPress. He leads the development of large-scale systems, including a POS platform for MAIWP's Back-to-School program, generating over RM2.7 million in sales. A passionate trainer, Zafir designs and conducts HRD Corp–accredited programs, sharing his expertise in web technologies, system development, and digital solutions.",
    expertise: ["Web Development", "Information Technology"],
    trainings: ["ai-spm-success", "ai-at-work"],
    image: "/trainer-images/zafir-jalil.jpeg"
  }
]

export const categoryLabels: Record<TrainingCategory, string> = {
  "cyber-security": "Cyber Security",
  "it": "Information Technology",
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
