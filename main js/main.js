$(document).ready(onReady);

let employeeArray = [];
let totalSalary = 0;

//intializes to the click, and pushes the employee list to the array.
function onReady() {
    console.log('jq');
$('#addItemButton').on('click', addEmployee);
//$('#element').on('click', '.delete', removeEmployee);
$('.element').on('click', '.delete', deleteMonthly);
// $('.element').on('click', '.delete', deleteEmployeeFromArray);
}

// Function takes care of pushing the employees into the employeeArray.
//Also it runs the showEmployeeList().
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
    

}

//show employee list to the DOM and adds totalSalary to loop through the array. Shich is then carried to the showMonthlyTotal
function showEmployeeList() {
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

    }
    showMonthlyTotal(totalSalary); 
}

//this function is showing the monthly cost to the list.
function showMonthlyTotal(salary) {
    let monthlySalary = Math.round(salary / 12);
    let el = $('#employeeOut');
    el.empty();
    el.append(`<td> Monthly Cost: $ ${monthlySalary}`);
    if (monthlySalary > 20000) { //**** this if statement is not getting the correct input
        addColor(el);
       console.log('salary is at 20000 or above.');
        // el.append().parent().addClass(`<td class=addcolor: crimson>Monthly Cost ${monthlySalary}</td>`)
    }
 //$('#employeeOut').append(monthlySalary);
 }
function addColor(event) {
    let el = $('#employeeOut');
    el.addClass('addcolor');
    // console.log(`add color is running.`);
    // $(this).parent().addClass('addcolor');
}

 //function deletes the list.
function deleteMonthly(event) {
    $(this).closest('tr').remove();
 
}

// function deleteEmployeeFromArray(event) {
//     let el = $('.element');
//     el.empty();
//     // trying to use this if statement to remove the item from the delete section.
//     if (deleteMonthly) {
//         console.log('if statement in deletemonthly');
//         $(this).closest('tr');
//     }
// }
