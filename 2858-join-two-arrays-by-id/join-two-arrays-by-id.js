/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};

    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = { ...arr1[i] };
    }

    for (let i = 0; i < arr2.length; i++) {
        const id = arr2[i].id;
        if (result[id]) {
            for (const key in arr2[i]) {
                result[id][key] = arr2[i][key]; 
            }
        } else {
            result[id] = { ...arr2[i] };
        }
    }

    return Object.values(result);
};
