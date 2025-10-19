const menuButton = document.querySelector(".mybutton");
function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector("nav");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);




const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  const Img = event.target.closest('img');
  const src = Img.getAttribute('src'); 
  const dialog = document.createElement("dialog");
  dialog.classList.add("image-modal");
  dialog.innerHTML = `<img src="${src.split('-')[0] + '-full.jpeg'}"><button class="close-viewer">X</button>`;
  document.body.appendChild(dialog);
  dialog.showModal();
  console.log("Click Clack");
  dialog.querySelector(".close-viewer").addEventListener("click", () => {
    dialog.close();
  });
});

