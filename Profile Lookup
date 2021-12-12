// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let noName = 0;
  let noProp = 0;
  // Only change code below this line
      for (let i = 0; i < contacts.length; i++) {
         if (contacts[i].firstName==name && contacts[i].hasOwnProperty(prop)) {
       //   console.log(contacts[i][prop]);
           return contacts[i][prop];
          }
          else if (contacts[i].firstName!==name) {
              noName++;
          }
          else if (contacts[i].firstName==name && !contacts[i].hasOwnProperty(prop)) {
          //      console.log("No such property");
                noProp++;
                return "No such property";
                
          } 
         
    }
     
    if (noName=4) {
       //  console.log("No such contact");
           return "No such contact";
    }
    
     
    
  // Only change code above this line
}

lookUpProfile("Akira", "address");    
