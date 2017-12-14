document.getElementById('loaded')
    .innerHTML = (new Date()).toLocaleTimeString();
    
document.getElementById('get-client-data')
    .addEventListener('click', fetchClientData);
    
document.getElementById('show-greet')
    .addEventListener('click', showGreetings);
    
    
function showGreetings() {
    fetch('greet.html')
        .then(response => response.text())
        .then(html => document.getElementById('greet').innerHTML = html);
}
    
function getClientData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML 
                = clientData['client-name'];
            document.getElementById('client-age').innerHTML 
                = clientData['client-age'];
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}

function fetchClientData() {
    fetch('client-data.json')
        .then(response => response.json())
        .then(clientData => {
            document.getElementById('client-name').innerHTML 
                = clientData['client-name'];
            document.getElementById('client-age').innerHTML 
                = clientData['client-age'];
        });
}

