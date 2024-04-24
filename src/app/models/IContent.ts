import { ISeason } from "./ISeasons";

export interface IContent {
    id: number;
    uid: string | number;
    mediaType: string;
    image: string;
    backdropImage: string;
    title: string;
    titleImage?: string;
    description: string;
    isSeries: boolean;
    seasons?: ISeason[];
}