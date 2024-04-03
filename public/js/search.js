var searchBtnEl = document.getElementById('search-btn');
var searchInput = document.getElementById('search-input');

function search() {
    var searchTerm = searchInput.value;
    window.location.href = `/results?search=${encodeURIComponent(searchTerm)}`;
}

// v-- enables the Enter button to submit the search results instead of having to press a mouse button --v

function search() {
    var searchTerm = searchInput.value
    workoutSearch(searchTerm)
}

searchBtnEl.addEventListener("click", search)

// Unified search function
function search() {
    var searchTerm = searchInput.value;
    window.location.href = `/results?search=${encodeURIComponent(searchTerm)}`;
}

// Attach the event listener correctly
searchBtnEl.addEventListener('click', search);