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
}

class Student extends Person {
    constructor (name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
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


const dan = new Instructor("Dan", 30, "SF", "UI", "javaScript", "I love Cats")
const jarred = new Student("Jarred", 30, "NJ", "Beer", "WEB20", ["Javascript", "Python", "MongoDB"])
const isaac = new ProjectManager("Isaac", 27, "CA", "React", "Great job!", "webXX", "Josh");
console.log(dan.demo("React"));
console.log(dan.grade(jarred, "Sabremetrics"))
console.log(jarred.listsSubjects());
console.log(jarred.PRAssignment("Javascript"));
console.log(jarred.sprintChallenge("Gym"));
console.log(isaac.standUp("web20_sprint3"));
console.log(isaac.debugsCode(jarred, "HTML"));