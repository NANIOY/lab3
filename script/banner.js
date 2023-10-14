function updateBannerBackground(weatherIcon) {
    // define the background images for each weather condition based on weather icon codes
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

export { updateBannerBackground };