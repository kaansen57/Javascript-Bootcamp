"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bus_1 = require("./class/Bus");
var Taxi_1 = require("./class/Taxi");
var taxi_1 = new Taxi_1.Taxi({ x: 5, y: 15 });
var taxi_2 = new Taxi_1.Taxi({ x: 15, y: 15 }, "red");
var bus_1 = new Bus_1.Bus({ x: 0, y: 20 }, 'blue');
console.log("bus location : " + bus_1.colors);
var location1 = { x: 100, y: 20 };
var location2 = { x: 0, y: 20 };
taxi_1.location = { x: -12, y: -12 };
taxi_1.traveLTo(location1);
taxi_2.traveLTo(location2, taxi_2.colors);
