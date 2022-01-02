// $(document).ready(function () {
//   console.log("hazır");
// })

// $(function () {
//   console.log("hazır");
// });

const button = $(".btn-success");
const button2 = $(".btn-primary");
const input = $("input");
const data = $("#data");
const box = $(".box");
const div = $(".container");

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

  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      button2.show();
    } else {
      button2.hide();
    }
  });

  button2.click(() => {
    $("html,body").animate({
      scrollTop: 0
    });
    // return false; //buton tipi submit olsaydı
  });
});

// console.log($())
