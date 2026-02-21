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
let _skills = employees.skills;
console.log(_skills.slice(-3));