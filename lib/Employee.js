// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;    
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee


// let empl = new Employee("Bob", 2, "bob@bob.com");
// let name = empl.getName()



// getName


// function getEmployeeData(){
//     let name = promt("what's your name")
//     let email = prompt("what's your email")
//     let id =0;
//     let role = prompt("What's your role"):
//     if (role == )
//     let emp = new Intern(name, id, email, school);

// }