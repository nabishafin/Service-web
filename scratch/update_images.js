const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'services-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const mapping = {
  "house-cleaning": "/images/house -cleaning.webp",
  "hospital-cleaning": "/images/hospital-cleaning.jpg",
  "office-cleaning": "/images/office-cleaning.jpg",
  "building-cleaning": "/images/building-cleaning.jpg",
  "window-cleaning": "/images/Window-Cleaning.webp",
  "carpet-cleaning": "/images/carpet-cleaning.jpg",
  "deep-cleaning": "/images/Deep-Cleaning.jpg",
  "housekeeping": "/images/house -cleaning.webp", // Fallback to house cleaning since it's missing
  "banquet": "/images/banqeat-cleaning.jpg",
  "outside-catering": "/images/outside-catering.jpg",
  "waiter-waitress": "/images/waiter-service.jpeg",
  "hospitality-cleaner": "/images/hospitality -cleaner.jpg",
  "general-chef-services": "/images/General Chef Services.jpg",
  "office-tea-boy": "/images/Office Tea Boy.jpg",
  "assistant-bartender": "/images/Assistant Bartender.webp",
  "steward": "/images/Steward.jpg"
};

for (const [id, newSrc] of Object.entries(mapping)) {
  const idRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?image:\\s*\\{[\\s\\S]*?src:\\s*"(.*?)"`);
  const match = content.match(idRegex);
  if (match) {
    const oldSrc = match[1];
    content = content.replace(oldSrc, newSrc);
  }
}

fs.writeFileSync(filePath, content);
console.log('Updated images successfully');
