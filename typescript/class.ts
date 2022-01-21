interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  traveLTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(currentLocation?: Point, color?: string) {
    this.currentLocation = currentLocation;
    this.color = color;
  }
  currentLocation: Point;
  color: string;
  traveLTo(point: Point,color?:string): void {
      console.log(`taxi x point ${point.x} - y point ${point.y}`);
      console.log(`color : ${color}`);
      
  }
}

const taxi_1: Taxi = new Taxi({ x: 5, y: 15 });
const taxi_2: Taxi = new Taxi({ x: 5, y: 15 },'red');
const taxi_3: Taxi = new Taxi();
// taxi1.currentLocation = { x: 2, y: 10 };
taxi_1.traveLTo(taxi_1.currentLocation);
taxi_2.traveLTo(taxi_2.currentLocation, taxi_2.color);
