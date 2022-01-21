"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                console.log("hata");
                throw new Error("negatif sayı olamaz");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Taxi.prototype, "colors", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Taxi.prototype.traveLTo = function (point, color) {
        console.log("taxi x point ".concat(this._location.x, " - y point ").concat(this._location.y, " dan x point ").concat(point.x, " - y point ").concat(point.y, " noktas\u0131na gidecek"));
        console.log("color : ".concat(color));
    };
    return Taxi;
}());
exports.Taxi = Taxi;
