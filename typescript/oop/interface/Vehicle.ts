import { Point } from "./Point";

export interface Vehicle {
  traveLTo(point: Point): void;
}
