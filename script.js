// Replace with your backend URL
const BACKEND_URL = "https://liveweather-69dc.onrender.com";

document.getElementById("getWeather").addEventListener("click", async () => {
    const location = document.getElementById("location").value;
    const weatherDisplay = document.getElementById("weatherDisplay");

    // Clear the display before fetching data
    weatherDisplay.innerHTML = "";

    if (!location) {
        weatherDisplay.innerHTML = '<p class="text-danger">Please enter a location.</p>';
        return;
    }

    try {
        // Fetch weather data from the backend
        const response = await fetch(`${BACKEND_URL}/api/weather?location=${encodeURIComponent(location)}`);
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
