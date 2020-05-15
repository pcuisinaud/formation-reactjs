const api_url = 'http://localhost:8080/teams';

function getTeams() {
    return fetch(api_url).then(res => res.json());
}

function addTeam(name) {
    const body = { team: { name } };
    const headers = { 'Content-Type': 'application/json' };
    console.log(body);
    const opt = { method: 'post', headers, body: JSON.stringify(body) };
    return fetch(api_url, opt);
}

export default { getTeams }
export { addTeam }