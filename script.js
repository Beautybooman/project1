async function fetchData(id){
const url = "http://www.omdbapi.com/?apikey=5e10048a&i=" + id
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  renderImage(json.Poster)
  renderPlot(json.Plot)
}

document.addEventListener("DOMContentLoaded", function () {
    
const elem = document.createElement('div');
const elemText = document.createTextNode('This is a my text for the movie')
elem.appendChild(elemText)
document.body.appendChild(elem)

const clickEventTest = document.querySelector(".menu-list")

clickEventTest.addEventListener("mouseover", function(event){
    if(event.target.tagName === "BUTTON"){
        event.target.style.backgroundColor = "black"
        event.target.style.backgroundColor
        event.target.style.backgroundColor.disabled = true
    }

})

clickEventTest.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        console.dir(event.target.dataset.id)
        fetchData(event.target.dataset.id)
        event.target.disabled = true

    }

})
})
   
function renderPlot(plot){
    const p = document.createElement("p")
    p.innerText = plot
    const movieDiv = document.querySelector('.movies')
    movieDiv.appendChild(p)
}

function renderImage(url) {
    const img = document.createElement('img');
    img.src = url;
    const movieDiv = document.querySelector('.movies')
    movieDiv.appendChild(img)
}