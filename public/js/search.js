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

        for (var i=0; i < data.length; i = i +14) {
            var workoutCardsEl = data
            console.log(workoutCardsEl[i])
            var divCol = document.createElement("div")
            divCol.classList = "col-sm-2 mb-3 mb-sm-0"

            var divBody = document.createElement("div")
            divBody.classList = "card-body"

            var h5 = document.createElement("h5")
            h5.classList = "card-title"
            h5.textContent = "Exercise name: " + data[i].WorkOut
            divBody.appendChild(h5)
            result.appendChild(divBody)

            var pMuscles = document.createElement("p")
            pMuscles.classList = "card-text"
            pMuscles.textContent = "Muscle worked: " + data[i].Muscles
            divBody.appendChild(pMuscles)
            result.appendChild(divBody)

            var pEquipment = document.createElement("p")
            pEquipment.classList = "card-text"
            pEquipment.textContent = "Equipment needed: " + data[i].Equipment
            divBody.appendChild(pEquipment)
            result.appendChild(divBody)

            var pExplaination = document.createElement("p")
            pExplaination.classList = "card-text"
            pExplaination.textContent = "Explanation: " + data[i].Explaination
            divBody.appendChild(pExplaination)
            result.appendChild(divBody)

            var pVideo = document.createElement("p")
            pVideo.classList = "card-text"
            pVideo.textContent = "Link to Youtube tutorial: " + data[i].Video
            divBody.appendChild(pVideo)
            result.appendChild(divBody)

        }
    })
}

function search() {
    var searchTerm = searchInput.value
    workoutSearch(searchTerm)
}

searchBtnEl.addEventListener("click", search)