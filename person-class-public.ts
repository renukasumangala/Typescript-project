 class Person {
       public name: string;
        constructor(name: string) {
            this.name = name;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
        
    }

    const p1 = new Person("Tim");
    p1.name = "Joye";
    