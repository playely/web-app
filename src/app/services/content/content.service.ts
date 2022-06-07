import { Injectable } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { AvailableLanguages } from '../language/models/language';
import { ICarousel, IContent } from './models/content';
import { CardAspectRatio, CarouselType, ContentType } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private languageService: LanguageService) { }

  /**
   * Get all carousels of home
   * 
   * @returns 
   */
  getHomeCarousels(): Promise<ICarousel[]> {
    const isEnglish = this.languageService.getCurrentLanguage().key === AvailableLanguages.EN;
    return Promise.resolve([
      {
        id: '1',
        title: 'Hero',
        aspectRatio: CardAspectRatio.SQUARE,
        type: CarouselType.HERO,
        content: [
          {
            duration: 9000,
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            title: isEnglish ? 'The K- POP Live Show' : 'K-POP Show en Vivo',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            duration: 9000,
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            title: isEnglish ? 'The K- POP Live Show' : 'K-POP Show en Vivo',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            duration: 9000,
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            title: isEnglish ? 'The K- POP Live Show' : 'K-POP Show en Vivo',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            duration: 9000,
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            title: isEnglish ? 'The K- POP Live Show' : 'K-POP Show en Vivo',
            type: ContentType.LIVE,
            currentWatchers: 150,
            isLive: true,
            releaseDate: new Date(),
            releaseYear: '2018',
            tags: []
          },
          {
            duration: 9000,
            id: '1',
            image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-1x1.png',
            title: isEnglish ? 'The K- POP Live Show' : 'K-POP Show en Vivo',
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
        title: isEnglish ? 'Live Show' : 'Shows en Vivo',
        aspectRatio: CardAspectRatio.SQUARE,
        type: CarouselType.DESCRIPTION,
        content: [
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
        title: isEnglish ? 'Most Popular' : 'Populares',
        aspectRatio: CardAspectRatio.VERTICAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
        id: '22',
        title: isEnglish ? 'Most Popular' : 'Super Populares',
        aspectRatio: CardAspectRatio.VERTICAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
        title: isEnglish ? 'Movies for you' : 'Películas para ti',
        aspectRatio: CardAspectRatio.HORIZONTAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
      },
      {
        id: '3',
        title: isEnglish ? 'Series for you' : 'Series para ti',
        aspectRatio: CardAspectRatio.HORIZONTAL,
        type: CarouselType.INNERCARD,
        content: [
          {
            description: 'Long description',
            duration: 9000,
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
            duration: 9000,
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
            duration: 9000,
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
    if (this.languageService.getCurrentLanguage().key === AvailableLanguages.EN) {
      return Promise.resolve({
        description: 'Bizli, is a 2018 Bangladeshi Superhero film directed by Iftakar Chowdhury, and produced by Bobstar Films. It stars Bobby as the protagonist and Indian actress Satabdi Roy as the antagonist. The film was released countrywide on . t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        duration: 9000,
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
    // Spanish
    return Promise.resolve({
      description: 'Bizli, es una película de superhéroes bangladesí de 2018 dirigida por Iftakar Chowdhury, y producida por Bobstar Films. Está protagonizada por Bobby como protagonista y la actriz india Satabdi Roy como antagonista. La película se estrenó en todo el país el . s un hecho establecido desde hace mucho tiempo que un lector se distrae del contenido legible de una página cuando mira su diseño. La razón de utilizar Lorem Ipsum es que tiene una distribución más o menos normal de las letras.',
      duration: 9000,
      id: '1',
      image: 'https://play-jolly-assets.s3.amazonaws.com/content/dummy/image1-16x9.png',
      title: 'Bijle',
      type: ContentType.SERIE,
      isLive: false,
      releaseDate: new Date(),
      releaseYear: '2018',
      tags: ['superheroes', 'acción', 'Bangladesh']
    });
  }

  /**
   * Get sugested carousel by id
   *
   * @param contentId 
   * @returns 
   */
  getSuggested(contentId: string): Promise<ICarousel> {
    const isEnglish = this.languageService.getCurrentLanguage().key === AvailableLanguages.EN;
    return Promise.resolve({
      id: '2',
      title: isEnglish ? 'Most Popular' : 'Populares',
      aspectRatio: CardAspectRatio.VERTICAL,
      type: CarouselType.INNERCARD,
      content: [
        {
          description: 'Long description',
          duration: 9000,
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
          duration: 9000,
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
          duration: 9000,
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
          duration: 9000,
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
    const isEnglish = this.languageService.getCurrentLanguage().key === AvailableLanguages.EN;
    return Promise.resolve({
      id: '3',
      title: isEnglish? 'Movies for you' : 'Películas para ti',
      aspectRatio: CardAspectRatio.HORIZONTAL,
      type: CarouselType.INNERCARD,
      content: [
        {
          description: 'Long description',
          duration: 9000,
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
          duration: 9000,
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
          duration: 9000,
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
    const isEnglish = this.languageService.getCurrentLanguage().key === AvailableLanguages.EN;
    return Promise.resolve({
      id: '3',
      title:  isEnglish ? 'Recent Search' : 'Búsquedas Recientes',
      aspectRatio: CardAspectRatio.HORIZONTAL,
      type: CarouselType.INNERCARD,
      content: [
        {
          description: 'Long description',
          duration: 9000,
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
          duration: 9000,
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
          duration: 9000,
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
