// strings

const name = "kishore"
const rollno = 30

// console.log(name + rollno + " compA");  (not using in this generations)

console.log(`Hello my name is ${name} and my rollno is ${rollno}`);

console.log(`${name} ${rollno}`);
console.log(name[0]);

const kishore = new String('kishoreisgreat');

console.log(kishore[2]);

console.log(kishore.__proto__);


console.log(kishore.length);
console.log(kishore.toUpperCase()); //not changing original string 

console.log(kishore.charAt(2));
console.log(kishore.indexOf('g'));

const newstring = kishore.substring(0,4)
console.log(newstring);

const url = "https://kishore.com/kishore%20isgreat"
console.log(url.replace('%20','-'));

console.log(url.includes('kishore'))
console.log(url.includes('kaushal'))


