import { writeFile } from 'fs';
let name = process.argv[2];

console.log(`good day ${name}, are you well?`);
I like to eat pie
writeFile('data.json', name, (err) => console.error('err ->', err));
console.log(`good day ${name}, are you well? yes i'm well`);

