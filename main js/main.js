$(document).ready(onReady);

let employeeArray = [];
let totalSalary = 0;

//intializes to the click, and pushes the employee list to the array.
function onReady() {
    console.log('jq');
$('#addItemButton').on('click', addEmployee);

}


function addEmployee(){
    event.preventDefault();
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#salaryIn').val()
    }
    //console.log('new employee', employee);
    //console.log('hello');
    employeeArray.push(employee)
    showEmployeeList();
    removeEmployee();
    showTotalSalary(employee.annualSalary);
}

//show employee list to the DOM
function showEmployeeList(){
    let el = $('#element');
    $('.removeAll').val('');
    //console.log('showEmployeeList');
    for (let i = 0; i < employeeArray.length; i++) {
         el.append(`<tr>
         <th>${employeeArray[i].firstName}</th>
         <th>${employeeArray[i].lastName}</th>
         <th>${employeeArray[i].idNumber}</th>
         <th>${employeeArray[i].jobTitle}</th>
         <th>${employeeArray[i].annualSalary}</th>
         <th> 
         </tr>`);
    } //if(`${employeeArray[i].annualSalary}` > )
 }
 function removeEmployee(task){
     
     //console.log('remove employee');
 }

 function showTotalSalary(salary){
   salary = Number(salary);
    totalSalary += salary;
 console.log('showTotalSalary', totalSalary);
 $('#outputDiv').append(salary);
 }
 // another function that calculates the total and lists it on the DOM
 //employee.annual salary.


