import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter()
  );

  // Enable CORS middleware
  app.use(cors({
    origin: 'http://localhost:8001', // Set the domain of your NextJS app
    credentials: true, // Enable credentials such as cookies and authorization headers
  }));

  // Enable session middleware
  app.use(
    session({
      secret: 'my-secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 300000000
      }
    }),
  );

  await app.listen(3000);
}
bootstrap();
