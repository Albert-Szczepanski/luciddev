import {Controller, Get, Param} from '@nestjs/common';

import { PhotosService } from '../services';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get("/:localUserId/images")
  getPhotos(@Param('localUserId') localUserId: string) {
    return this.photosService.getData();
  }
}
