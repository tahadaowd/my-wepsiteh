const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/image1.jpg" },
  { name: "Voluptatem", image: "images/image2.webp" },
  { name: "Explicabo", image: "images/image3.webp" },
  { name: "Rchitecto", image: "images/image4.jpeg" },
  { name: " Beatae", image: "images/image5.webp" },
  { name: " Vitae", image: "images/image6.jpeg" },
  { name: "Inventore", image: "images/image7.jpg" },
  { name: "Veritatis", image: "images/image8.webp" },
  { name: "Accusantium", image: "images/image9.webp" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)