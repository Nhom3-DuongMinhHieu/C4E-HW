let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};

// Option 1: 
console.log("Option 1: ObjectName.Property")

console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

// Option 2: 
console.log("\nOption 2: ObjectName[\"Property\"]")

console.log(person["name"]);
console.log(person["occupation"]);
console.log(person["hobbies"]);
