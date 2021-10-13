// create class using standard declaration
class Student{
    constructor(name, rollNo, section, department){
        this.name = name;
        this.rollNo = rollNo;
        this.section = section;
        this.department = department;
    }

    getRollNo(){
        return this.rollNo;
    }
}

var sandeep = new Student('sandeep', '202126', 'A', 'CSE')
console.log(sandeep, sandeep.getRollNo())

// JSON
var raghava = {
    name: 'sandeep',
    rollNo: '202126',
    section: 'A',
    department: 'CSE'
}

console.log(raghava)

console.log(raghava == sandeep, raghava === sandeep)