const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (event) => {
  let value = event.target.value;
  if (value.length > 0) {
    profile
      .getProfile(value)
      .then((res) => {
        ui.profileLoad(res.profile[0]);
        ui.todosLoad(res.todos);
      })
      .catch((err) => {
        ui.alertShow(value);
      });
  } else {
     ui.alertShow();
  }
});
