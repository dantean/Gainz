// This code determines 

document.addEventListener('DOMContentLoaded', function() {
// Extract the search query from the URL
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
// Clear previous results
            resultsContainer.innerHTML = '';

// Check if data is not empty
            if (data.length > 0) {
                data.forEach(item => {
// Create a new card for each item
                    const card = document.createElement('div');
                    card.className = 'card column is-one-quarter';

                    const cardContent = document.createElement('div');
                    cardContent.className = 'card-content';

                    const title = document.createElement('p');
                    title.className = 'title is-4';
                    title.textContent = item.WorkOut;

                    const subtitle = document.createElement('p');
                    subtitle.className = 'subtitle is-6';
                    subtitle.textContent = `Muscle worked: ${item.Muscles}`;

                    const content = document.createElement('div');
                    content.className = 'content';
                    content.innerHTML = `
                        Equipment needed: ${item.Equipment}<br>
                        Explanation: ${item.Explanation}<br>
                        <a href="${item.Video}" target="_blank">Youtube Tutorial</a>
                    `;

                    cardContent.appendChild(title);
                    cardContent.appendChild(subtitle);
                    cardContent.appendChild(content);
                    card.appendChild(cardContent);
                    resultsContainer.appendChild(card);
                });
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
