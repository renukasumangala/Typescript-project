 class Person {
       protected name: string;
        constructor(name: string) {
            this.name = name;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
        
    }
    class Employee extends Person{
        callMe() {
            console.log(this.name);
        }
    }

    const p1 = new Person("Tim");
