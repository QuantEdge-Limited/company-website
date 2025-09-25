import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";


export const processCards = [
  {
    image: "/methodology-image.jpg",
    alt: "Methodology - Person working at desk with strategic planning",
    category: "Methodology",
    title: "Discover",
    description:
      "Understanding your needs through comprehensive consultation and detailed requirement analysis",
    buttonLabel: "Explore",
  },
  {
    image: "/design-image.jpg",
    alt: "Design - Person working on laptop with creative solutions",
    category: "Design",
    title: "Crafting tailored solutions",
    description:
      "Developing innovative strategies aligned with your business goals and user experience requirements",
    buttonLabel: "Learn",
  },
  {
    image: "/implementation-image.jpg",
    alt: "Implementation - Person with tablet managing digital solutions",
    category: "Implementation",
    title: "Executing and supporting your digital transformation",
    description:
      "Seamlessly implementing and providing ongoing support for your technological solutions with 24/7 monitoring",
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
    name: "Achieng Otieno",
    title: "Founder & CEO",
    social: {
      twitter: "https://twitter.com/achiengotieno",
      linkedin: "https://linkedin.com/in/achiengotieno",
      github: "https://github.com/achiengotieno",
    },
    image: "/images/team/achieng.jpg",
    description:
      "Achieng is the visionary leader driving the company’s mission to build impactful digital solutions for Africa.",
  },
  {
    name: "Brian Mwangi",
    title: "Lead Software Engineer",
    social: {
      twitter: "https://twitter.com/brianmwangi",
      linkedin: "https://linkedin.com/in/brianmwangi",
      github: "https://github.com/brianmwangi",
    },
    image: "/images/team/brian.jpg",
    description:
      "Brian is passionate about building scalable web applications and mentoring young developers in the tech community.",
  },
  {
    name: "Faith Wambui",
    title: "UI/UX Designer",
    social: {
      twitter: "https://twitter.com/faithwambui",
      linkedin: "https://linkedin.com/in/faithwambui",
      dribbble: "https://dribbble.com/faithwambui",
    },
    image: "/images/team/faith.jpg",
    description:
      "Faith designs user-friendly interfaces and focuses on creating inclusive digital experiences for diverse audiences.",
  },
  {
    name: "Daniel Kiptoo",
    title: "Marketing & Partnerships Manager",
    social: {
      twitter: "https://twitter.com/danielkiptoo",
      linkedin: "https://linkedin.com/in/danielkiptoo",
      instagram: "https://instagram.com/danielkiptoo",
    },
    image: "/images/team/daniel.jpg",
    description:
      "Daniel builds strategic partnerships and drives brand growth with innovative marketing campaigns across East Africa.",
  },
  {
    name: "Mercy Njeri",
    title: "Product Manager",
    social: {
      twitter: "https://twitter.com/mercynjeri",
      linkedin: "https://linkedin.com/in/mercynjeri",
      github: "https://github.com/mercynjeri",
    },
    image: "/images/team/mercy.jpg",
    description:
      "Mercy ensures the team delivers high-impact products by aligning customer needs with business goals.",
  },
  {
    name: "Kevin Ouma",
    title: "DevOps Engineer",
    social: {
      twitter: "https://twitter.com/kevinouma",
      linkedin: "https://linkedin.com/in/kevinouma",
      github: "https://github.com/kevinouma",
    },
    image: "/images/team/kevin.jpg",
    description:
      "Kevin manages cloud infrastructure and automation pipelines, ensuring reliability and scalability for all deployments.",
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
