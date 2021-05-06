// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

//Get a reference to the click me butoton
let clickMeButton = document.querySelector(`.click-me`)

//Event listener for the "click me" button
// clickMeButton.addEventListener(`click`, async function(event) {
// }

let addMovieLink = document.querySelector(`.add-movie`)

addMovieLink.addEventListener(`click`, async function(event) {
  event.preventDefault()
  //alert(`hi~`)
  // // Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// // // Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)
})

//Get a reference to the "zoom image" button
let zoomImageButton = document.querySelector(`.zoom-image`)

zoomImageButton.addEventListener(`click`, async function(event){
  // // Get a reference to the image
let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
image.classList.toggle(`border-pink-500`)

// make the image larger
image.classList.toggle(`w-96`)
image.classList.toggle(`w-full`)
})

//Get a reference to the change image button
let changeImageButton = document.querySelector(`.change-image`)

changeImageButton.addEventListener(`click`, async function(event){
  let image = document.querySelector(`img`)

  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

//get a reference to the "say hi" button
let sayHiButton = document.querySelector(`.say-hi`)

//event listener for sayhi button
sayHiButton.addEventListener(`click`, async function(event){
  event.preventDefault()
  
  //get a reference to the first name input
  let firstNameInput = document.querySelector(`#first-name`)

  //get the value that the user entered in the first name input
  let firstName = firstNameInput.value

  //get a reference to the greet element
  let greetElement = document.querySelector(`.greet`)

  // check that first name has a vlue
  if (firstName.length > 0) {

  //create a sentence to put in the "greet" elemnt
  let sentence = `Hi, ${firstName}`

  //replace the greet element's contents with the sentence
  greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
})