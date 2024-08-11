// stack and heap memmory in javascript

// stack (primitive)       heap (non primitive)

let myname = "kishoreisgreat"
let anothername = myname
anothername = "balaveerakihore"
console.log(myname);
console.log(anothername);

let userone = {
    email: "user.email",
    upi: "user.upi",
}

let usertwo = userone
usertwo.email = "kishore@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

