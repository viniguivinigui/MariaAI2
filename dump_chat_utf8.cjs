
const fs = require('fs');
const path = 'public/phone-chat/index-CNVUWmqv.js';
const content = fs.readFileSync(path, 'utf8');

const index = content.indexOf('Clinic Dental');
const start = index - 500;
const end = index + 5000;
fs.writeFileSync('chat_source.txt', content.substring(start, end), 'utf8');
