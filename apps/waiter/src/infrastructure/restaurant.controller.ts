import {Controller, Get, Render} from '@nestjs/common';
import { HomeService } from '../application/home.service';

@Controller()
export class RestaurantController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('index')
  getHome(): Object {
    return { message: this.homeService.getMainPage() };
  }

  @Get()
  @Render('product')
  getProduct(): Object {
    return { product: "produto" }
  }
}
