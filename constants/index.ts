import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export const processCards = [
  {
    image: "/images/services/methodology-image.jpg",
    alt: "Methodology - Person working at desk with strategic planning",
    category: "Methodology",
    title: "Discover",
    description:
      "We dive deep to understand your unique needs through comprehensive consultation and detailed analysis.",
    buttonLabel: "Explore",
  },
  {
    image: "/images/services/design.png",
    alt: "Design - Person working on laptop with creative solutions",
    category: "Design",
    title: "Craft Solutions",
    description:
      "Creating innovative strategies perfectly aligned with your business goals and user experience vision.",
    buttonLabel: "Learn",
  },
  {
    image: "/images/services/Implementation.png",
    alt: "Implementation - Person with tablet managing digital solutions",
    category: "Implementation",
    title: "Execute & Support",
    description:
      "Seamless implementation with ongoing support and 24/7 monitoring to ensure your success.",
    buttonLabel: "Discover",
  },
];

export const testimonials = [
  {
    name: "Grace Mwangi",
    title: "Founder, AfriMart Online",
    testimonial:
      "Partnering with this team transformed our e-commerce platform. Their innovative solutions improved our checkout experience and increased conversions by 40%.",
    image: "/images/testimonials/grace-mwangi.jpg",
    rating: 5,
    project: "E-commerce Platform Upgrade",
    date: "2023-11-15",
  },
  {
    name: "Daniel Otieno",
    title: "CTO, Nairobi FinTech Hub",
    testimonial:
      "Their engineering team delivered a secure and scalable API that powers thousands of daily transactions. We finally have the stability we needed.",
    image: "/images/testimonials/daniel-otieno.jpg",
    rating: 4,
    project: "FinTech API Development",
    date: "2024-01-20",
  },
  {
    name: "Aisha Abdalla",
    title: "Head of Operations, Mombasa Logistics",
    testimonial:
      "The custom dashboard they built gives us real-time visibility across our supply chain. What used to take hours, now takes minutes.",
    image: "/images/testimonials/aisha-abdalla.jpg",
    rating: 5,
    project: "Logistics Dashboard",
    date: "2024-03-05",
  },
  {
    name: "Kevin Njoroge",
    title: "CEO, HealthConnect Africa",
    testimonial:
      "With their support, we launched a telemedicine app that connects doctors and patients across Kenya. The response from users has been phenomenal.",
    image: "/images/testimonials/kevin-njoroge.jpg",
    rating: 5,
    project: "Telemedicine App",
    date: "2024-05-10",
  },
  {
    name: "Mercy Wanjiru",
    title: "Product Manager, EdTech Kenya",
    testimonial:
      "Their design and UX expertise made our learning platform more engaging for students. We've seen a 2x increase in daily active users.",
    image: "/images/testimonials/mercy-wanjiru.jpg",
    rating: 4,
    project: "EdTech Learning Platform",
    date: "2024-07-18",
  },
];

export const teamMembers = [
  {
    name: "Samuel Mungai",
    title: "Founder & CEO",
    social: {
      twitter: "https://twitter.com/fintechsam_254",
      linkedin: "https://linkedin.com/in/samuel",
      github: "https://github.com/samuelnmu",
    },
    image: "/images/team/",
    description:
      "A Software Engineer by profession with a background in Economics, Samuel combines technical expertise with business acumen to build impactful solutions.He is also the founder of EliteMotion Limited, a distribution company, and has played key leadership roles in other ventures spanning technology, trade, and infrastructure.",
  },
  {
    name: "Peter Karanja",
    title: "Lead  Frontend Eng",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/samuelnmu",
    },
    image: "/images/team/",
    description:
      "Peter is passionate about building scalable web applications and mentoring young developers in the tech community.",
  },
  {
    name: "Austine Oganga ",
    title: "Lead Backend Eng",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      dribbble: "https://dribbble.com/",
    },
    image: "/images/team/",
    description:
      "Austine is a passionate Backend Eng, with the passion to build scallable systems ",
  },
  {
    name: "CMO",
    title: "Marketing & Partnerships Manager",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
    image: "/images/team/",
    description:
      " builds strategic partnerships and drives brand growth with innovative marketing campaigns across East Africa.",
  },
  {
    name: "PM",
    title: "Product Manager",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
    image: "/images/team/",
    description:
      "ensures the team delivers high-impact products by aligning customer needs with business goals.",
  },
  {
    name: "DevOps",
    title: "DevOps Engineer",
    social: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
    image: "/images/team/",
    description:
      "DevOps manages cloud infrastructure and automation pipelines, ensuring reliability and scalability for all deployments.",
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
    { name: "AI & Machine Learning", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Cybersecurity", href: "#" },
    { name: "Data Analytics", href: "#" },
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
