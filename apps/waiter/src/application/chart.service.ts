import ChartPort from "./ports/chart.port";
import {Injectable} from "@nestjs/common";

@Injectable()
export default class ChartService {
    constructor(private readonly chart: ChartPort) {
    }

    addItemToChart(UUID: string) {
        this.chart.add(UUID)
    }
}
