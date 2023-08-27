import { Injectable } from '@nestjs/common';

@Injectable()
export class WaiterService {
  getHello(): string {
    return 'Restaurant home page';
  }
}
