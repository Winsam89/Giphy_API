// connect api
function giffer(searchInput) {
    //prevent refresh
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&rating=g&api_key=blTjxqQz6iVIe9zt8spbGIs4kR9Q9Kie`)
    .then(r => r.json())
    .then(({data}) => { 
        //push gigs to empty string
        document.querySelector('#gifDiv').innerHTML = ''
        data.forEach(gif => {              
                const url = gif.images.fixed_height.url
                let gifElem = document.createElement('img')
                gifElem.setAttribute('src', url)
                document.querySelector('#gifDiv').append(gifElem)
            })
        })
        .catch(e => console.error(e))
}
// get the value of user input
function search() {
    let userSearch = document.getElementById('userInput').value 
    giffer(userSearch)
    createButton()

}
// user search creates a new button function
function createButton() {
    let userSearch = document.getElementById('userInput').value 
    let newButton = document.createElement('button')
    newButton.innerHTML = userSearch
    newButton.onclick = function() {
        giffer(userSearch)
    }
    document.getElementById('btnDiv').append(newButton)

}
Collapse



