const arr = [
  "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
  "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
];

function randomImg() {
  let img = document.createElement("img");

  let randomNum = Math.floor(Math.random() * arr.length);

  img.setAttribute("src", arr[randomNum]);
  document.querySelector(".container").textContent = ''; 
  document.querySelector(".container").append(img);
}
window.onload = randomImg();
  