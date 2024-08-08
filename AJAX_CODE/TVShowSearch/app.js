const form = document.querySelector("#searchForm")

form.addEventListener('submit', async function (e){
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    displayImg(response.data)
    // console.log(response.data[0].show.image.medium)
    // const img = document.createElement('IMG')
    // img.src = response.data[0].show.image.medium
    // document.body.append(img)
})

const displayImg = (shows) => {
    for(let result of shows){
    const img = document.createElement('IMG')
    img.src = result.show.image.medium
    document.body.append(img)
    }
}