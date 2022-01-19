import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const port = process.env.SERVER_LISTEN_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(port), () => {
    console.log(`server running on port ${port}`);
  })
}
bootstrap();
