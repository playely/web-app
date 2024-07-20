import { TMDBDetails } from "@models/tmdb/TMDBDetail";
import { getLogoPath, isSeries } from "./content.utils";
import { contentDetailsMock } from "../tests/data-mocks/content.mock";

describe("Content Utils", () => {
    describe("isSeries", () => {
        it("should return true if content is a series", () => {
            const result = isSeries(contentDetailsMock);
            expect(result).toBe(true);
        });

        it("should return false if content is not a series", () => {
            const content: TMDBDetails = { ...contentDetailsMock, media_type: "movie" };
            const result = isSeries(content);
            expect(result).toBe(false);
        });

        it("should return false if content is undefined", () => {
            const content: TMDBDetails | undefined = undefined;
            const result = isSeries(content);
            expect(result).toBe(false);
        });
    });

    describe("getLogoPath", () => {
        it("should return the logo file path for the specified language", () => {
            const content: TMDBDetails = contentDetailsMock;
            const result = getLogoPath(content);
            expect(result).toBe("/wGRt3aaq0iM5FTzmw2q1LPIPIP4.png");
        });

        it("should return an empty string if content is undefined", () => {
            const result = getLogoPath({} as TMDBDetails);
            expect(result).toBe("");
        });
    });
});