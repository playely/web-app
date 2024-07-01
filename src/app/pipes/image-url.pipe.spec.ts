import { configMockService } from '../tests/service-mocks/config-service.mock';
import { ImageUrlPipe } from './image-url.pipe';

describe('ImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageUrlPipe(configMockService);
    expect(pipe).toBeTruthy();
  });

  it('transforms "image.jpg" to "http://localhost:4200/assets/images/image.jpg"', () => {
    const pipe = new ImageUrlPipe(configMockService);
    configMockService['url'] = 'http://localhost:4200/assets/images/'; 
    expect(pipe.transform('image.jpg')).toBe('http://localhost:4200/assets/images/image.jpg');
  });
 
});
