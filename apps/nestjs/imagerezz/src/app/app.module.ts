import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ImagesNestjsModule} from "@luciddev/images/nestjs";

@Module({
  imports: [ImagesNestjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
