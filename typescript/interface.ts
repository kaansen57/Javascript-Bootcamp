interface Point{
    x: number,
    y:number
}
interface Passenger{
    name: string,
    identifyNumber: string,
    phone:string
}
interface Vehicle{
    // currentLocation: {
    //     x: number,
    //     y:number
    // }
    currentLocation: Point,
    traveLTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger) :void;
    removePassenger(passenger: Passenger) :void;
}