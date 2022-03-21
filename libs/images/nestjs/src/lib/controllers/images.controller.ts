import {Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { ImagesService } from '../services';
import {FileInterceptor} from "@nestjs/platform-express";
import {Express} from "express"
import { Multer } from 'multer';

type File = Express.Multer.File;

@Controller('images')
export class ImagesController {
  constructor(private readonly photosService: ImagesService) {}

  @Get("/:localUserId/images")
  getPhotos(@Param('localUserId') localUserId: string) {
    return this.photosService.getData();
  }


  @Post('/:localUserId/saveImage')
  @UseInterceptors(FileInterceptor('file'))
  saveImages(@Param('localUserId') localUserId: string, @UploadedFile() file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return this.photosService.saveImages(localUserId, file)
  }
}
