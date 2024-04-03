var searchBtnEl = document.getElementById("search-btn")
var searchInput = document.getElementById("search-input")
var result = document.getElementById("result")

function workoutSearch(search) {
    var url = `/api/workouts/${search}`

    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        result.textContent=""

        for (var i=3; i < data.length; i = i +8) {
            var workoutCardsEl = data
            console.log(workoutCardsEl[i])
            var divCol = document.createElement("div")
            divCol.classList = "col-sm-2 mb-3 mb-sm-0"

            var divCard = document.createElement("div")
            divCard.classList = "card"

            var divBody = document.createElement("div")
            divBody.classList = "card-body"

            var h5 = document.createElement("h5")
            h5.classList = "card-title"
            h5.textContent = data[i].Muscles
            divBody.appendChild(h5)
            result.appendChild(divBody)
        }
    })
}

function search() {
    var searchTerm = searchInput.value
    workoutSearch(searchTerm)
}

searchBtnEl.addEventListener("click", search)