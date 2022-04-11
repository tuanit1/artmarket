const server_url = "http://192.168.1.16/artmarket/api.php";

function* postAPI(params) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };
    const res = yield fetch(server_url, requestOptions);
    const json = yield res.json();

    return json;
}

export const Api = {
    postAPI
};
