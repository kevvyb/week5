// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory
let rollButton = document.querySelector(`.inline-block`)

// Listen for the clicking of the roll button, when clicked:
rollButton.addEventListener(`click`, async function(event){
    // - Ignore the roll button's default behavior
  event.preventDefault()

  // - Store a random integer in memory, representing the roll of the first die
  let rollOne = getRandomInt(6)

  // - Store a random integer in memory, representing the roll of the second die
  let rollTwo = getRandomInt(6)

  // - Store the total of the two random numbers, representing the total roll
  let totalRoll = rollOne + rollTwo

  // - Replace the first die image using the first random value (hint: setAttribute)
  let firstDie = document.querySelector(`.die1`)
  firstDie.setAttribute(`src`,`../images/dice/${rollOne}.png`)

  // - Replace the second die image using the second random value (hint: setAttribute)
  let secDie = document.querySelector(`.die2`)
  secDie.setAttribute(`src`,`../images/dice/${rollTwo}.png`)

  //STOP HERE
  // - Store a reference to the player name input element
  let nameInput = document.querySelector(`#player`)
  //console.log(nameInput)

  // - Grab the value of the player name element and store the player's name in memory
  let name = nameInput.value
  console.log(name)

  // - Make sure the player's name is filled out; if it is:
  if (name.length > 0) {
    // - Form a sentence in memory, containing the player's name and the total that was rolled
    let sentence = `${name}'s role: ${totalRoll}`
    // - Store a reference to the "result" un-ordered list element
    let resultList = document.querySelector(`.result`)
    // - Insert the sentence to the "result" un-ordered list as a list item (li)
    resultList.insertAdjacentHTML(`beforeend`,`<li>${sentence}</li>`)
  }
  })