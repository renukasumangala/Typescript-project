function sum(...numbers: number[]) {
return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3);
sum();
sum(1, 2, 72,27,27,27);

