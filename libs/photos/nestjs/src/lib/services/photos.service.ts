import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotosService {
  getData(): { message: string } {
    return { message: 'Welcome to imagerezz!' };
  }
}
