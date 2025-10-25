function update(previewPic) {
  console.log("Sự kiện được kích hoạt!");
  console.log("Alt: " + previewPic.alt);
  console.log("Src: " + previewPic.src);
  document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";
  document.querySelector('#image').innerHTML = previewPic.alt;
}

function unDo() {
  let div = document.querySelector('#image');
  div.style.backgroundImage = "url('')";
  div.innerHTML = "Di chuột qua một hình ảnh bên trên để hiển thị ở đây.";
}