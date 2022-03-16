import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PhotosNestjsModule} from "@luciddev/photos/nestjs";

@Module({
  imports: [PhotosNestjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
