import { Module } from '@nestjs/common';
import {ImagesController} from "./controllers";
import {ImagesService} from "./services";
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [MulterModule.register({
    dest: './_temp',
  })],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [],
})
export class ImagesNestjsModule {}
