import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '@services/config.service';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {

  constructor(private configService: ConfigService){}

  transform(imagePath?: string, imageSize: string = 'original'): unknown {
    return `${this.configService.getConfig()?.images.base_url}${imageSize}${imagePath}`;
  }

}
