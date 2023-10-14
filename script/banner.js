function updateBannerBackground(weatherIcon) {
    // define the background images for each weather condition based on weather icon codes
    const backgroundImages = {
        '01d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clear.webp)',
        '01n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clear.webp)',
        '02d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '02n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '03d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '03n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '04d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '04n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/clouds.webp)',
        '09d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/rain.webp)',
        '09n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/rain.webp)',
        '10d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/rain.webp)',
        '10n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/rain.webp)',
        '11d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/thunder.webp)',
        '11n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/thunder.webp)',
        '13d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/snow.webp)',
        '13n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/snow.webp)',
        '50d': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/fog.webp)',
        '50n': 'url(https://raw.githubusercontent.com/NANIOY/lab3/main/images/fog.webp)',
    };

    const banner = document.getElementById('weather-banner');
    banner.style.backgroundImage = backgroundImages[weatherIcon];
}

export { updateBannerBackground };