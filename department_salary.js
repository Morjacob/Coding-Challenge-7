//Task 1- Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Sally',
                    salary: 10000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates:[
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
    departmentName:'Sales',
    employees: [
        {
            name: 'Eve',
            salary: 85000,
            subordinates: [
                {
                    name: 'frank',
                    salary: 85000,
                    subordinates: []
                
                }
            ]
        },
        { 
            name: 'Grace',
            salary: 95000,
            subordinates: []
        
             }
            ]
        } 
    ]  
};



//Task 2- Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary (department) {
    let totalSalary = 0; //initializing with a salary of 0

//using a loop to iterate over the department and get the employee salary
    for (let employee of department.employees) {
        totalSalary += employee.salary

//looks at subordinates and calculates the total salary for them
if (employee.subordinates.length > 0 ) {
    totalSalary += calculateDepartmentSalary ({employees: employee.subordinates});
}

}

return totalSalary;
}

const engineeringDepartment = company.departments.find (dept => dept.departmentName === 'Engineering');
const totalSalary = calculateDepartmentSalary(engineeringDepartment);
console.log(`total Salary for the engineering department: $${totalSalary}`);




//Task 3- Create a Function to Calculate the Total Salary for All Departments

 function calculateCompanySalary (company) {
    let totalCompanySalary = 0 //initialize with a salary of 0

    //loop to iterates over departments and calculate total salary
    for (let department of company.departments) {
        totalCompanySalary += calculateDepartmentSalary (department); 

    }
    return totalCompanySalary;

 }
 const companyTotalSalary = calculateCompanySalary (company);
 console.log (`Total salary for all departments $${companyTotalSalary} `)