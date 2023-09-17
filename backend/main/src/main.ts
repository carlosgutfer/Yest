import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidateInputPipe} from './core/pipes/validate.pipe'
import * as express from 'express';

async function bootstrap() 
{
  const server = express();
  require("dotenv").config();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // parse requests of content-type - application/json
  app.use(express.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  
  app.enableCors ();

  app.setGlobalPrefix('api/v1');
  // para validar los inputs que llegan a nuestros endpoints
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3000);
}
bootstrap();
