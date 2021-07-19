function start() {
  const my = 20;
  const perspective = 600;
  const mx = my * 2;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const cards = document.querySelectorAll(".practiceItem");
  //   _no_transition();
  //   console.log(cards);
  setInterval(() => {
    console.log(window.scrollY);
  }, 500);
  cards.forEach((card) => {
    console.log([card]);
    //   card.onmouseenter = () => {
    //     card.setAttribute("style", "");
    //     card.classList.add("active");
    //   };
    //   card.onmouseleave = () => {
    //     card.classList.remove("active");
    //     //   setTimeout(() => {}, 300);
    //   };
  });
  window.addEventListener("mousemove", moving);

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
if (!isMobile()) {
  start();
}
