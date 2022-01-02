// $(document).ready(function () {
//   console.log("hazır");
// })

// $(function () {
//   console.log("hazır");
// });

const button = $('button');
const input = $('input');
const data = $('#data');
$(() => {

    button.click(() => {
      input.toggle("fast", () => {
        alert("kaan");
      });
       input.fadeToggle("fast", () => {
         alert("kaan");
       });
      // input.hide();
      // input.show();
    })

  input.change((e) => {
    //  data.text(e.target.value)

    data.text(e.target.value)
  })
    
 

});

// console.log($())