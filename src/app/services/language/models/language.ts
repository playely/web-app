export enum AvailableLanguages {
    EN = 'en',
    ES = 'es',
}
export interface ILanguage {
    key: AvailableLanguages;
    name: string;
}