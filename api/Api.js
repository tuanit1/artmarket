const server_url = "http://192.168.1.13/artmarket/api.php";

export const PostAPI = async (params) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };

    const response = await fetch(server_url, requestOptions);

    return await response.json();
}
