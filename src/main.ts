import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(
    ` 🚀🚀🚀🚀 - ${new Date().toLocaleString()} - Federated Server Application is running at: ${await app.getUrl()}`,
  );
}
bootstrap();
