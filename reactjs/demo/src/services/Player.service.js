const api_url = 'http://localhost:8080';

function getTeams() {
    return fetch(api_url+'/teams').then(res => res.json());
}

export default { getTeams }