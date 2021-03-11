export const isEmpty = (...params) => {
    params.forEach(elem => {
        if (elem == null || elem == undefined || elem === "") {
            return true;
        }
    });

    return false;
};

export const fetchData = async (url = '', method = 'GET', body = {}) => {
    try {
        const response = await fetch(url, {
            method: method,
            mode: "cors",
            body: JSON.stringify(body)
        });
        return { data: response.json(), statusCode: response.status };

    } catch (err) {
        console.error(err);
    }
}