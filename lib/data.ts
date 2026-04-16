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
    objectives: [
      "Understand how AI transforms conveyancing workflows, including contract drafting, clause detection, and risk flagging.",
      "Apply AI tools to review sale & purchase agreements, tenancy contracts, and land title transfers with improved accuracy and efficiency.",
      "Evaluate AI-generated contract summaries against manual analysis to assess reliability and utility.",
      "Develop responsible AI practices by addressing ethics, confidentiality, and data governance in client engagements.",
      "Design effective prompts tailored to legal roles and jurisdictions to enhance AI outputs in property matters.",
      "Conduct AI-driven risk assessments using clause scoring and Likelihood × Impact matrices to prepare structured compliance reports."
    ],
    overview: "The core objective is to move beyond manual, time-intensive processes, such as reviewing tenancy agreements and sales-purchase agreements (SPA), by leveraging AI tools like ChatGPT and Copilot. The material outlines how AI can be used for clause-by-clause risk scoring, automated contract summarization, and ensuring compliance with statutory requirements. It emphasizes a shift toward \"Responsible AI Use,\" where legal practitioners act as supervisors to enhance efficiency while managing ethical risks, data privacy, and jurisdictional accuracy. Ultimately, the topic presents a roadmap for legal professionals to transition from traditional information retrieval to high-level strategic advisory roles by adopting AI-driven risk assessment and reporting methodologies.",
    modules: [
      "Module 1: Introduction to AI in Conveyancing",
      "Module 2: AI in Contract Review & Property Transactions",
      "Module 3: Key AI Tools for Conveyancing",
      "Module 4: Responsible AI in Conveyancing Practice",
      "Module 5: Prompt Engineering for Legal Workflows",
      "Module 6: AI for Legal Research & Analysis",
      "Module 7: AI for Risk Assessment & Reporting",
      "Module 8: Practical Applications & Case Studies",
      "Module 9: Microsoft Copilot & Productivity Integration"
    ],
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
    objectives: [
      "Study smarter with AI: Learn how to use AI to make quizzes, ask questions, and revise subjects like BM, BI, Science, and Sejarah.",
      "Use AI to explain difficult topics in simple steps and compare answers with textbooks.",
      "Get help from AI to choose better words, fix paragraphs, and write stronger intros and conclusions.",
      "Use AI to create study schedules, set goals, and stay focused with fun and helpful prompts.",
      "Learn how to use AI safely and responsibly without copying or getting the wrong answers."
    ],
    overview: "In today’s digital era, preparing for SPM requires more than traditional study methods. This one-day module equips Form 5 students with practical AI skills to enhance revision, generate subject-specific questions, improve essays, and manage study plans. Through hands-on activities and guided prompting, participants will learn to study smarter, not harder, leveraging AI ethically for academic success.",
    modules: [
      "Module 1: Introduction to AI & Prompting Basics",
      "Module 2: Prompting AI to Generate SPM Questions",
      "Module 3: Prompting AI to Explain Topics Like a Teacher",
      "Module 4: Using AI to Improve Essays (BM & BI)",
      "Module 5: AI as a Study Planner & Motivation Coach",
      "Module 6: AI Ethics & Smart Usage Habits",
      "Module 7: Showcase, Reflection & Closing"
    ],
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
    duration: "2 days",
    trainerId: "trainer-ammar",
    pdfUrl: "/training-posters/ai-study-smart.pdf",
    objectives: [
      "Explain what Generative AI is, how it works, and where it has limitations.",
      "Apply responsible and ethical AI practices including data privacy, academic integrity, and fact-verification.",
      "Write effective prompts that produce accurate, subject-specific explanations from AI tools.",
      "Use AI as a personal tutor to understand difficult concepts across any SPM subject.",
      "Draft, structure, and improve written essays in Bahasa Malaysia and English using AI feedback.",
      "Conduct research and verify information using AI tools, avoiding plagiarism and misinformation.",
      "Generate custom practice questions, mock tests, and revision summaries for SPM preparation.",
      "Build and maintain a personal AI study system including a prompt library and subject-specific workflows."
    ],
    overview: "Most students already use AI — but almost none have been taught how to use it well. They copy, paste, and hope for the best. Then they wonder why the output sounds nothing like them, fails to answer the question, or gets them in trouble with their teacher.\n\nAI Study Smart is a two-day, hands-on learning programme designed specifically for Form 4 and Form 5 students preparing for the Sijil Pelajaran Malaysia (SPM) examination. It is not a talk on what AI is — it is a practical bootcamp on how to use AI as a powerful, ethical, and personal study partner. By the end of two days, every student will have used AI to tackle real subjects from their own school syllabus, improved an actual essay they are working on, generated their own SPM practice questions, and built a personal AI study system they can use from that day forward.",
    modules: [
      "Module 1: AI & You — Myths, Ethics & Responsible Use",
      "Module 2: AI as Your Personal Tutor — Understanding Any Subject",
      "Module 3: The Prompting Skill — Ask Better, Get Better Answers",
      "Module 4: AI for Tough Subjects — Live Study Session",
      "Module 5: AI for Essay Writing — BM & English",
      "Module 6: AI for Research, Projects & Fact-Checking",
      "Module 7: AI-Powered Exam Preparation",
      "Module 8: My Personal AI Study System — Action Plan & Graduation"
    ],
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
    objectives: [
      "Introduction to Sustainability & RMK12",
      "Introduction to Carbon Family",
      "Introduction on Sustainability reporting based on GRI Standard",
      "Sustainability Journey for SME"
    ],
    overview: "This course is designed to give a practical approach through a combination of theory, case study and workshop will be used to ensure the participants’ involvement and interest.",
    modules: [
      "Module 1: Introduction to Sustainability",
      "Module 2: RMK12- Malaysian Government Direction in Sustainability",
      "Module 3: Definition of Carbon & Family",
      "Module 4: ESG, SDG17, COP",
      "Module 5: Sustainability Journey for Organization Standards- Global Reporting Initiative (GRI)",
      "Module 6: Sustainability Journey for SME"
    ],
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
    objectives: [
      "Enable participants to understand how corruption may impact their company, what corporate liability for corruption offences means and what constitute the effective measures required by the Government.",
      "Equip small enterprises with a for the next steps that they need to prepare for their anti-corruption programme to help protect the organisation, managers and directors against corporate liability arising from a corruption incident.",
      "Explain the fundamental concepts and principles of an anti-bribery management system (ABMS) based on ISO 37001.",
      "Understand ISO 37001:2016 requirements and how to implement it effectively"
    ],
    overview: "ISO 37001:2016 is Anti-Bribery Management System (ABMS) which implemented by organization in order to have a total system in order to mitigate the bribery issues. It is more than Adequate Procedures can offer. Then those companies who have government project, by 2021, they need to be certified ISO 37001.",
    modules: [
      "Module 1: Introduction to management system and the process approach",
      "Module 2: Normative frameworks and methodologies related to anti-bribery",
      "Module 3: Fundamental principles of anti-bribery Understand 'context organization'",
      "Module 4: Clause 4: Context of Organization Clause 5: Leadership and Commitment",
      "Module 5: Clause 6: Planning Clause 7: Support",
      "Module 6: Clause 8: Operation Clause 9: Performance Evaluation",
      "Module 7: Clause 10: Improvement",
      "Module 8: Review and questions"
    ],
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
    bio: "Azizul Ariff Bin Puat Nelson is an accomplished IT professional and consultant based in Kuala Lumpur with over eight years of expertise in managing hybrid IT environments. He currently serves as an IT and AI Consultant, where he bridges the gap between technology and law by delivering specialized workshops on AI prompting and legal drafting for academic and professional legal sectors. With a unique educational background that includes a Bachelor of Law (Hons) and ongoing studies in Computer Science specializing in Network and Computer Security, Azizul offers a rare blend of legal insight and technical proficiency. His core competencies include system administration, endpoint hardening, and the implementation of advanced security protocols such as Microsoft Defender XDR.\n\nThroughout his career, Azizul has held senior IT roles at organizations such as Enfrasys Consulting, OPUS IT Services, and Jentayu Sustainables, where he managed critical infrastructure for major clients like the Malaysian Communications and Multimedia Commission. His extensive project experience ranges from leading POS system migrations for retail giants like Mydin to executing large-scale laptop deployments for financial institutions. Azizul holds multiple industry certifications, including CompTIA Security+ and Microsoft Azure AI Fundamentals, reflecting his commitment to operational excellence and the ethical integration of emerging technologies.",
    expertise: ["Artificial Intelligence", "Law", "Legal-Tech", "Information Technology"],
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
