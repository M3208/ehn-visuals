const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs img");
const opacity = 0.5;

// Aseta ensimmäisen kuvan näkyvyys
thumbs[0].style.opacity = opacity;

thumbs.forEach(img => img.addEventListener("click", imgActivate));

function imgActivate(e) {
  // Resettaa näkyvyyden thumbeilta
  thumbs.forEach(img => (img.style.opacity = 1));

  // Vaihtaa nykyisen kuvan siihen jota klikataan
  current.src = e.target.src;

  // Vaihtuvalle kuvalle FadeIn
  current.classList.add("fade-in");

  // Poistaa FadeIn animaation jälkeen
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Vaihtaa näkyvyyden arvon
  e.target.style.opacity = opacity;
}