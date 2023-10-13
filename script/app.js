import Weather from './weather.js';
import { updateBannerBackground } from './banner.js';

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

    async gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    async getWeather() {
        const data = await Weather.getWeather(this.lat, this.lng);

        if (data) {
            const weatherDescription = data.weather?.[0]?.description || 'Weather information not available';
            const weatherCondition = data.weather?.[0]?.main.toLowerCase();

            document.querySelector("#weather").innerHTML = weatherDescription;
            document.querySelector("#weather").id = `weather-${weatherCondition}`;
            updateBannerBackground(data.weather?.[0]?.icon || 'Default');
        }
    }

    errorLocation(err) {
        console.log(err);
    }
}

let app = new App();
