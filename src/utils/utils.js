export const isEmpty = (...params) => {
    params.forEach(elem => {
        if (elem == null || elem == undefined || elem == "") {
            return true;
        }
    })

    return false;
};