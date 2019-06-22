$(document).ready(onReady);

let employeeArray = [];
let totalSalary = 0;

//intializes to the click, and pushes the employee list to the array.
function onReady() {
    console.log('jq');
$('#addItemButton').on('click', addEmployee);
//$('#element').on('click', '.delete', removeEmployee);
$('.element').on('click', '.delete', deleteMonthly);
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
    //removeEmployee();

}

//show employee list to the DOM
function showEmployeeList(){
    let totalSalary = 0;
    let el = $('.element');
    el.empty();
    $('.removeAll').val('');
    //console.log('showEmployeeList');
    for (let i = 0; i < employeeArray.length; i++) {
         el.append(`<tr>
         <td>${employeeArray[i].firstName}</td>
         <td>${employeeArray[i].lastName}</td>
         <td>${employeeArray[i].idNumber}</td>
         <td>${employeeArray[i].jobTitle}</td>
         <td>$ ${employeeArray[i].annualSalary}</td>
         <td><button class="delete">Delete</button></td>
         </tr>`); 
         totalSalary += Number(employeeArray[i].annualSalary);
         
    } showMonthlyTotal(totalSalary);//if(`${employeeArray[i].annualSalary}` > )
 }
//  function removeEmployee(event){
//     $(this).remove();
    
//     console.log('Clicked delete', $(this).parent().text());
//  }
//this function is showing the monthly cost to the list.
 function showMonthlyTotal(salary){
 let monthlySalary = Math.round(salary / 12);
 let el = $('#employeeOut');
 el.empty();
 el.append(`<td> Monthly Cost: $ ${monthlySalary}`);
    // if (monthlySalary < 20000) { //**** this if statement is not getting the correct input
    // el.append(`<li class= background-color: crimson>Monthly Cost ${monthlySalary}</li>`)
 //}
 //$('#employeeOut').append(monthlySalary);
 }
 // another function that calculates the total and lists it on the DOM
 //employee.annual salary.

 //function deletes the entire list.
function deleteMonthly(event) {
    $(this).closest('tr').remove();
}

