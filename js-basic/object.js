// object literals


let val;

let person = {
    firstName: 'Çınar',
    lastName: 'Şen',
    hobbies: ["music", "game", "computer"],
    adress: {
        city: "sinop",
        country: "turkey"
    },
    getBirthYearfunction : () => {
     console.log(this);
    }
};

// val = person.adress.city;
val = person.adress["city"];

console.log(val);


let people = [
    {firstName:"asd",lastName:"asdasd"},
    {firstName:"asd",lastName:"asdasd"}
]

console.log(people[0].firstName);


person.getBirthYearfunction();