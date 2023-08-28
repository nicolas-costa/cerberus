import {Injectable} from "@nestjs/common";
import  ChartPort from "../application/ports/chart.port";

@Injectable()
export class RedisChartRepository implements ChartPort {
    constructor() {
    }

    add(itemUUID: string): void {
    }

    remove(itemUUID: string): void {
    }

    clear(): void {
    }
}
