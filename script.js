class App {
    constructor() {
        this.getLocation();
        this.lat = null;
        this.lng = null;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather() {
        const apiKey = 'af7a3745866a51982506daaac925e861';
        const cacheKey = `weather_${this.lat}_${this.lng}`;
        const cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
            const cached = JSON.parse(cachedData);
            const currentTime = new Date().getTime();
            if (currentTime - cached.timestamp < 3600000) {
                this.displayWeather(cached.data);
                updateBannerBackground(cached.data.weather?.[0]?.main || 'Default');
                return;
            }
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Cache the data with a timestamp
                const currentTime = new Date().getTime();
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: currentTime, data }));
                this.displayWeather(data);
                updateBannerBackground(data.weather?.[0]?.main || 'Default');
            })
            .catch(err => {
                console.log(err);
            });
    }

    displayWeather(data) {
        const weatherDescription = data.weather?.[0]?.description || 'Weather information not available';
        document.querySelector("#weather-text").innerHTML = weatherDescription;
    }

    errorLocation(err) {
        console.log(err);
    }
}

function updateBannerBackground(weatherCondition) {
    const backgroundImages = {
        'Clear': 'url(/images/clear.jpeg)',
        'Fog': 'url(/images/fog.jpg)',
        'Clouds': 'url(/images/clouds.webp)',
        'Rain': 'url(/images/rain.webp)',
        'Thunder': 'url(/images/thunder.jpeg)',
        'Snow': 'url(/images/snow.jpeg)',
        'Wind': 'url(/images/wind.jpg)',
        'Hail': 'url(/images/hail.jpeg)',
        'Tornado': 'url(/images/tornado.jpg)',
    };

    const banner = document.getElementById('weather-banner');
    banner.style.backgroundImage = backgroundImages[weatherCondition] || 'url(default.jpg)';
}

let app = new App();
