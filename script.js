// READ the giphy API docs: https://developers.giphy.com/
// declare variables select elements
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'LPcRMggB4p6a912yAxflAzOzJ0bN1rPE'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector('input')
var results = document.querySelector('.results')














// define functions
function getGifs(path, term) {
    console.log(term)
    $.ajax({
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        type: "GET",
        dataType: "json",
        success: function (data) {
console.log(data)
for (var i=0; i<data.data.length; i++){
results.innerHTML += `
<img class="image" src="${data.data[i].images.preview_gif.url}">
`
}
}
        ,
        error: function (error) {
console.log("erro")
        }
    })
}













// call functions add event listeners 
searchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    results.innerHTML = ''
    getGifs("search", searchInput.value)
})