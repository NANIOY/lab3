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
                return;
            }
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // Cache the data with a timestamp
                const currentTime = new Date().getTime();
                localStorage.setItem(cacheKey, JSON.stringify({ timestamp: currentTime, data }));
                this.displayWeather(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    displayWeather(data) {
        const weatherDescription = data.weather?.[0]?.description || 'Weather information not available';
        document.querySelector("#weather").innerHTML = weatherDescription;
        updateBannerBackground(data.weather?.[0]?.icon || 'Default');
    }

    errorLocation(err) {
        console.log(err);
    }
}

function updateBannerBackground(weatherIcon) {
    console.log(weatherIcon);
    const backgroundImages = {
        '01d': 'url(/images/clear.jpeg)',
        '01n': 'url(/images/clear.jpeg)',
        '02d': 'url(/images/clouds.webp)',
        '02n': 'url(/images/clouds.webp)',
        '03d': 'url(/images/clouds.webp)',
        '03n': 'url(/images/clouds.webp)',
        '04d': 'url(/images/clouds.webp)',
        '04n': 'url(/images/clouds.webp)',
        '09d': 'url(/images/rain.webp)',
        '09n': 'url(/images/rain.webp)',
        '10d': 'url(/images/rain.webp)',
        '10n': 'url(/images/rain.webp)',
        '11d': 'url(/images/thunder.jpg)',
        '11n': 'url(/images/thunder.jpg)',
        '13d': 'url(/images/snow.jpeg)',
        '13n': 'url(/images/snow.jpeg)',
        '50d': 'url(/images/fog.jpg)',
        '50n': 'url(/images/fog.jpg)',
    };

    const banner = document.getElementById('weather-banner');
    banner.style.backgroundImage = backgroundImages[weatherIcon];
}

let app = new App();
