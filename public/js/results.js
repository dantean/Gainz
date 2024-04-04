document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search'); // Assuming 'search' is your query parameter

    if (search) {
        workoutSearch(search);
    }
});

function workoutSearch(search) {
    const url = `/api/workouts/${search}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('resultsContainer');
            resultsContainer.innerHTML = ''; // Clear previous results

            // Check if data is not empty
            if (data.length > 0) {
                // Create table
                const table = document.createElement('table');
                table.className = 'table'; // Add your table classes here

                // Create table header
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                ['WorkOut', 'Muscles Worked', 'Equipment', 'Explanation', 'Tutorial'].forEach(headerText => {
                    const header = document.createElement('th');
                    header.textContent = headerText;
                    headerRow.appendChild(header);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Create table body
                const tbody = document.createElement('tbody');
                data.forEach(item => {
                    const row = document.createElement('tr');

                    // Fill in the data
                    const workoutCell = document.createElement('td');
                    workoutCell.textContent = item.WorkOut;
                    row.appendChild(workoutCell);

                    const muscleCell = document.createElement('td');
                    muscleCell.textContent = item.Muscles;
                    row.appendChild(muscleCell);

                    const equipmentCell = document.createElement('td');
                    equipmentCell.textContent = item.Equipment;
                    row.appendChild(equipmentCell);

                    const explanationCell = document.createElement('td');
                    explanationCell.textContent = item.Explanation;
                    row.appendChild(explanationCell);

                    const tutorialCell = document.createElement('td');
                    const tutorialLink = document.createElement('a');
                    tutorialLink.href = item.Video;
                    tutorialLink.textContent = 'View';
                    tutorialLink.target = '_blank';
                    tutorialCell.appendChild(tutorialLink);
                    row.appendChild(tutorialCell);

                    tbody.appendChild(row);
                });
                table.appendChild(tbody);
                resultsContainer.appendChild(table);
            } else {
                // Show a message if no results found
                resultsContainer.innerHTML = '<p class="title is-4">No results found. Please try another search.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            const resultsContainer = document.getElementById('resultsContainer');
            resultsContainer.innerHTML = '<p class="title is-4">Error loading results.</p>';
        });
}
