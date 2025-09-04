let x: unknown = 1;

if(typeof x == "number") {
    const result = x+1;
}
else if (typeof x == "string") {
    const result = x.length;
}