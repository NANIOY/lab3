class Weather {
    // static method to fetch weather data based on latitude and longitude
    static async getWeather(lat, lng) {
        const apiKey = 'af7a3745866a51982506daaac925e861';
        const cacheKey = `weather_${lat}_${lng}`;
        const cachedData = localStorage.getItem(cacheKey); // get cached data

        // if cached data is found
        if (cachedData) {
            const cached = JSON.parse(cachedData); // parse cached data
            const currentTime = new Date().getTime(); // get current time
            
            if (currentTime - cached.timestamp < 3600000) {
                return cached.data;
            }
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const currentTime = new Date().getTime();
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: currentTime, data })); // cache the fetched data
            return data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

export default Weather;