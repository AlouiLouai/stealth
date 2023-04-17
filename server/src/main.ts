import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import { serverConfig } from './config/server.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configure the server port
  const { port } = serverConfig();
  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}`);
  });
}
bootstrap();
