
const fs = require('fs');
const path = 'public/phone-chat/index-CNVUWmqv.js';
const content = fs.readFileSync(path, 'utf8');

const start = content.indexOf('Clinic Dental') - 500;
const end = start + 3000;
console.log(content.substring(start, end));
