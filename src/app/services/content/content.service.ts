import { Injectable } from '@angular/core';
import { ICarousel } from './models/carousel';
import { CardAspectRatio, CarouselType, ContentType } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  /**
   * Get all carousels of home
   * 
   * @returns 
   */
  getHomeCarousels(): Promise<ICarousel[]> {
    return Promise.resolve([
      {
        id: '1',
        title: 'Live Show',
        aspectRatio: CardAspectRatio.SQUARE,
        type: CarouselType.DESCRIPTION,
        content: [
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            shortDescription: 'Short description',
            title: 'The K- POP Live Show',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '2',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-1x1.png',
            shortDescription: 'Short description',
            title: 'The K- POP Live Show',
            type: ContentType.LIVE,
            currentWatchers: 175,
            isLive: true
          },
          {
            description: 'Long description',
            duration: '2 min',
            id: '3',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-1x1.png',
            shortDescription: 'Short description',
            title: 'Minions Official',
            type: ContentType.TRAILER,
            isLive: false,
          },
          {
            description: 'Long description',
            duration: '2h',
            id: '3',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image4-1x1.png',
            shortDescription: 'Short description',
            title: 'Kapil Sharma',
            type: ContentType.MOVIE,
            isLive: false,
          },
          {
            description: 'Long description',
            duration: '2h 9m',
            id: '4',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image4-1x1.png',
            shortDescription: 'Short description',
            title: 'Kapil Sharma Show',
            type: ContentType.SERIE,
            isLive: false,
          }
        ],
      },
      {
        id: '2',
        title: 'Most Popular',
        aspectRatio: CardAspectRatio.VERTICAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image4-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
        ]
      },
      {
        id: '3',
        title: 'Movies for you',
        aspectRatio: CardAspectRatio.HORIZONTAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-16x9.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-16x9.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-16x9.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false
          },
        ]
      }
    ]);
  }
}
