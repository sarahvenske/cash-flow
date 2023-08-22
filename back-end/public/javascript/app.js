const sections = document.querySelectorAll(".slide")
const next = document.querySelector(".btnNext")
const previous = document.querySelector(".btnPrevious")

let currentSectionIndex = 0

function activateSlide(number) {
  sections.forEach((s) => s.classList.add("hidden"))
  sections[number].classList.remove("hidden")
}
activateSlide(currentSectionIndex)

function nextSlide(e) {
  currentSectionIndex++
  if (currentSectionIndex == sections.length) {
    currentSectionIndex = 0
    activateSlide(currentSectionIndex)
  }
  activateSlide(currentSectionIndex)
}

function previousSlide(e) {
  currentSectionIndex = currentSectionIndex - 1
  if (currentSectionIndex < 0) {
    currentSectionIndex = 0
    activateSlide(currentSectionIndex)
  }
  activateSlide(currentSectionIndex)
}
next.addEventListener("click", nextSlide)
previous.addEventListener("click", previousSlide)
