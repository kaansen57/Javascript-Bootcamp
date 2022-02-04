let [a, b] = [1, 2];

console.log(a);
console.log(b);

let [c, d] = [1, [1, 2, 3, 4]];

console.log(c);
console.log(d);

let [firstName, ...rest] = ["kaan", 1, 2, 3, 4, 5, 6, 7];

console.log(firstName);
console.log(rest);

({ a, b, ...rest } = { a: 1, b: "kş", d: 1, e: 2, f: 3, z: 4, x: 5 });

const obj = {
  server: "localhost",
  port: "8080",
  timeout: 900,
};

const { server, port, timeout } = obj;

console.log(server);
console.log(port);

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const [wed, fri] = days;

console.log(wed, fri); //Monday /Tuesday
