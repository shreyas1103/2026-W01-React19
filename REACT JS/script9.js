//destructure object 
let employees = {
    name : "john",
    email : "john@example.com",
    skills : ["html","css","js" , "sql"],
    role : [
        {company : "google", position : "developer"},
        {company : "microsoft", position : "tester"},

    ]
}
// print last 3 skilss of employee
let _skills = [...employees.skills];   // is read as as spread operator used to copy array 
console.log(_skills);

// add on more skill to employee
employees = {...employees, skills : [...employees.skills , "react"]}  // is read as spread operator used to copy array and object
console.log(employees);

// replace tester with enginner
employees = {...employees, role : employees.role.map(item => item.position === "tester" ? {...item, position : "engineer"} : item)}  // is read as spread operator used to copy array and object
console.log(employees);

// another way 
employees = {...employees,role:[...employees.role , employees.role[1].position = "engineer"]}  // is read as spread operator used to copy array and object
console.log(employees);
