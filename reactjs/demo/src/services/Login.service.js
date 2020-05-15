const api_url = 'http://localhost:8080/login';

function login(username, password) {
    const body = { username, password};
    const headers = { 'Content-Type': 'application/json' };
    console.log(body);
    const opt = { method: 'post', headers, body: JSON.stringify(body) };
    return fetch(api_url, opt);
}

export default { login }