
const fs = require('fs');
const path = 'public/phone-chat/index-CNVUWmqv.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace "Clinic Dental" with "Maria"
content = content.replace(/Clinic Dental/g, 'Maria');

// 2. Locate the cr array and prune it
// We know it starts with cr=[{id:1,text:"Oi tudo bem?" ...
// and we want it to start with ID 11.
const searchStr = 'cr=[{id:1,text:"Oi tudo bem?",sent:!0,time:"21:00",read:!0}';
const targetStart = 'cr=[{id:11,text:"Meu filho';

// Let's find the position of ID 11
const id11Index = content.indexOf('{id:11,text:"Meu filho');
if (id11Index !== -1) {
    const crIndex = content.indexOf('cr=[');
    if (crIndex !== -1) {
        // We replace from cr=[ up to id11 with cr=[
        content = content.substring(0, crIndex + 4) + content.substring(id11Index);
        console.log('Successfully pruned the cr array.');
    }
} else {
    console.log('Could not find ID 11 in the chat array.');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Modifications applied to phone-chat JS.');
