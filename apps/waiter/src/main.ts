import { NestFactory } from '@nestjs/core';
import { WaiterModule } from './waiter.module';

async function bootstrap() {
  const app = await NestFactory.create(WaiterModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
