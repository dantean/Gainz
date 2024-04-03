var searchBtnEl = document.getElementById('search-btn');
var searchInput = document.getElementById('search-input');

async function workoutSearch(searchTerm) {
    const encodedSearchTerm = encodeURIComponent(searchTerm);

try {
    const response = await fetch('/api/workouts/${encodedSearchTerm}');
    if (!response.ok) {
        throw new Error('Search Failed');
    }
    const data = await response.json();
    localStorage.setItem('workoutSearchResults', JSON.stringify(data));
    window.location.href = '/results';
} catch (error) {
    console.error('Error during search:', error);
}
}

function initiateSearch(event) {
    event.preventDefault();
    var searchTerm = searchInput.ariaValueMax.trim();
    if (searchTerm) {
        workoutSearch(searchTerm);
    }
}

searchBtnEl.addEventListener('click', initiateSearch);