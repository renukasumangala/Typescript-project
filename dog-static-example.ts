class Dog {
    static instanceCount: number = 0;
    name: string;

    constructor(name: string) {
        Dog.instanceCount++;
        this.name = name;
    }
    static decreaseCount() {
        this.instanceCount--;
    }
}

const dog1 = new Dog("Tim");
console.log(Dog.instanceCount);

const dog2 = new Dog("Joe");


console.log(Dog.instanceCount);
Dog.decreaseCount();
console.log(Dog.instanceCount);