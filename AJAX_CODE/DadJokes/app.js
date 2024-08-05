
// Selecting the element we want to manipulate
const jokes = document.querySelector("#jokes")
const button = document.querySelector('#jokeButton')

const addNewJoke = async () => {
  const jokeText = await getDadJoke()
  const newLI = document.createElement('li')
  // We now need to append(add) our response data (the joke) to our new li that we previously created
  newLI.append(jokeText)
  // // now we append to our selected element tagged with the jokes id in our html
  jokes.append(newLI)
}

const getDadJoke = async () => {
  try {

    // Setting Headers following what the documentation is asking for
    const config = {headers: {Accept: 'application/json',}}
    // Axios call with url that is needed to call also passing config which is our headers
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    // console.log(res.data.joke)
    // This will return our joke data
    return res.data.joke
  } catch (e){
    return ("No jokes are available!")
  }
  }

button.addEventListener('click',addNewJoke)