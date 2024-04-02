var searchBtnEl = document.getElementById("search-btn")
var dashboardEl = document.getElementById("dashboard")
var workoutCardsEl = document.getElementById("workouts")



searchBtnEl.addEventListener("click", function(event){

    event.preventDefault();
})

function workoutSearch(muscleGroup) {
    var url = `https://work-out-api1.p.rapidapi.com/search`

    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        dashboardEl.textContent = ""

        for (var i=3; i < data.list.length; i = i +8) {
            var workoutCardsEl = data.list
            console.log(workoutCardsEl[i])
            var divCol = document.createElement("div")
            divCol.classList = "col-sm-2 mb-3 mb-sm-0"

            var divCard = document.createElement("div")
            divCard.classList = "card"

            var divBody = document.createElement("div")
            divBody.classList = "card-body"

            var h5 = document.createElement("h5")
            h5.classList = "card-title"
            h5.textContent = 
            divBody.appendChild(h5)
        }
    })
}

function search() {
    var muscle = searchBtnEl.ariaValueMax
    workoutSearch(muscle)
}

searchBtnEl.addEventListener("click", search)