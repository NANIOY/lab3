import Weather from './weather.js';
import { updateBannerBackground } from './banner.js';
import { getQuote } from './quote.js';

class App {
    constructor() {
        this.getLocation();
        this.lat = null;
        this.lng = null;
    }

    getLocation() {
        // get the user's geolocation
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
    }

    async gotLocation(result) {
        // extract latitude and longitude from the geolocation result
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    async getWeather() {
        // get weather data based on latitude and longitude
        const data = await Weather.getWeather(this.lat, this.lng);

        if (data) {
            // get weather description and condition
            const weatherDescription = data.weather?.[0]?.description || 'Weather information not available';
            const weatherCondition = data.weather?.[0]?.main.toLowerCase();

            // set the weather description and background
            document.querySelector("#weather").innerHTML = weatherDescription;
            document.querySelector("#weather").id = `weather-${weatherCondition}`;
            updateBannerBackground(data.weather?.[0]?.icon || 'Default');

            // get a random quote based on the weather condition
            getQuote(weatherCondition)
                .then(quoteData => {
                    if (Array.isArray(quoteData) && quoteData.length > 0) {
                        const quote = document.querySelector("#quote");
                        const quoteContent = quoteData[0].content;
                        quote.innerHTML = quoteContent; // display the quote content and category

                        const quoteCategory = quoteData[0].tags.join(', ');
                        console.log('Quote Category:', quoteCategory);
                        console.log('Quote Content:', quoteContent);
                    } else {
                        // display a message if no quote is available for the category
                        const quote = document.querySelector("#quote");
                        quote.innerHTML = 'No quote available for this category.';
                        console.log('No quote available for this category.');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    errorLocation(err) {
        // handle errors related to geolocation
        console.log(err);
    }
}

let app = new App();