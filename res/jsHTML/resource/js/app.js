function card_rotate_on_mousemove() {
  const my = 20;
  const perspective = 600;
  const mx = my * 2;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const cards = document.querySelectorAll(".practiceItem");
  //   _no_transition();
  //   console.log(cards);
  // setInterval(() => {
  //   console.log(window.scrollY);
  // }, 500);

  const trackBtn = createBtn(".header__title");
  trackBtn.onclick = (e) => {
    window.addEventListener("mousemove", moving);
    trackBtn.remove();
  };
  //   const card = cards[4];
  //   console.log(card.offsetLeft);
  //   cards.forEach((card, i) => {
  // const center = card.offsetLeft + card.offsetWidth / 2;
  // console.log(card);
  // console.log(i);
  // console.log(center, centerX);
  // console.log(center - centerX);
  // console.log(card.offsetLeft);
  // console.log("");
  //   });

  function moving(e) {
    // const x = centerX - e.clientX;
    // const y = centerY - e.clientY;

    cards.forEach((card) => {
      //   const cardX = card.offsetLeft + card.offsetWidth / 2 - centerX;
      //   const cardY = card.offsetTop + card.offsetHeight / 2 - centerY;
      //rotateY(${-(cardX + x) / 30}deg)
      //   card.style.transform = `rotateX(${(cardY + y) / 10}deg) `;
      const xx = card.offsetLeft + card.offsetWidth / 2 - e.clientX;
      const yy =
        card.offsetTop + card.offsetHeight / 2 - (e.clientY + window.scrollY);

      // card.style.transform = `perspective(500px) rotateX(${yy / m}deg) rotateY(${-xx / m}deg) `;
      card.style.transform = `perspective(${perspective}px) rotateX(${
        yy / my
      }deg) rotateY(${-xx / mx}deg)`;
    });

    // console.log(x, y);
    // console.log(e.clientX, e.clientY);
    // console.log(y);
  }
  function createBtn(id) {
    const btn = document.createElement("div");
    btn.setAttribute(
      "style",
      "width:fit-content;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 12px;"
    );
    btn.innerText = "click để kích hoạt hiệu ứng";
    document.querySelector(id).appendChild(btn);
    return btn;
  }
}
function isMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  )
    return true;
  else return false;
}
function newMouse() {
  // const myMouse=
  const myMouse = document.createElement("div");
  myMouse.id = "binhMouse";
  myMouse.innerHTML = `
  <div class="pt100">
    <div class="binhMouse_circle"></div>
  </div>
  <style>
  #binhMouse{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:999;width:30px;pointer-events:none}.pt100{padding-top:100%}.binhMouse_circle{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-sizing:border-box;border:5px solid #00c6fb;animation:binhMouse 1s linear infinite alternate}@keyframes binhMouse{from{border-color:#c71d6f}to{border-color:#d09693;top:20%;left:20%;right:20%;bottom:20%}}*{cursor:none}
  </style>`;
  document.body.appendChild(myMouse);
  document.body.onmousemove = (e) => {
    myMouse.style.top = `${e.clientY + window.scrollY}px`;
    myMouse.style.left = `${e.clientX}px`;
  };
}
if (!isMobile()) {
  newMouse();
  card_rotate_on_mousemove();
}
