import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';
import { HomeService } from '../application/home.service';

describe('RestaurantController', () => {
  let restaurantController: RestaurantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [HomeService],
    }).compile();

    restaurantController = app.get<RestaurantController>(RestaurantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(restaurantController.getHome()).toBe('Hello World!');
    });
  });
});
