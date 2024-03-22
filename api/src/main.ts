import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  // Todo: maybe not ideal/wouldn't be set up like this for production (e.g.
  // would consider some env var instead), but for my dev setup, I believe I
  // need to enable CORS:
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
