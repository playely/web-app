import { IContent } from "@models/IContent";

export declare type AspectRatio = '16x9' | '2x3';

export interface IContentList {
    id: string;
    title: string;
    aspectRatio: AspectRatio;
    image?: string;
    contents: IContent[];
}