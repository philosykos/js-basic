const body = document.querySelector("body");

const BG_IMG_CNT = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  // image.addEventListener("loadend", handleImageLoad); API로 이미지를 불러올 때 이벤트 처리
}

function genRandom(number) {
  return Math.floor(Math.random() * BG_IMG_CNT) + 1;
}

function init() {
  const randomNumber = genRandom(BG_IMG_CNT);
  paintImage(randomNumber);
}

init();