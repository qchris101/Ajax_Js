
// simple axios DOC call to practice 
axios.get("https://swapi.dev/api/people/1/").then ((res) => {
  console.log("Not part of the async function ", res)
})
.catch((e) => {
  console.log("Error: ", e)
})

// making a axios fetch request with async
const getStarWarsPerson = async (id) => {
  try { // In the try block we have axios with a get request being held by the variable response 
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`)
    // This console.log is returning the our response variable with our data 
  console.log(response.data)
  // Catch block to return any errors that may ensue.
 } catch(e){
   console.log(e)
 }
}
// since we added an id we can search any number from the database
getStarWarsPerson(25)
// Created a simple for loop to play around with getting multiple get calls at once.
for( let i = 1; i<10; i++ ) {
  getStarWarsPerson(i)
}
