import {Controller, Get, Render} from '@nestjs/common';
import { WaiterService } from '../application/waiter.service';

@Controller()
export class WaiterController {
  constructor(private readonly waiterService: WaiterService) {}

  @Get()
  @Render('index')
  getHello(): Object {
    return { message: this.waiterService.getHello() };
  }
}
