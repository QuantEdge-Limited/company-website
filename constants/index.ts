import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import {
  Brain,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  Headset,
  ShoppingCart,
  ChartLine,
  Palette,
} from "lucide-react";

export const companyProfile = [
  {
    category: "Digital",
    title: "Our Mission",
    description:
      "We exist to ignite the digital revolution across Africa — empowering businesses, governments, and communities through intelligent, scalable, and transformative software solutions. Our mission is to build technology that not only solves today's challenges but also creates opportunities for generations to come.",
    image: "/images/about/mission.jpg",
    alt: "Our mission - Empowering Africa through digital innovation",
    buttonLabel: "Learn more",
  },
  {
    category: "Innovation",
    title: "Our Vision",
    description:
      "To lead Africa into a bold new era of innovation — where technology amplifies human potential, redefines how industries operate, and transforms how communities connect, work, and thrive. We envision a continent powered by creativity, intelligence, and impact-driven technology.",
    image: "/images/about/vision.jpg",
    alt: "Our vision - Shaping the digital destiny of Africa",
    buttonLabel: "Discover",
  },
  {
    category: "Teamwork",
    title: "Our Culture",
    description:
      "Our culture is our strength — fueled by curiosity, driven by courage, and sustained by collaboration. We celebrate diversity, champion resilience, and design with empathy. Every idea, every line of code, and every project we deliver is guided by a shared purpose: to make technology more human, and humanity more empowered.",
    image: "/images/about/culture.jpg",
    alt: "Our culture - Collaboration, courage, and creativity in action",
    buttonLabel: "Explore",
  },
  {
    category: "Excellence",
    title: "Our Approach",
    description:
      "We merge deep technical expertise with strategic insight and human-centered design — turning complexity into clarity and ambition into achievement. From concept to execution, our approach delivers measurable impact, driving growth and excellence at every touchpoint.",
    image: "/images/about/approach.jpg",
    alt: "Our approach - Blending strategy, innovation, and excellence",
    buttonLabel: "Read more",
  },
];

export const workflowSteps = [
  {
    alt: "Discovery phase - team analyzing data and user insights",
    category: "Discovery",
    title: "Understand & Define",
    description:
      "We begin by deeply understanding your business, customers, and goals — transforming insights into clear, actionable strategies that set the foundation for success.",
    buttonLabel: "Explore",
    step: "Step 01",
  },
  {
    alt: "Design - UI/UX designer crafting digital interfaces",
    category: "Design & Strategy",
    title: "Design the Experience",
    description:
      "Our design-led thinking connects creativity with purpose — crafting intuitive, user-centered experiences and architectures that drive engagement and growth.",
    buttonLabel: "Learn",
    step: "Step 02",
  },
  {
    alt: "Development - engineers coding innovative solutions",
    category: "Engineering",
    title: "Build & Integrate",
    description:
      "From robust ERP systems to AI-powered platforms, we develop scalable, secure, and future-ready solutions — engineered to adapt as your business evolves.",
    buttonLabel: "Discover",
    step: "Step 03",
  },
  {
    alt: "Quality assurance - team testing and optimizing solutions",
    category: "Quality Assurance",
    title: "Test & Optimize",
    description:
      "Before launch, we rigorously test performance, usability, and security — refining every detail to ensure your product is reliable, seamless, and market-ready.",
    buttonLabel: "Refine",
    step: "Step 04",
  },
  {
    alt: "Support - team providing continuous system optimization",
    category: "Partnership",
    title: "Launch & Evolve",
    description:
      "Our relationship doesn't end at launch. We provide continuous optimization, real-time analytics, and proactive support to ensure long-term impact and growth.",
    buttonLabel: "Read more",
    step: "Step 05",
  },
];

export const servicesOffered = [
  {
    category: "Software Development",
    title: "Custom Software & Web Development",
    description:
      "We design and build tailored software solutions — from web apps and mobile platforms to enterprise systems — that are scalable, secure, and built around your business goals. Our expertise spans UI/UX design, API integrations, and end-to-end development.",
    icon: Globe,
    buttonLabel: "Learn More",
    gradient: "from-[#9A4DFF] to-[#00C6FF]", // violet → bright blue
  },
  {
    category: "Infrastructure",
    title: "Cloud & IT Infrastructure Services",
    description:
      "Empower your operations with robust cloud and IT infrastructure. We provide cloud migration, hosting, server management, and cybersecurity to ensure reliability, scalability, and data protection.",
    icon: Cloud,
    buttonLabel: "Explore",
    gradient: "from-[#1B9AAA] to-[#009FFD]", // teal → light blue
  },
  {
    category: "Artificial Intelligence",
    title: "AI & Data Solutions",
    description:
      "Unlock the power of your data with AI-driven insights. From analytics dashboards to predictive modeling and automation tools, we help you turn data into smart business decisions.",
    icon: Brain,
    buttonLabel: "Discover",
    gradient: "from-[#9A4DFF] to-[#00F5D4]", // violet → mint
  },
  {
    category: "Consulting",
    title: "Digital Transformation & Consulting",
    description:
      "We guide organizations through modernization — implementing ERP/CRM systems, workflow automation, and tech strategies that streamline operations and drive long-term success.",
    icon: ChartLine,
    buttonLabel: "Learn",
    gradient: "from-[#00F5D4] to-[#4E65FF]", // mint → indigo-blue
  },
  {
    category: "Commerce",
    title: "E-commerce & FinTech Solutions",
    description:
      "Develop secure, seamless, and scalable e-commerce and fintech platforms. From online stores to digital wallets and POS systems, we enable frictionless transactions and financial trust.",
    icon: ShoppingCart,
    buttonLabel: "Explore",
    gradient: "from-[#FF6CAB] to-[#7366FF]", // pink → violet (a pop color!)
  },
  {
    category: "Mobile",
    title: "Mobile App Development",
    description:
      "Build intuitive, high-performance mobile apps for Android, iOS, and cross-platform ecosystems — engineered for scalability, speed, and user engagement.",
    icon: Smartphone,
    buttonLabel: "Discover",
    gradient: "from-[#00F5D4] to-[#1B9AAA]", // mint → teal
  },
  {
    category: "Security",
    title: "Cybersecurity & Data Protection",
    description:
      "Safeguard your digital ecosystem with proactive security — including threat detection, vulnerability assessments, data recovery, and compliance-driven protection strategies.",
    icon: Shield,
    buttonLabel: "Secure Now",
    gradient: "from-[#4E65FF] to-[#92EFFD]", // deep blue → light cyan
  },
  {
    category: "Support",
    title: "IT Support & Managed Services",
    description:
      "Keep your business running 24/7 with proactive system monitoring, expert troubleshooting, and fully managed IT services designed to maximize uptime and reliability.",
    icon: Headset,
    buttonLabel: "Get Support",
    gradient: "from-[#8E2DE2] to-[#4A00E0]", // royal purple gradient for a bold finish
  },
];

export const testimonials = [
  {
    name: "Grace Mwangi",
    title: "Founder, AfriMart Online",
    testimonial:
      "Partnering with this team transformed our e-commerce platform. Their innovative solutions improved our checkout experience and increased conversions by 40%.",
    rating: 5,
    project: "E-commerce Platform Upgrade",
    date: "2023-11-15",
  },
  {
    name: "Daniel Otieno",
    title: "CTO, Nairobi FinTech Hub",
    testimonial:
      "Their engineering team delivered a secure and scalable API that powers thousands of daily transactions. We finally have the stability we needed.",
    rating: 4,
    project: "FinTech API Development",
    date: "2024-01-20",
  },
  {
    name: "Aisha Abdalla",
    title: "Head of Operations, Mombasa Logistics",
    testimonial:
      "The custom dashboard they built gives us real-time visibility across our supply chain. What used to take hours, now takes minutes.",
    rating: 5,
    project: "Logistics Dashboard",
    date: "2024-03-05",
  },
  {
    name: "Kevin Njoroge",
    title: "CEO, HealthConnect Africa",
    testimonial:
      "With their support, we launched a telemedicine app that connects doctors and patients across Kenya. The response from users has been phenomenal.",
    rating: 5,
    project: "Telemedicine App",
    date: "2024-05-10",
  },
  {
    name: "Mercy Wanjiru",
    title: "Product Manager, EdTech Kenya",
    testimonial:
      "Their design and UX expertise made our learning platform more engaging for students. We've seen a 2x increase in daily active users.",
    rating: 4,
    project: "EdTech Learning Platform",
    date: "2024-07-18",
  },
];

export const teamMembers = [
  // 🧭 Management
  {
    name: "Samuel Ngige Mungai",
    title: "Founder & Chief Executive Officer",
    department: "Management",
    image: "/images/team/samuel.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/samuelnmu",
    },
    description:
      "Samuel is a Software Engineer and entrepreneur with a background in Economics. As founder and CEO of QUANTEDGE LIMITED, he leads the company’s mission to drive digital transformation across Africa. His passion lies in merging technology and strategy to create scalable, impactful business solutions.",
  },

  // 📋 Project Management
  {
    name: "Linda Njeri",
    title: "Product & Project Manager",
    department: "Management",
    image: "/images/team/linda.jpg",
    social: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
    description:
      "Linda bridges business goals and technical execution, ensuring projects are delivered efficiently and align with client objectives. She focuses on agile process improvement and team synergy.",
  },

  // 💼 Sales & Partnerships
  {
    name: "Caroline Mwangi",
    title: "Head of Sales & Partnerships",
    department: "Sales",
    image: "/images/team/caroline.jpg",
    social: {
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
    description:
      "Caroline drives client acquisition and strategic partnerships, focusing on expanding the company’s reach across Africa’s growing digital economy. She combines data-driven sales strategies with strong relationship building.",
  },

  // 💻 Frontend Development
  {
    name: "Peter Karanja",
    title: "Lead Frontend Engineer",
    department: "Development",
    image: "/images/team/peter.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/peterkaranja",
    },
    description:
      "Peter specializes in building responsive, high-performance web applications with a focus on user experience and design systems. He mentors junior developers and contributes to open-source projects.",
  },

  // ⚙️ Backend Development
  {
    name: "Wilfred Kimani",
    title: "Lead Backend Engineer",
    department: "Development",
    image: "/images/team/austine.jpg",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/austineoganga",
    },
    description:
      "Austine architects and optimizes backend systems that power scalable and secure enterprise platforms. His expertise spans microservices, APIs, and cloud-native infrastructure.",
  },

  // 🎨 Design & User Experience
  // {
  //   name: "Grace Achieng",
  //   title: "Lead UI/UX Designer",
  //   department: "Design",
  //   image: "/images/team/grace.jpg",
  //   social: {
  //     linkedin: "https://linkedin.com/in/grace-achieng",
  //     dribbble: "https://dribbble.com/graceachieng",
  //     behance: "https://behance.net/graceachieng",
  //   },
  //   description:
  //     "Grace leads the design team, crafting intuitive user experiences and visually compelling interfaces that align design aesthetics with business goals and technical requirements.",
  // },

  // ⚖️ Legal
  {
    name: "David Otieno",
    title: "Legal & Compliance Officer",
    department: "Legal",
    image: "/images/team/david.jpg",
    social: {
      linkedin: "https://linkedin.com/in/",
    },
    description:
      "David oversees all legal and compliance matters, ensuring QUANTEDGE LIMITED adheres to regulatory standards and intellectual property laws across regions of operation.",
  },
];

export const services = [
  "AI & Machine Learning",
  "Cloud Solutions",
  "Mobile Development",
  "Web Development",
  "Cybersecurity",
  "Data Analytics",
  "Custom Software",
  "Consulting",
];

export const footerLinks = {
  services: [
    {
      name: "AI & Machine Learning",
      href: "https://en.wikipedia.org/wiki/Machine_learning",
    },
    {
      name: "Cloud Solutions",
      href: "https://en.wikipedia.org/wiki/Cloud_computing",
    },
    {
      name: "Mobile Development",
      href: "https://en.wikipedia.org/wiki/Mobile_app_development",
    },
    {
      name: "Web Development",
      href: "https://en.wikipedia.org/wiki/Web_development",
    },
    {
      name: "Cybersecurity",
      href: "https://en.wikipedia.org/wiki/Computer_security",
    },
    {
      name: "Data Analytics",
      href: "https://en.wikipedia.org/wiki/Data_analysis",
    },
  ],

  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News & Blog", href: "#" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Support Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Twitter", icon: FaXTwitter, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "Instagram", icon: FaSquareInstagram, href: "#" },
  { name: "GitHub", icon: FaGithub, href: "#" },
];
