// URL to fetch data from
const url = 'https://qjh6xco24y7ytdrgyfh5enh3zu0dykdm.lambda-url.ca-central-1.on.aws/'; // Replace with your URL


// Fetch data from the URL using fetch API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Update the content of the 'data' paragraph element
        const dataElement = document.getElementById('data');
        dataElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
