import { Bus } from "./class/Bus";
import { Taxi } from "./class/Taxi";


const taxi_1: Taxi = new Taxi({ x: 5, y: 15 });
const taxi_2: Taxi = new Taxi({ x: 15, y: 15 }, "red");
const bus_1: Bus = new Bus({ x: 0, y: 20 }, 'blue');

console.log("bus location : " + bus_1.colors);
const location1 = { x: 100, y: 20 };
const location2 = { x: 0, y: 20 };
taxi_1.location = { x: -12, y: -12 };//error
taxi_1.traveLTo(location1);
taxi_2.traveLTo(location2, taxi_2.colors);
