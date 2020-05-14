const api_url = 'http://localhost:8080';

function getTeams() {
    return fetch(api_url).then(res => res.json());
}

export default { getTeams }