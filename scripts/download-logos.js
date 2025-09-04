const fs = require('fs');
const path = require('path');
const https = require('https');

// Create logos directory if it doesn't exist
const logosDir = path.join(__dirname, '../public/logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Logo URLs
const logos = [
  {
    name: 'imperial-college',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/imperial-college.png',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Imperial_College_London_logo.svg/1280px-Imperial_College_London_logo.svg.png'
  },
  {
    name: 'norton',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/norton.png',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Norton_by_Symantec_logo.svg/2560px-Norton_by_Symantec_logo.svg.png'
  },
  {
    name: 'else',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/else.png',
    fallbackUrl: 'https://else.io/wp-content/uploads/2021/05/else-logo-dark.svg'
  },
  {
    name: 'imperial-enterprise-lab',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/imperial-enterprise-lab.png',
    fallbackUrl: 'https://www.imperialenterpriselab.com/wp-content/uploads/2022/03/Enterprise-Lab-Logo-Yellow-Background.png'
  },
  {
    name: 'amazon',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/amazon.png',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
  },
  {
    name: 'scotch',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/scotch.png',
    fallbackUrl: 'https://thescotchofstandrews.com/wp-content/uploads/2020/01/Scotch-Logo-Black-Circle-1.png'
  },
  {
    name: 'imperial',
    url: 'https://raw.githubusercontent.com/arturocano/portfolio/main/public/logos/imperial.png',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Imperial_College_London_crest.svg/1200px-Imperial_College_London_crest.svg.png'
  }
];

// Download function
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url} (Status: ${response.statusCode})`);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
};

// Download all logos
async function downloadLogos() {
  for (const logo of logos) {
    const filepath = path.join(logosDir, `${logo.name}.png`);
    
    try {
      await downloadImage(logo.url, filepath);
    } catch (error) {
      console.log(`Trying fallback URL for ${logo.name}...`);
      try {
        await downloadImage(logo.fallbackUrl, filepath);
      } catch (fallbackError) {
        console.error(`Failed to download ${logo.name} from both URLs.`);
      }
    }
  }
}

downloadLogos().catch(console.error);
