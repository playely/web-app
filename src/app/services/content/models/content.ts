import { CardAspectRatio, CarouselType, ContentType } from "./types";

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
    duration: number;
    description?: string;
    shortDescription?: string;
    image: string;
    currentWatchers?: number;
    isLive: boolean;
    releaseYear: string;
    releaseDate: Date;
    tags: string[];
}

