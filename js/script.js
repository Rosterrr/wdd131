document.addEventListener("DOMContentLoaded", function () {
    const foodButton = document.getElementById("foodButton");
    const foodList = document.getElementById("foodList");
  
    foodButton.addEventListener("click", function () {
      foodList.classList.toggle("hidden");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Footer: Display current year and last modified date
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Explore Japan | Designed by [Your Name] | Last Modified: ${document.lastModified}`;

    // Static weather values (you can replace these with real data later)
    const temperature = 8; // Example: Temperature in Celsius
    const windSpeed = 10; // Example: Wind speed in km/h

    // Calculate and display wind chill
    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        windChillElement.textContent = getWindChill(temperature, windSpeed);
    }
});

// Function to calculate wind chill (Metric: °C and km/h)
function getWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}
