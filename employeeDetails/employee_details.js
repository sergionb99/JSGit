const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java' },
    //... More employee records can be added here
  ];

function displayEmployees() {
     // Function to display all employees
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`The total salary is ${totalSalaries}$`);
}
function displayHREmployees() {
    const hrEmployees = employees.filter((employee) => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
function findEmployeeById(id) {
    const employeeFind = employees.find((employee) => employee.id === id);
    if (employeeFind) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employeeFind.id}: ${employeeFind.name}: ${employeeFind.name} - ${employeeFind.department} - $${employeeFind.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = `<p>There is no element with the ID ${id}</p>`;
    }
}
function findEmployeeBySpecialization(specialization) {
    const employeeBySpecialization = employees.find((employee) => employee.specialization === specialization);
    if (employeeBySpecialization) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employeeBySpecialization.id}: ${employeeBySpecialization.name}: ${employeeBySpecialization.name} - ${employeeBySpecialization.department} - $${employeeBySpecialization.salary} - ${employeeBySpecialization.specialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = `<p>There is no element with the specialization ${specialization}</p>`;
    }
}