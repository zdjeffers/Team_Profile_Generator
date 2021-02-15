const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(githubPage) {
        super (name, id, email);
        this.githubPage = githubPage;

        function getRole() {
            return "Engineer";
        }

        function getGithub() {
            return githubPage;
        }

        getName();

        getId();

        getEmail ();

        getRole();

        getGithub();
    }
}

module.exports = Engineer;