const apiUrl = 'https://api.quotable.io/quotes/random';

const quoteTypes = {
    'clear': 'life',
    'clouds': 'wisdom',
    'rain': 'technology',
    'thunderstorm': 'success',
    'snow': 'future',
    'fog': 'love',
    'default': 'wisdom',
};

async function getQuote(weatherCondition) {
    weatherCondition = weatherCondition.toLowerCase();
    

    const tags = quoteTypes[weatherCondition] || 'inspire';
    const apiUrlWithTags = `${apiUrl}?tags=${tags}`;

    try {
        const response = await fetch(apiUrlWithTags);
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

export { getQuote };
