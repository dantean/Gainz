var searchBtnEl = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var results = document.getElementById("results"); // Ensure this ID matches your HTML element
var favorites=[];

function workoutSearch(search) {
    var url = `/api/workouts/${search}`;

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        results.innerHTML = ""; // Use innerHTML to reset the content

        // Check if data is not empty
        if (data && data.length > 0) {
            favorites=data;
            // Create and append the table and its elements
            var table = document.createElement("table");
            table.className = "table is-striped is-fullwidth"; // Add Bulma classes for styling

            // Create table header
            var thead = document.createElement("thead");
            var headerRow = document.createElement("tr");
            var headers = ["Exercise name", "Muscle worked", "Equipment needed", "Explanation", "Tutorial link", "Save"];
            headers.forEach(text => {
                var header = document.createElement("th");
                header.textContent = text;
                headerRow.appendChild(header);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create table body
            var tbody = document.createElement("tbody");
            data.forEach((item, index) => {
                var row = document.createElement("tr");

                var workoutCell = document.createElement("td");
                workoutCell.textContent = item.WorkOut;
                row.appendChild(workoutCell);

                var muscleCell = document.createElement("td");
                muscleCell.textContent = item.Muscles;
                row.appendChild(muscleCell);

                var equipmentCell = document.createElement("td");
                equipmentCell.textContent = item.Equipment;
                row.appendChild(equipmentCell);

                var explanationCell = document.createElement("td");
                explanationCell.textContent = item.Explanation;
                row.appendChild(explanationCell);

                var tutorialCell = document.createElement("td");
                var tutorialLink = document.createElement("a");
                tutorialLink.href = item.Video;
                tutorialLink.textContent = "View Tutorial";
                tutorialLink.target = "_blank";
                tutorialCell.appendChild(tutorialLink);
                row.appendChild(tutorialCell);

                const saveCell = document.createElement('td');
                const saveLink = document.createElement('a');
                saveLink.textContent = 'Save';
                saveLink.setAttribute("data-id", index);
                saveLink.addEventListener("click", async function(event){
                    var id = event.target.getAttribute("data-id")
                    console.log(favorites[id])
                    var WorkOut = favorites[id].WorkOut;
                    var Equipment = favorites[id].Equipment;
                    var Video = favorites[id].Video;
                    var Muscles = favorites[id].Muscles;
                    const response = await fetch('/api/favorites', {
                        method: 'POST',
                        body: JSON.stringify({WorkOut, Equipment, Video, Muscles}),
                        headers: { 'Content-Type': 'application/json' },
                    });
            
                    if (response.ok) {
                        // If successful, redirect the browser to the profile page
                        document.location.replace('/profile');
                    } else {
                        alert(response.statusText);
                    }
                })
                saveCell.appendChild(saveLink);
                row.appendChild(saveCell);


                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            // Append the complete table to the results container
            results.appendChild(table);
        } else {
            // Show a message if no results found
            results.innerHTML = '<p class="title is-4">No results found. Please try another search.</p>';
        }
    })
    .catch(function (error) {
        console.error('Error fetching data: ', error);
        results.innerHTML = '<p class="title is-4">Error loading results.</p>';
    });
}

function search() {
    var searchTerm = searchInput.value.trim();
    if (searchTerm) {
        workoutSearch(searchTerm);
    }
}

searchBtnEl.addEventListener("click", search);
