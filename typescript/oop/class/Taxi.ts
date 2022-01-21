import { Point } from "../interface/Point";
import { Vehicle } from "../interface/Vehicle";

export class Taxi implements Vehicle {
  constructor(private _location?: Point, private _color?: string) {}

  get location() {
    return this._location;
  }

  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("negatif sayı olamaz");
    }
    this._location = value;
  }

  get colors() {
    return this._color;
  }

  set colors(value: string) {
    this._color = value;
  }

  traveLTo(point: Point, color?: string): void {
    console.log(
      `taxi x point ${this._location.x} - y point ${this._location.y} dan x point ${point.x} - y point ${point.y} noktasına gidecek`
    );
    console.log(`color : ${color}`);
  }
}
