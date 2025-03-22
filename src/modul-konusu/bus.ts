import { Point } from "./point";
import { Vehicle } from "./vehicle";


// Bus üstüne gelip tıklayınca balona tıklayıp interfaceli olana tıklarsan implementasyonları getirir.

export class Bus implements Vehicle{
    travelTo(point: Point): void {
        throw new Error("Method not implemented.");
    }


}