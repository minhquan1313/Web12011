const imgs = document.getElementsByClassName("item__img");
for (var i of imgs) {
  // console.log(i.complete);
  const parent = i.parentElement.parentElement;
  const name = parent.parentElement.querySelector(".item__name");
  name.style.opacity = "0";
  if (!i.complete) {
    const loader = createLoader();
    parent.prepend(loader);
    i.onload = () => {
      name.style.opacity = "";
      loader.setAttribute("style", "transition:.3s;opacity:0;");
      setTimeout(() => {
        loader.remove();
      }, 300);
    };
  } else {
    name.style.opacity = "";
  }
  //   console.log("");
}
function createLoader() {
  const l = document.createElement("div");
  l.classList.add("loader");
  l.innerHTML = `<div></div>`;
  return l;
}
