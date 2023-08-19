const catImage = document.getElementById('catImage');
const fetchButton = document.getElementById('fetchButton');

// Function to fetch a random cat image
async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();

        const imageUrl = data[0].url;
        catImage.src = imageUrl;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Fetch a cat image when the page loads
fetchCatImage();

// Add event listener to the Fetch Another Cat button
fetchButton.addEventListener('click', fetchCatImage);
