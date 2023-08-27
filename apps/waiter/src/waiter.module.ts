import { Module } from '@nestjs/common';
import { WaiterController } from './infrastructure/waiter.controller';
import { WaiterService } from './application/waiter.service';

@Module({
  imports: [],
  controllers: [WaiterController],
  providers: [WaiterService],
})
export class WaiterModule {}
