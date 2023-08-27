import { Controller, Get } from '@nestjs/common';
import { WaiterService } from '../application/waiter.service';

@Controller()
export class WaiterController {
  constructor(private readonly waiterService: WaiterService) {}

  @Get()
  getHello(): string {
    return this.waiterService.getHello();
  }
}
