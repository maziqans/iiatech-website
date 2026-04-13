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
    pdfUrl: "/training-posters/cs-sme.pdf",
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
    duration: "1 day",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-posters/iso27001.pdf",
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
    bio: "Azizul Nelson is an Experienced System Administrator with over 8 years of practical expertise in managing hybrid Information Technology environments, including Windows Server, Microsoft 365, and Azure. Proven ability to troubleshoot hardware and software issues, implement application security protocols, and manage enterprise authentication systems such as Active Directory and Entra ID.",
    expertise: ["Artificial Intelligence", "Law", "Information Technology"],
    trainings: ["ai-legal"],
    image: "/trainers/trainer-azizul.jpg"
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
