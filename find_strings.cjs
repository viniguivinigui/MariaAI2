
const fs = require('fs');
const path = 'public/phone-chat/index-CNVUWmqv.js';
const content = fs.readFileSync(path, 'utf8');

const stringsToFind = [
    "Clinic Dental",
    "Olá",
    "seja bem vindo",
    "Realizamos todos os procedimentos"
];

stringsToFind.forEach(s => {
    const index = content.indexOf(s);
    if (index !== -1) {
        console.log(`Found "${s}" at index ${index}`);
        console.log(`Snippet: ${content.substring(index - 50, index + 100)}`);
    } else {
        console.log(`"${s}" not found`);
    }
});
