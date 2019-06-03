
export const removeProperty = (propKey, { [propKey]: propValue, ...rest }) => rest;

export const convertArrayToObjectByField = (array, fieldName) => {
    let obj = {};
    for (let elem of array) {
        obj[elem[fieldName]] = elem;
    }
    return obj;
};