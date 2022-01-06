

// var user = {
//     name: "kaan"
// };



// try {
//   if (!user.email) {
//     throw new Error("Email is empty");
//   }
// } catch (e) {
//   console.log(e);
//   console.log(e.message);//Email is empty
//   console.log(e.name);//Error
//   console.log(e instanceof ReferenceError);//false
//   console.log(e instanceof Error);//true
// } finally {
//     console.log("finally block");
// }


const btn = document.getElementById("btn");
const name = document.getElementById("name");
const age = document.getElementById("age");
const error = document.getElementById("error");
error.innerHTML = ''
btn.addEventListener('click', function (e) {
    try {
        if (name.value.length === 0) {
          throw new Error("name is required!");
        }
         if (age.value.length === 0) {
           throw new Error("age is required");
         }
        if (age.value < 0 || age.value > 100) {
          throw new Error("age should be 0-100 range");
        }
        if (isNaN(age.value)) {
            throw new Error("age is not numeric");
        }
        console.log("Form submitted!");
    } catch (e) {
        error.innerHTML = e.message;
    }
    finally {
        name.value = '';
        age.value = '';
    }
});

