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