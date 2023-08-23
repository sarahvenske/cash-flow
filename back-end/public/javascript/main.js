// Slides Activation

const sections = document.querySelectorAll(".slide")

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

// Previous and Next Buttons

const nextButtons = document.querySelectorAll(".btnNext")
nextButtons.forEach((b) => b.addEventListener("click", nextSlide))

const previousButtons = document.querySelectorAll(".btnPrevious")
previousButtons.forEach((b) => b.addEventListener("click", previousSlide))

// Top 5 Categories Spent Chart

function chartTopSpentCategories() {
  const ctx = document.getElementById("chart-top-categories")
  const chartData = JSON.parse(ctx.dataset.chartData)

  const data = {
    labels: chartData.map((category) => category.category_name),
    datasets: [
      {
        label: "Top Spent Categories",
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
