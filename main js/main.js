$(document).ready(onReady);

let employeeArray = [];

function onReady() {
    console.log('jq');
$('#addItemButton').on('click', addEmployee);
}


function addEmployee(){
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#salaryIn').val()
    }
    console.log('new employee', employee);
    console.log('hello');
    employeeArray.push(employee)
}

