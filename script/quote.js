const apiUrl = 'https://api.quotable.io/random';

const quoteTypes = {
    'clear': 'inspire',
    'clouds': 'management',
    'rain': 'life',
    'thunderstorm': 'funny',
    'snow': 'art',
    'fog': 'love',
    'default': 'inspire',
};

async function getQuote(weatherCondition) {
    const category = quoteTypes[weatherCondition] || 'inspire';
    const apiUrlWithCategory = `${apiUrl}?category=${category}`;

    try {
        const response = await fetch(apiUrlWithCategory);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getQuote, quoteTypes };