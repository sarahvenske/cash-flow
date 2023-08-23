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
  console.log("click")
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

// Charts

function chartTopSpentCategories() {
  const ctx = document.getElementById("chart-top-categories")
  const chartData = JSON.parse(ctx.dataset.chartData)

  const data = {
    labels: chartData.map((category) => category.category_name),
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.map((category) => category.total_spent),
        backgroundColor: [
          "#D62432",
          "#F05023",
          "#F78D28",
          "#B01ED9",
          "#0015FF",
        ],
        hoverOffset: 4,
      },
    ],
  }
  new Chart(ctx, { type: "doughnut", data: data })
}
chartTopSpentCategories()
