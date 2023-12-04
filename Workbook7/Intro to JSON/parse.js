let str = `{
    "title": "Web Designer",
    "startDate": "October 2022",
    "company": "AT&T",
    "minSalary": 52000,
    "maxSalary": 86000
}`;

// To convert a JSON string back into a JavaScript object
let job = JSON.parse(str);
console.log(job.title);
console.log(job.company);