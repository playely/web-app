import { IContent } from "@models/IContent";

export interface IContentList {
    id: string;
    title: string;
    image?: string;
    contents: IContent[];
}