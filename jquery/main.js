const div = $(".alert");

div.css("border", "1px solid green");

var cssObj = {
  border: "1px solid green",
  color: "red",
  width: "200px",
  height: "50px",
  marginTop: "100px",
};

var cssObj2 = {
  border: "1px solid green",
  color: "red",
  width: "200px",
  height: "50px",
  listStyleType: "none",
  textAlign: "center",
  marginTop: "10px",
};

var cssObj3 = `
  border: 1px solid green;
  color: red;
  width: 200px;
  height: 50px;
  list-style-type: none;
  text-align: center;
  margin-top: 10px;
`;
const danger = $(".alert-danger").css(cssObj);

const jqLi = $(".jq li").css(cssObj2);

const jsLi = document.querySelectorAll(".js li");
jsLi.forEach(x => {
    x.style = cssObj3;
})

const h1 = $("h1");

console.log(h1.text());

h1.text("deneme");
console.log(h1.text());


const input = $("input");
console.log(input.val());
input.val("kaan şen");

console.log(input.attr('type'));
input.attr("type","button");
console.log(input.attr('type'));

const alertEmpty = $(".alert-empty");

function highlight() {
    alertEmpty.addClass("alert-danger");    
    alertEmpty.removeClass("alert-empty");    
}
function toggleClass() {
    alertEmpty.toggleClass("alert-danger");
}



// div[0].style.marginTop = '100px';

// div.each((x,i) => {
//     i.style.marginTop = "100px"
// });
