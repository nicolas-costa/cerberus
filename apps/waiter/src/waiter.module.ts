import { Module } from '@nestjs/common';
import { RestaurantController } from './infrastructure/restaurant.controller';
import { HomeService } from './application/home.service';
import {RedisChartRepository} from "./infrastructure/redis-chart.repository";
import ChartPort from "./application/ports/chart.port";

@Module({
  imports: [
  ],
  controllers: [RestaurantController],
  providers: [
    HomeService, {
      provide: ChartPort,
      useClass: RedisChartRepository
    }],
})
export class WaiterModule {}
