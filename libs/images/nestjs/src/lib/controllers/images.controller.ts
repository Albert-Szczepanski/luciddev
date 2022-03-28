import {Controller, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { ImagesService } from '../services';
import {FileInterceptor} from "@nestjs/platform-express";
import {Express} from "express"
import { Multer } from 'multer';

@Controller('images')
export class ImagesController {
  constructor(private readonly photosService: ImagesService) {}

  @Post('/:localUserId/saveImage')
  @UseInterceptors(FileInterceptor('file'))
  saveImage(@Param('localUserId') localUserId: string, @UploadedFile() file: Express.Multer.File) {
    return this.photosService.saveImages(localUserId, file)
  }
}
