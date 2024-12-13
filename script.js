// Replace with your backend URL
const BACKEND_URL = "https://liveweather-69dc.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
    const weatherDisplay = document.getElementById("weatherDisplay");

    try {
        // Fetch weather data for the default location
        const response = await fetch(`${BACKEND_URL}/api/weather?location=Melbourne`); // Replace 'Melbourne' with your default city
        const data = await response.json();

        // Handle errors returned from the backend
        if (data.error) {
            weatherDisplay.innerHTML = `<p class="text-danger">${data.error}</p>`;
            return;
        }

        // Display the weather data
        weatherDisplay.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h3>${data.location.name}</h3>
                    <p>Temperature: ${data.current.temperature}°C</p>
                    <p>Condition: ${data.current.weather_descriptions[0]}</p>
                </div>
            </div>
        `;
    } catch (error) {
        weatherDisplay.innerHTML = `<p class="text-danger">An error occurred while fetching the weather data.</p>`;
    }
});
