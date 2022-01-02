// $(document).ready(function () {
//   console.log("hazır");
// })

// $(function () {
//   console.log("hazır");
// });

const button = $("button");
const input = $("input");
const data = $("#data");
const box = $(".box");

$(() => {
  button.click(() => {
    // input.toggle("fast", () => {
    //   alert("kaan");
    // });
    input.fadeToggle("fast", () => {});
    // input.hide();
    // input.show();

    box.animate({
      left: "300px",
    },3000);
  });

  input.change((e) => {
    data.text(e.target.value);
  });
});

// console.log($())
