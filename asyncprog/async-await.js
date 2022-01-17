 function message(data) {
  return data + " adet veri geldi";
}

async function getUsers() {
  const user = await fetch("https://randomuser.me/api/?results=5");
  const data = await user.json();
  const messages = await data.results.length;
  setTimeout(message, 2000, messages);

   data.results.map(element => {
      console.log(element);
    });
  
  return data.results;
}

// console.log(message()); //async function promise return ediyor
const users = getUsers();
