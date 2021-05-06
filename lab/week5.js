// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

// API Key: 2d401fdb2632441a82c12008213004


window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button
  let getWeatherButton = document.querySelector(`.get-weather`)

  // When the "get weather" button is clicked:
  getWeatherButton.addEventListener(`click`,async function(event){

      // - Ignore the default behavior of the button
      event.preventDefault()

    // - Get a reference to the element containing the user-entered location
    let inputLocationElement = document.querySelector(`#location`)

    // - Get the user-entered location from the element's value
    let inputLocation = inputLocationElement.value 
    console.log(inputLocation)

    //get number of days to lookback
    let inputDaysElement = document.querySelector(`#days`)
    let inputDays = inputDaysElement.value
    if (inputDays > 3) {
      inputDays = 3
    }
    console.log(inputDays)

    // - Check to see if the user entered anything; if so:
    if (inputLocation.length > 0){

      // - Construct a URL to call the WeatherAPI.com API
      let url = `https://api.weatherapi.com/v1/forecast.json?key=2d401fdb2632441a82c12008213004&q=${inputLocation}&days=3`
      
      // - Fetch the url, wait for a response, store the response in memory
      let response = await fetch(url)

      // - Ask for the json-formatted data from the response, wait for the data, store it in memory
      let json = await response.json()

      // - Write the json-formatted data to the JavaScript console
      console.log(json)
      // - Store the interpreted location, current weather conditions, the forecast as three separate variables
      //get location information
      let region = json.location.region
      let townOrCity = json.location.name
      let location = `${townOrCity}, ${region}`
      console.log(location)

      //get current weather conditions
      let temp = json.current.temp_f
      let condition = json.current.condition.text
      let currentWeath = `${temp} and ${condition}`
      console.log(currentWeath)

      //get number of days entered by the user


      //get div that displays the current weather
      let currentElement = document.querySelector(`.current`)

      //set the current weather div to the current weather for the chosen location
      currentElement.innerHTML = `<div class="text-center space-y-2">
      <div class="font-bold text-3xl">Current Weather for ${location}</div>
      <div class="font-bold">
        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" class="inline-block">
        <span class="temperature">${temp}</span>° 
        and
        <span class="conditions">${condition}</span>
      </div>
    </div>`

    //create a header for the forecast
    let forecastElement = document.querySelector(`.forecast`)
    console.log(forecastElement)
    forecastElement.innerHTML = `<div class="text-center space-y-8">
    <div class="font-bold text-3xl">${inputDays} Day Forecast</div>
    <div>`

    //run a for loop for each day (max 3) to get the forecast data. Create a div in the forecast to show the forecast
   
      for (i = 0; i < inputDays; i++) {
        let date = json.forecast.forecastday[i].date
        let highTemp = json.forecast.forecastday[i].day.maxtemp_f
        let lowTemp = json.forecast.forecastday[i].day.mintemp_f
        let foreConditions = json.forecast.forecastday[i].day.condition.text
        forecastElement.insertAdjacentHTML(`beforeend`,`<div><img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" 
        class="mx-auto"><h1 class="text-2xl text-bold text-gray-500">${date}</h1> 
        <h2 class="text-xl">High ${highTemp}° – Low ${lowTemp}°</h2>        
        <p class="text-gray-500">${foreConditions}</h1> </div>`)
        
      }

      //forecastElement.insertAdjacentHTML('beforeend',forecastHTML)
      // - Continue the recipe yourself!
      console.log(forecastElement)
      }
      
    })
})