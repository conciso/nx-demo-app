/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  const port = environment.api_port;
  await app.listen(port, () => {
    Logger.log(
      `Listening at ${environment.api_url}:${environment.api_port}/${globalPrefix}`
    );
  });
}
bootstrap();
