import { AvailableLanguages } from "../services/language/models/language"

/**
 * Check if the language is available
 * @param currentLanguage 
 * @returns boolean
 */
export const isLanguageAvailable = (currentLanguage: string): boolean => {
    return currentLanguage === AvailableLanguages.EN || currentLanguage === AvailableLanguages.EN;
}