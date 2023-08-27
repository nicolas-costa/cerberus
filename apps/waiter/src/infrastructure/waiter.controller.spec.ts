import { Test, TestingModule } from '@nestjs/testing';
import { WaiterController } from './waiter.controller';
import { WaiterService } from '../application/waiter.service';

describe('WaiterController', () => {
  let waiterController: WaiterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WaiterController],
      providers: [WaiterService],
    }).compile();

    waiterController = app.get<WaiterController>(WaiterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(waiterController.getHello()).toBe('Hello World!');
    });
  });
});
