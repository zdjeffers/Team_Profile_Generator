const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;

        function getRole() {
            return "Manager";
        }

        function getOfficeNumber() {
            return officeNumber;
        }

        getName();

        getId();

        getEmail ();

        getRole();

        getOfficeNumber();
    }
}

module.exports = Manager;