import {Controller, Get, Param} from '@nestjs/common';

import { ImagesService } from '../services';

@Controller('images')
export class ImagesController {
  constructor(private readonly photosService: ImagesService) {}

  @Get("/:localUserId/images")
  getPhotos(@Param('localUserId') localUserId: string) {
    return this.photosService.getData();
  }
}
