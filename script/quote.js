const apiUrl = 'https://api.quotable.io/random';

function getQuote() {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
            return null;
        });
}

export { getQuote };