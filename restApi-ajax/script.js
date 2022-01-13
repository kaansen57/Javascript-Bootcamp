var xhr = new XMLHttpRequest();

console.log(xhr);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log("başarılı");
      console.log(xhr.responseText);
    } else if (xhr.status === 0) {
      console.log("istek atılmadı");
    } else if (xhr.status === 404) {
      console.log("hatalı istek");
    }
  }
};
xhr.onprogress = function () {
  console.log("yükleniyor lütfen bekleyiniz");
};
xhr.open("GET", "msg.txt", true);
xhr.send();
