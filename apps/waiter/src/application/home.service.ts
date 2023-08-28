import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {

  constructor() {
  }

  getMainPage(): string {
    return 'Restaurant main page';
  }
}
