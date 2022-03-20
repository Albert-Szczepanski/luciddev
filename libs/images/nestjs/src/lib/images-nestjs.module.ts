import { Module } from '@nestjs/common';
import {ImagesController} from "./controllers";
import {ImagesService} from "./services";

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [],
})
export class ImagesNestjsModule {}
