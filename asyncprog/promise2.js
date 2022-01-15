var promis = new Promise((resolve, reject) => {
  if (true) resolve(5);
  else reject("hata");
})
  .then((data) => {
    return data * data;
  })
  .then((data) => {
    return data * 2;
  })
  .then((data) => {
    return data * 3;
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(promis.then((data) => console.log(data)));

const isHappy = true;

const happyCheck = new Promise((resolve, reject) => {
  const data = {
    giftName: 'Telephone',
    brand: 'Iphone',
    model: 'X',
    price: '10000'
  };

  if (isHappy) resolve(data);
  else reject(new Error("Hata"));
});

const showTheFriends = function (phone) {
  const message = "hi friends this is my phone " + phone.brand;
  return Promise.resolve(message);
};
  

const happy = function () {
  happyCheck
    .then(data => {
      showTheFriends(data)
        .then(message => {
        console.log(message);
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
      console.log(err);
    });
};

happy();