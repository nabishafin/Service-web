export const siteConfig = {
  phone: "01758056337",
  email: "contact@serviceflow.com",
  whatsapp: "01758056337",
  emergencyPhone: "01616539735",
  address: "Shashongachha, Cumilla, Bangladesh",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7319.384541807484!2d91.16472239999999!3d23.47156215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547ed2908a9de3%3A0x508e1ef8f4283879!2sShashongachha%2C%20Cumilla!5e0!3m2!1sen!2sbd!4v1776981976488!5m2!1sen!2sbd",
  hours: "Mon - Sat: 8am - 6pm",
  emergency: "24/7 Emergency Support",
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#"
  }
};

export const contactItems = [
  { label: `Emergency: ${siteConfig.emergencyPhone}`, href: `tel:${siteConfig.emergencyPhone.replace(/\s+/g, '')}`, type: "phone" },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, type: "mail" },
  { label: siteConfig.emergency, href: "/contact", type: "clock" },
];

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

export const recognitionBadges = [
  "Best Choice",
  "Users Love Us",
  "Labor Day Sale",
  "Premium Quality",
];
