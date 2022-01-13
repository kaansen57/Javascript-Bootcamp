var xhr = new XMLHttpRequest();
const spinner = document.querySelector("#spinnerr");
const getEmployees = document.querySelector("#getEmployees");
const getEmployee = document.querySelector("#getEmployee");
const table = document.querySelector("#employeeTable");
const inputValue = document.querySelector("#firstname");

function tableReset() {
  table.replaceChildren();
}
getEmployees.addEventListener("click", function () {
  spinner.className = "spinner-border text-success";
  xhr.open("GET", "employees.json", true);
  xhr.send();

  xhr.onload = function () {
    if (this.status === 200) {
      tableReset();
      spinner.className = "visually-hidden";

      let data = JSON.parse(this.response);
        data.employees.forEach((element) => {
          table.innerHTML += `<tr> 
        <td> ${element.firstName}</td> 
        <td> ${element.lastName}</td> 
        <td> ${element.age}</td>
            </tr>`;
        });
          
      } else if(this.status === 404) {
        console.log("sunucu hatası");
      }
    } 
});

getEmployee.addEventListener("click", function () {
  spinner.className = "spinner-border text-success";
  xhr.open("GET", "employees.json", true);
  xhr.send();

  xhr.onload = () => {
    if (this.status === 200) {
      tableReset();
      spinner.className = "visually-hidden";
      let data = JSON.parse(this.response);
      let getEmployee = data.employees.filter((x) => {
        return x.firstName === inputValue.value;
      });

      getEmployee.forEach((x) => {
        table.innerHTML += `<tr> 
        <td> ${x.firstName}</td> 
        <td> ${x.lastName}</td> 
        <td> ${x.age}</td>
         </tr>`;
      });
    } else {
      console.log("sunucu hatası");
    }
  };
});

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log("başarılı");
//       console.log(JSON.parse(xhr.response));
//     } else if (xhr.status === 404) {
//       console.log("hatalı istek");
//     }
//   }
// }
