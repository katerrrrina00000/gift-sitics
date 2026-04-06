/* переход */
function nextScreen(num) {
  const current = document.querySelector(".screen.active");
  current.classList.remove("active");

  const next = document.getElementById("screen" + num);
  next.classList.add("active");

  runTyping(next);

  if (num === 5) randomizeWords();
}

/* музыка */
function startMusic() {
  document.getElementById("music").play();
}

/* видео */
function showVideo() {
  document.getElementById("videoBox").style.display = "block";
}

/* печать */
function typeWriter(element) {
  const text = element.innerText;
  element.innerText = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}

function runTyping(screen) {
  const texts = screen.querySelectorAll(".type");
  texts.forEach(el => typeWriter(el));
}

/* объединение */
function mergePhotos() {
  const p1 = document.getElementById("photo1");
  const p2 = document.getElementById("photo2");

  p1.style.transition = "1s";
  p2.style.transition = "1s";

  p1.style.transform = "translateX(50%)";
  p2.style.transform = "translateX(-50%)";

  setTimeout(() => {
    document.querySelector(".photos").style.display = "none";
    document.getElementById("merged").style.display = "block";
  }, 1000);
}

/* квест */
function wrong() {
  document.getElementById("hint").innerText =
    "Попробуй еще раз ❤️";
}

function correct() {
  document.getElementById("hint").innerText = "ДААА 🦭";

  document.getElementById("finalLove").style.display = "block";

  startHearts();

  setTimeout(() => nextScreen(6), 3000);
}

/* сердечки */
function startHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

/* слова */
function randomizeWords() {
  const words = document.querySelectorAll(".words span");

  words.forEach(word => {
    word.style.left = Math.random() * 80 + "vw";
    word.style.top = Math.random() * 150 + "px";
  });
}