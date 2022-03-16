import { Module } from '@nestjs/common';
import {PhotosController} from "./controllers";
import {PhotosService} from "./services";

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  exports: [],
})
export class PhotosNestjsModule {}
