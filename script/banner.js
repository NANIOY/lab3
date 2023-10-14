function updateBannerBackground(weatherIcon) {
    // define the background images for each weather condition based on weather icon codes
    const backgroundImages = {
        '01d': 'url(/images/clear.webp)',
        '01n': 'url(/images/clear.webp)',
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
        '11d': 'url(/images/thunder.webp)',
        '11n': 'url(/images/thunder.webp)',
        '13d': 'url(/images/snow.webp)',
        '13n': 'url(/images/snow.webp)',
        '50d': 'url(/images/fog.webp)',
        '50n': 'url(/images/fog.webp)',
    };

    const banner = document.getElementById('weather-banner');
    banner.style.backgroundImage = backgroundImages[weatherIcon];
}

export { updateBannerBackground };