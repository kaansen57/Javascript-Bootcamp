class UI {
  constructor() {
    this.profileContainer = document.querySelector(".profile");
    this.alert = document.querySelector("#alert");
  }

  profileLoad(profileData) {
    this.alert.innerHTML = "";
    this.profileContainer.innerHTML = `
             <div class="row d-flex justify-content-center">
                <img style="width:250px;border-radius:250px;" src="https://via.placeholder.com/250">
                    <div class="card card-body bg-danger text-white d-flex flex-column align-items-center mt-3 mb-3">
                        <h3>${profileData.name}</h3>
                        <h5>${profileData.email}</h5>
                        <h6>${profileData.phone}</h6>
                        <h6>Web Site : ${profileData.website}</h6>
                        <h6>Company Name : ${profileData.company.name}</h6>
                      
                    </div>
             </div>
            `;
  }

  alertShow(inputValue = null) {
    this.profileContainer.innerHTML = "";
    if (inputValue) {
       this.alert.innerHTML = `${inputValue} is not found!`;
    }
    else this.alert.innerHTML = 'Input is empty!'
  }

  todosLoad(todosData) {
    let ul = '<ul class="mt-3 list-group">';
    todosData.map((todo) => {
      let bgColor = todo.completed ? "limegreen" : "khaki";
      ul += ` <li class="list-group-item" style="background-color:${bgColor}"> <b>${todo.id} -)</b>
         <b> Task Title :</b> ${todo.title} -
         <b> Status :</b> ${todo.completed}</li>`;
    });
    ul += "</ul>";
    this.profileContainer.innerHTML += ul;
  }
}
