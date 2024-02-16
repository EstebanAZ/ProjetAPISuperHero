document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const resultsDiv = document.getElementById('weatherResults');

    try {
        const response = await fetch(`/weather/${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        resultsDiv.innerHTML = `
        <h2 class="weather-title">Weather in ${data.city}, ${data.country}</h2>
        <div class="weather-result-subdiv">
        <img class="weather-icon" src="${data.icon}" alt="Weather icon">
        <p class="weather-condition">${data.condition}</p>
        <p class="weather-temperature">${data.temperature}°C</p>
        </div>
        
    `;
    } catch (error) {
        console.error('Error:', error);
        resultsDiv.textContent = 'An error occurred while fetching the weather data.';
    }
});