"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
var Bus = /** @class */ (function () {
    function Bus(location, color) {
        this._location = location;
        this._color = color;
    }
    Object.defineProperty(Bus.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("negatif sayı olamaz");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bus.prototype, "colors", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Bus.prototype.traveLTo = function (point, color) {
        console.log("taxi x point ".concat(this._location.x, " - y point ").concat(this._location.y, " dan x point ").concat(point.x, " - y point ").concat(point.y, " noktas\u0131na gidecek"));
        console.log("color : ".concat(color));
    };
    return Bus;
}());
exports.Bus = Bus;
