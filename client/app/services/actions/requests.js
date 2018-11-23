const defaultHeader = {
    "Content-Type": 'application/json',
    "Authorization": "Token " + window.localStorage.getItem('token')
}

export const GET = (url, headers) => {
    headers = Object.assign(defaultHeader, headers);

    return fetch(url, { headers: headers }).then(function (res) {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    }).catch(function (err) {
        throw new Error("some error detected");
    });
}

export const POST = (url, obj, headers) => {
    let data = {};
    headers = Object.assign(defaultHeader, headers);

    if (headers) {
        data = { method: 'post', headers: headers, body: JSON.stringify(obj) };
    } else {
        data = { method: 'post', body: JSON.stringify(obj) };
    }

    return fetch(url, data).then(function (res) {
        return res.json();
    }).catch(function (error) {
        throw error;
    });
}