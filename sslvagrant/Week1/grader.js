const readline = require("readline"); // Import the readline module to enable user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the name of the student?  ", function (name) {
    rl.question("What is the assignment's name? ? ", function (assign) {
        rl.question("What's your grade: ", function (grade) {

            this.grade = parseInt(grade);
            console.log(`The name of the student is ${name}`)
            console.log(`The name of the assignment is ${assign}`)
            

            if (this.grade < 60) {
                 (console.log("Grade: F"))
            }
            else if (this.grade >= 60 && grade <= 69) {
                 (console.log("Grade: D"))
            }
    
            else if (this.grade >= 70 && grade <= 79) {
                 (console.log("Grade: C"))
            }
            else if (this.grade >= 80 && grade <= 89) {
                 (console.log("Grade: B"))
            }
            else {
                 (console.log("Grade: A"))
            }
           

            rl.close();
        })


    });
});
