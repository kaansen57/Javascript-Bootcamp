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

function putUsers(user) {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
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

function deleteUser(user) {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
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
  let data2 = {
    userId: 2,
    id: 2,
    title: "akaan",
    body: "alorem ipsum",
  };
  



postUsers(data);
putUsers(data2);
deleteUser(data2);