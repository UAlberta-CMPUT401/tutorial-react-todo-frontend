export function RESTCaller(url, headersValue, data) {
    return fetch(url, { method: 'POST', headers: headersValue, body: JSON.stringify(data) })
        .then(async (response) => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('There was an error:', error);
        });
}

export function GetRESTCaller(url) {
    return fetch(url)
        .then(async (response) => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('There was an error:', error);
        });
}

export function DeleteRESTCaller(url) {
    return fetch(url, { method: 'DELETE'})
        .then(async (response) => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('There was an error:', error);
        });
}
