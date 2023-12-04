let job = {
    title: "Web Designer",
    startDate: "October 2022",
    company: "AT&T",
    minSalary: 52000,
    maxSalary: 86000
};

// Changes the object to a string
let str = JSON.stringify(job);
console.log(str);


// Filter can also used so that it only includes the properties specified
let filter = ["title", "company"];
let strFiltered = JSON.stringify(job, filter);
console.log(strFiltered);