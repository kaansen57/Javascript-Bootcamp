var myObj = {
  url: "https://randomuser.me/api/?results=5",
  // headers: {'content-type':'application/json'}
};

const row = document.querySelector(".row");

let request = (obj) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);

    if (xhr.headers) {
      Object.keys[obj.headers].forEach((key) => {
        console.log(key);
      });
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
      else reject(xhr.statusText);
    };

    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  })
  
   
};

let buildHtml = (data) => {
  let users = JSON.parse(data);
  users.results.forEach((user) => {
    row.innerHTML += `
                <img src="${user.picture.medium}"  style="width:100px" />
                <h4> ${user.name.first} ${user.name.last} </h4>
                <h5> Age  : ${user.dob.age}  </h5>
            `;
  });
    
    return Promise.resolve("html is loading");
};

request(myObj)
  .then(buildHtml)
    .then((message) => {
      console.log(message);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });