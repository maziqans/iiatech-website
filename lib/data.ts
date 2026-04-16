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
  overview?: string
  modules?: string[]
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
    objectives: [
      "Identify modern AI-driven scams including Deepfakes and Voice Cloning.",
      "Apply the CIA Triad to secure business data and financial transactions.",
      "Detect AI-assisted malware before it penetrates your network.",
      "Establish a culture of security with low-cost, high-impact best practices."
    ],
    overview: "In 2026, the digital battlefield has shifted; scammers no longer rely on suspicious emails or clumsy phishing attempts. Today, they leverage sophisticated AI to clone executive voices with eerie accuracy, generate deepfake videos of \"trusted\" partners, and deploy custom-coded viruses that adapt to your security in real-time. This intensive, 1-day program is specifically designed to flip the script, transforming your employees from your \"weakest link\" into a formidable \"strongest defense.\" We strip away the intimidating technical jargon and provide your team with practical, direct tools and psychological frameworks to identify and neutralize threats before they can penetrate your business.",
    modules: [
      "Module 1: Local and Global Latest Cyber Climate",
      "Module 2: Case Studies: Real-life Cyberattacks in Information Security",
      "Module 3: Introduction: The Role of Artificial Intelligence (AI) in Scams",
      "Module 4: How AI Makes Attacks More Effective",
      "Module 5: Deepfake (Detection and Impact)",
      "Module 6: Voice Cloning (Detection and Impact)",
      "Module 7: The Evolution of AI",
      "Module 8: AI-Assisted Malware Creation & Delivery",
      "Module 9: Detection and Protection Against AI-Assisted Attacks",
      "Module 10: Best Practices for Securing Personal and Financial Information"
    ],
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
    duration: "2 days",
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
    title: "Cyber Security Consultant, CEO of IIA Technology",
    bio: "Ammar Haziq holds a First Class Honours Degree in Computer Science (Network and Security) from the International Islamic University Malaysia (IIUM) and is a certified CompTIA Cybersecurity Analyst (CySA+) and ISO 27001 - Information Security Management System Lead Implementer. He is the Chief Technology Officer of Infinicore Sdn. Bhd., a NACSA-licensed cybersecurity firm, where he manages the organization’s strategic and technical trajectory. Additionally, he serves as the Founder and CEO of IIA Technology, positioning himself at the forefront of both specialized cybersecurity services and professional technical education.\n\nA recognized Cybersecurity Engineer and Researcher, Ammar has authored numerous research journals published in esteemed platforms such as IEEE, MJSAT, and IJPCC, and is a frequent speaker at various industry conferences. He is also an accredited HRD Corp trainer (ACT) and a Certified Cybersecurity Educator Professional (CCEP) with a background in advanced infrastructure hardening and penetration testing. Known for his technical mastery and leadership, Ammar is a dynamic figure dedicated to advancing the cybersecurity landscape and fostering a culture of digital resilience in Malaysia.",
    expertise: ["Ethical Hacking", "Security Auditing", "ISO 27001", "Penetration Testing", "Artificial Intelligence", "IoT"],
    trainings: ["cs-sme", "cs-awareness", "ai-study-smart"],
    image: "/trainer-images/ammar-haziq.png"
  },
  {
    id: "trainer-azizul",
    name: "Azizul Ariff Bin Puat Nelson",
    title: "Information Technology & Artificial Intelligence Consultant",
    bio: "Azizul Nelson is an Experienced System Administrator with over 8 years of practical expertise in managing hybrid Information Technology environments, including Windows Server, Microsoft 365, and Azure. Proven ability to troubleshoot hardware and software issues, implement application security protocols, and manage enterprise authentication systems such as Active Directory and Entra ID.",
    expertise: ["Artificial Intelligence", "Law", "Information Technology"],
    trainings: ["ai-legal"],
    image: "/trainer-images/trainer-azizul.png"
  },
  {
    id: "trainer-nazri",
    name: "Dr. Nazri Abdullah",
    title: "Lead Software Architect|Engineer Consultant",
    bio: "Dr. Nazri Abdullah is a highly accomplished Lead Software Architect and Engineer with a career spanning over two decades in information security, fintech, and backend development. He holds a Master’s in Computer Science from the Malaysia University of Technology and is a PhD candidate at the KTH Royal Institute of Technology, where his research focuses on using blockchain technology to enhance security in distributed big data. Nazri is also a recognized innovator, having successfully filed multiple patents in the United States and internationally related to blockchain identity management and micro-kernel architecture.\n\nCurrently serving as a Consultant Lead Software Architect and DevOps Engineer, Nazri has led the design and deployment of sophisticated platforms, including the LibertyPay salary advance system in Morocco and the AnchorWorx maritime marketplace in Malaysia. His extensive experience includes senior roles at international firms such as Nordark AB and Tink AB in Sweden, where he engineered scalable microservices architectures and integrated complex open banking financial data services.\n\nIn addition to his corporate and consulting work, Nazri has a strong academic background, having served as a Senior Lecturer and Head of the Information Security Department at Universiti Tun Hussein Onn. A Swedish Permanent Resident and Malaysian Citizen, he is fluent in English and Malay. He is recognized for his deep expertise in Go, Java, and cryptography, as well as his leadership in implementing robust CI/CD pipelines and observability stacks for high-availability production environments.",
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
  },
  {
    id: "trainer-annas",
    name: "Annas Bin Ahmad",
    title: "Business & Law Consultant",
    bio: "Annas Ahmad holds an Honours Degree in Law from Universiti Kebangsaan Malaysia and was admitted to the Malaysian Bar in 1997. He is the Group Executive Chairman of My-Sutera Group of Companies, producer of the well-known “Canggih” school uniform brand, which has earned national awards for excellence. His past roles include Group Managing Director of Intraxius Group and CEO/Executive Director of Prime Utilities Berhad, a Bursa Malaysia–listed company, following his early career in corporate and banking law.\n\nAppointed Adjunct Professor at Management Science University, Annas has extensive experience across law, property, utilities, textiles, and food industries. He is recognized for his integrity, leadership, and commitment to excellence, making him a respected and approachable figure in Malaysia’s corporate sector.",
    expertise: ["ESG", "Business", "Law"],
    trainings: [],
    image: "/trainer-images/annas-ahmad.png"
  },
  {
    id: "trainer-azhari",
    name: "Muhammad Azhari Bin Zid",
    title: "Sales & Marketing Consultant",
    bio: "Muhammad Azhari bin Zid is a seasoned marketing and sales leader, previously serving as the Chief Marketing Officer at My-Sutera Sdn Bhd, the producer of the renowned \"Canggih\" school uniform brand. He concurrently holds the role of Sales Director at Grain Valley Sdn Bhd, where he drives market growth. With a professional foundation as an Accountant at Boustead Holdings Bhd and a Bachelor of Accounting (Hons) from Universiti Tenaga Nasional, he blends financial acumen with strategic business development.\n\nBeyond the corporate boardroom, Azhari is a prominent community figure, serving as President of his local Resident Association and an Exco member for the Bumiputra Manufacturers & Services Industry Association (PPIPBM). As a professional trainer, he specializes in Business Communication and Public Speaking, utilizing real-world case studies to empower professionals with practical skills.",
    expertise: ["ABMS", "Sales & Marketing", "Business"],
    trainings: [],
    image: "/trainer-images/azhari.png"
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
