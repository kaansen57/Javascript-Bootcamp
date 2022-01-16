function getUsers() {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.results);
    })
    .catch((err) => {
      console.log(err);
    });
}

getUsers();

function postUsers(user) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
}

  let data = {
    userId: 1,
    id: 1,
    title: "kaan",
    body: "lorem ipsum",
  };
postUsers(data);