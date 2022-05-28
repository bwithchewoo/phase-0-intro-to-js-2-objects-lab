// Write your solution in this file!
let employee = {name: "Anna", streetAddress: "Woodside"}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    let employee1 = {...obj};
    console.log(employee1);
    employee1[key] = value;
    console.log(employee1);
    return employee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    let deleted = {...obj};
    delete deleted[key];
    return deleted;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}




