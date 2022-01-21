var Taxi = /** @class */ (function () {
    function Taxi(currentLocation, color) {
        this.currentLocation = currentLocation;
        this.color = color;
    }
    Taxi.prototype.traveLTo = function (point, color) {
        console.log("taxi x point ".concat(point.x, " - y point ").concat(point.y));
        console.log("color : ".concat(color));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 5, y: 15 });
var taxi_2 = new Taxi({ x: 5, y: 15 }, 'red');
var taxi_3 = new Taxi();
// taxi1.currentLocation = { x: 2, y: 10 };
taxi_1.traveLTo(taxi_1.currentLocation);
taxi_2.traveLTo(taxi_2.currentLocation, taxi_2.color);
