//shift alt down(copys text)

async function fetchData(id){
const url = "http://www.omdbapi.com/?apikey=5e10048a&i=" + id
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  renderImage(json.Poster)
  renderPlot(json.Plot)
}
//how do I apply an event

document.addEventListener("DOMContentLoaded", function () {
    
})
// document.addEventListener("MutationObserver", function (){

// })




 function renderImage(url) {
    const img = document.createElement('img');
    img.src = url;
    const movieDiv = document.querySelector('.movies')
    movieDiv.appendChild(img)
}

function renderPlot(plot){
    const p = document.createElement("p")
    p.innerText = plot
    const movieDiv = document.querySelector('.movies')
    movieDiv.appendChild(p)
}


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

   

// function fetchTerm() {
//     const termMovie = "http://www.omdbapi.com/?apikey=5e10048a&i=tt0088247"
//     fetch(termMovie)
//         .then((response) => response.json())
//         .then((data) => renderListItems(data.message))

// }
//set to variable. attatch variable to that thing

//.getElementsByTagName('li')[0]
//console.log(clickEvent)



    // document.addEventListener("DOMContentLoaded", (event) =>{
    //  console.log('DOM fully loaded and parsed')
    // // },
    // document.addEventListener("click", (event)=>{
    // console.log("clicked event")
    // },
    

    // document.getElementsByClassName("menu-list").addEventListener("click", function() {
    //     document.getElementById("demo").innerHTML = "Hello World";
    //   })
      


// console.log(movieChoices)
// const reason = {res1:"the look", res2:"the freedom", res3:"the power", res4:"love"}
// //make reason into a button that triggers the movie pages, there's an accompanying bio where I express why these movies were of importance    

// })
// document.addEventListener("click", (event) => {
//     console.log("clicked event")
