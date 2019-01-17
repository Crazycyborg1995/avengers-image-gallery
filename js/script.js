const mainImage = document.querySelector(".main-img");
const images = document.querySelectorAll(".img-container img");
let opacity = 0.4;
images.forEach((img) => {
  img.addEventListener("click",loadImages)
})

function loadImages(e){
  for(let item of images){
    item.style.opacity = 1;
  }
  mainImage.firstElementChild.src = e.target.src;
  mainImage.classList.add("fade-in");
  setTimeout(() => mainImage.classList.remove("fade-in"),300);
  this.style.opacity = opacity;
}
