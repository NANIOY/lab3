const apiUrl = 'https://api.quotable.io/random';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });