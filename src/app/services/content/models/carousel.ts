export enum CardAspectRatio {
    SQUARE = '1X1',
    VERTICAL = '2x3',
    HORIZONTAL = '16x9'
}

export enum CarouselType {
    DESCRIPTION, INNERCARD, OUTERCARD
}

export enum ContentType {
    LIVE, MOVIE, SERIE, TRAILER
}

export interface ICarousel {
    id: string;
    title: string;
    aspectRatio: CardAspectRatio;
    type: CarouselType;
    content: IContent[];
}

export interface IContent {
    id: string;
    title: string;
    type: ContentType;
    duration: string;
    description: string;
    shortDescription: string;
    image: string;
    currentWatchers?: number;
    isLive: boolean;
}

