// Selecting our form id 
const form = document.querySelector("#searchForm")
// Adding an event listener on submit do the following
// e references the event 
form.addEventListener('submit', async function (e){
    // Prevent default to stop the page from refreshing
    e.preventDefault()
    // Created a variable to store the information from our search form 
    // Ie: Harry Potter, Iron man etc
    // finding the direct source using console.log(dir) we found our search value in the following
    // form -> elements-> query(We named our form query in our html, Line 16) ->value(our searchTerm)
    const searchTerm = form.elements.query.value
    // Created a config to hold parameters this is adding our q= for the api call reference Line 15 
    const config = { params:{ q: searchTerm}}
    //const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    // our axios call with our config variable adding our parameters from the search
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    // Calling our function to display the data response is referring to our axios call above
    displayImg(response.data)
    // this refreshes our search to be empty
    form.elements.query.value = ""
    // console.log(response.data[0].show.image.medium)
    // const img = document.createElement('IMG')
    // img.src = response.data[0].show.image.medium
    // document.body.append(img)
})
    // Our function looping through the shows that have correlation to our searchTerm
const displayImg = (shows) => {
    for(let result of shows){
        // If our result contains and img then continue else do not 
        if(result.show.image){
            // create an img element 
            const img = document.createElement('IMG')
            //our img source coming from result mentioned in our for loop
            // result->show->image->medium
            img.src = result.show.image.medium
            // add our new created img(line33),img to our html body 
            document.body.append(img)

        }
    }
}