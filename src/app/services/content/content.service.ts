import { Injectable } from '@angular/core';
import { ICarousel, IContent } from './models/carousel';
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
        title: 'Hero',
        aspectRatio: CardAspectRatio.SQUARE,
        type: CarouselType.HERO,
        content: [
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            shortDescription: 'Bizli, is a 2018 Bangladeshi Superhero film directed by Iftakar Chowdhury, and produced by Bobstar Films. It stars Bobby as the protagonist and Indian actress Satabdi Roy as the antagonist.',
            title: 'The K- POP Live Show',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          }
        ]
      },
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
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image4-2x3.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
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
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-16x9.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            description: 'Long description',
            duration: '2 hrs',
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-16x9.png',
            shortDescription: 'Short description',
            title: 'Wandavision',
            type: ContentType.SERIE,
            isLive: false,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
        ]
      }
    ]);
  }

  /**
   * Get content by id
   *
   * @param contentId 
   * @returns 
   */
  getContent(contentId: string): Promise<IContent> {
    return Promise.resolve({
      description: 'Bizli, is a 2018 Bangladeshi Superhero film directed by Iftakar Chowdhury, and produced by Bobstar Films. It stars Bobby as the protagonist and Indian actress Satabdi Roy as the antagonist. The film was released countrywide on . t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      duration: '2 hrs 35min',
      id: '1',
      image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-16x9.png',
      shortDescription: 'Short description',
      title: 'Bijle',
      type: ContentType.SERIE,
      isLive: false,
      releaseDate: new Date(),
      releaseYear: '2018',
      tags: ['superhero', 'action', 'Bangladesh']
    });
  }

  /**
   * Get sugested carousel by id
   *
   * @param contentId 
   * @returns 
   */
  getSuggested(contentId: string): Promise<ICarousel> {
    return Promise.resolve({
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
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-2x3.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-2x3.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image4-2x3.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
      ]
    });
  }

  /**
   * Get related carousel by id
   * @param contentId 
   * @returns 
   */
  getRelated(contentId: string): Promise<ICarousel> {
    return Promise.resolve({
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
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-16x9.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-16x9.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
      ]
    });
  }

  /**
   * Get recent searches
   * @param contentId 
   * @returns 
   */
   getRecentSeaches(): Promise<ICarousel> {
    return Promise.resolve({
      id: '3',
      title: 'Recent Search',
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
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image2-16x9.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
        {
          description: 'Long description',
          duration: '2 hrs',
          id: '1',
          image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image3-16x9.png',
          shortDescription: 'Short description',
          title: 'Wandavision',
          type: ContentType.SERIE,
          isLive: false,
          releaseDate: new Date(),
          releaseYear: '2018',
          tags: []
        },
      ]
    });
  }
}
