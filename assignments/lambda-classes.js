// CODE here for your Lambda Classes
class Person {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
        speak() {
            return (`Hello my name is ${this.name}, I am from ${this.location}.`)
        }   
    }

class Instructor extends Person {
    constructor (name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
        }
        demo(subject) {
            return (`Today we are learning about ${subject}.`)
        }
        grade(student, subject) {
            return (`${student.name} receives a perfect score on ${subject}.`)
        }
        reviewSprint(student) {
            Object.defineProperty(student, "grade" , {value: Math.round(Math.random()*100)});
            return (`${this.name} has reviewed ${student.name}'s sprint and their grade is now ${student.grade}.`)
        }
}

class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects, grade) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
        listsSubjects() {
            return (new Intl.ListFormat().format(this.favSubjects))
        }
        PRAssignment(subject) {
            return (`${this.name} has submitted a PR for ${subject}.`)
        }
        sprintChallenge(subject) {
            return (`${this.name} has begun sprint challenge on ${subject}.`)
        }
        graduate() {
            if (this.grade >= 70) {
                return (`${this.name} has a passing score and is ready to graduate!`)
            } else return (`${this.name} is not ready to graduate and needs to complete some better assignments!`)
        }
    }
class ProjectManager extends Instructor {
    constructor (name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
        standUp(channel) {
            return (`${this.name} announces to ${channel}, @${channel} standby time!`)
        }
        debugsCode(student, subject) {
            return (`${this.name} debugs ${student.name}'s code on ${subject}.`)
        }
}


const dan = new Instructor("Dan", 30, "SF", "UI", "javaScript", "If you can do it, you will get paid to do it.")
const jarred = new Student("Jarred", 30, "NJ", "Beer", "WEB20", ["Javascript", "Python", "MongoDB"], 85)
const isaac = new ProjectManager("Isaac", 27, "CA", "React", "Great job!", "webXX", "Josh");
console.log(dan.speak());
console.log(dan.demo("React"));
console.log(dan.grade(jarred, "Sabremetrics"))
console.log(jarred.speak());
console.log(jarred.listsSubjects());
console.log(jarred.PRAssignment("Javascript"));
console.log(jarred.sprintChallenge("Gym"));
console.log(isaac.speak());
console.log(isaac.demo("CSS"));
console.log(isaac.grade(jarred, "NodeJS"))
console.log(isaac.standUp("web20_sprint3"));
console.log(isaac.debugsCode(jarred, "HTML"));
console.log(isaac.reviewSprint(jarred));
console.log(isaac.reviewSprint(jarred));
console.log(jarred.graduate())