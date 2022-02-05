class Person6{
    constructor(name) {
        this.name = name;
    }

    static connectionTimeout() {
        //instance üzerinden erişemem 
        //direkt olarak sınıf üzerinden erişemem gerek
        return 1000;
    }
}

var person6 = new Person6();
person6.name = "kaan";
console.log(person6);
console.log(Person6.connectionTimeout());


class Point{
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distanceCalculate(a, b) {
        console.log(b.x);
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

let point1 = new Point(10, 10);
let point2 = new Point(20, 20);

console.log(Point.distanceCalculate(point1,point2));