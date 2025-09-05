interface Person {
    name: string;
    age: number;
    height?: number;

} 
interface Employee extends Person {
    employeeId: number;
}
const worker: Employee = {
    name: "Tim",
    age: 23,
   height: 175,
   employeeId: 10
    }
