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
    let totalSalary = 0;

    for (let employee of department.employees) {
        totalSalary += employee.salary

if (employee.subordinates.length > 0 ) {
    totalSalary += calculateDepartmentSalary ({employees: employee.subordinates});
}

}

return totalSalary;
}

const engineeringDepartment = company.departments.find (dept => dept.departmentName === 'Engineering');
const totalSalary = calculateDepartmentSalary(engineeringDepartment);
console.log(`total sales for Sally's team: $${totalSalary}`);


//Task 3- Create a Function to Calculate the Total Salary for All Departments