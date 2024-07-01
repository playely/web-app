import { TMDBDetails } from "../../models/tmdb/TMDBDetail";
import { TMDBResponse } from "../../models/tmdb/TMDBResponse";
import { TMDBSeason } from "../../models/tmdb/TMDBSeason";

export const contentMoviesMock: TMDBResponse = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 786892,
            "original_language": "en",
            "original_title": "Furiosa: A Mad Max Saga",
            "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
            "popularity": 5953.08,
            "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
            "release_date": "2024-05-22",
            "title": "Furiosa: A Mad Max Saga",
            "video": false,
            "vote_average": 7.716,
            "vote_count": 1459,
            "media_type": "movie",
            "images": {
                "backdrops": [],
                "logos": [],
                "posters": []
            }
        }
    ],
    "total_pages": 2019,
    "total_results": 40376,
    "title": "Best Movies"
};

export const contentSeriesMock: TMDBResponse = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "id": 94997,
            "original_language": "en",
            "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            "popularity": 3193.991,
            "poster_path": "/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
            "name": "House of the Dragon",
            "vote_average": 8.418,
            "vote_count": 4229,
            "media_type": "tv",
            images: {
                backdrops: [],
                logos: [],
                posters: []
            },
            title: "House of the Dragon"
        },
    ],
    "total_pages": 384,
    "total_results": 7668,
    "title": "Best Series"
}

export const contentTrendingMock: TMDBResponse = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "id": 94997,
            "original_language": "en",
            "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            "popularity": 3193.991,
            "poster_path": "/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
            "name": "House of the Dragon",
            "vote_average": 8.418,
            "vote_count": 4229,
            "media_type": "tv",
            images: {
                backdrops: [],
                logos: [],
                posters: []
            },
            title: "House of the Dragon"
        },
    ],
    "total_pages": 384,
    "total_results": 7668,
    "title": "Best of the day"
}

export const contentTop10Mock: TMDBResponse = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
            "genre_ids": [
                10765,
                18,
                10759
            ],
            "id": 94997,
            "original_language": "en",
            "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            "popularity": 3193.991,
            "poster_path": "/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
            "name": "House of the Dragon",
            "vote_average": 8.418,
            "vote_count": 4229,
            "media_type": "tv",
            images: {
                backdrops: [],
                logos: [],
                posters: []
            },
            title: "House of the Dragon"
        },
    ],
    "total_pages": 384,
    "total_results": 7668,
    "title": "Top 10"
}

export const contentDetailsMock: TMDBDetails = {
    "adult": false,
    title: "House of the Dragon",
    "backdrop_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
    "created_by": [
        {
            "id": 237053,
            "credit_id": "5db8d867a1d3320011e7ddf1",
            "name": "George R. R. Martin",
            "original_name": "George R. R. Martin",
            "gender": 2,
            "profile_path": "/1A7W0L9dZz0rCN1oj6h8YUvusdN.jpg"
        },
        {
            "id": 1167458,
            "credit_id": "5db8d8fe3faba000163a83cb",
            "name": "Ryan Condal",
            "original_name": "Ryan Condal",
            "gender": 2,
            "profile_path": ''
        }
    ],
    "genres": [
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10759,
            "name": "Action & Adventure"
        }
    ],
    "id": 94997,
    "name": "House of the Dragon",
    "original_language": "en",
    "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
    "popularity": 3193.991,
    "poster_path": "/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
    "seasons": [
        {
            "air_date": "2022-08-21",
            "episode_count": 53,
            "id": 309556,
            "name": "Specials",
            "overview": "",
            "poster_path": "/qVU4112Ob2ikHBu4VRC50MdWZcM.jpg",
            "season_number": 0,
            "vote_average": 0
        },
        {
            "air_date": "2022-08-20",
            "episode_count": 10,
            "id": 134965,
            "name": "Season 1",
            "overview": "",
            "poster_path": "/m7ta0kNg2ONvnBFF76miVvbWK1V.jpg",
            "season_number": 1,
            "vote_average": 7.9
        },
        {
            "air_date": "2024-06-16",
            "episode_count": 8,
            "id": 368014,
            "name": "Season 2",
            "overview": "",
            "poster_path": "/xhjADf5sslq7lbRjc50FgvIYIkT.jpg",
            "season_number": 2,
            "vote_average": 6.6
        }
    ],
    "tagline": "All must choose.",
    "vote_average": 8.419,
    "vote_count": 4226,
    "credits": {
        "cast": [
            {
                "adult": false,
                "gender": 2,
                "id": 136532,
                "known_for_department": "Acting",
                "name": "Matt Smith",
                "original_name": "Matt Smith",
                "popularity": 37.37,
                "profile_path": "/b3AYe7kkImkB35CoYwlUqHnJGF8.jpg",
                "character": "Prince Daemon Targaryen",
                "credit_id": "6352ee17a843c10091b281ff",
                "order": 0
            },
        ],
        "crew": [
            {
                "adult": false,
                "gender": 0,
                "id": 107926,
                "known_for_department": "Writing",
                "name": "Philippa Goslett",
                "original_name": "Philippa Goslett",
                "popularity": 2.2,
                profile_path: '',
                "credit_id": "666fe7a704d8756ea9ec186a",
                "department": "Production",
                "job": "Co-Executive Producer"
            },
        ]
    },
    "images": {
        "backdrops": [
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": '',
                "file_path": "/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
                "width": 3840
            },
        ],
        "logos": [
            {
                "aspect_ratio": 2.755,
                "height": 726,
                "iso_639_1": "en",
                "file_path": "/wGRt3aaq0iM5FTzmw2q1LPIPIP4.png",
                "width": 2000
            },
        ]
    },
    "recommendations": {
        "page": 1,
        "results": [
            {
                "backdrop_path": "/qBppESpY8e97WfPWVZiU0JdRXw.jpg",
                "id": 84773,
                "name": "The Lord of the Rings: The Rings of Power",
                "overview": "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
                "poster_path": "/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
                "media_type": "tv",
                "adult": false,
                "original_language": "en",
                "genre_ids": [
                    10759,
                    10765,
                    18
                ],
                "popularity": 277.474,
                "vote_average": 7.345,
                "vote_count": 2508,
                images: {
                    backdrops: [],
                    logos: [],
                    posters: []
                },
                title: "The Lord of the Rings: The Rings of Power"
            },
        ],
        "total_pages": 2,
        "total_results": 40,
        "title": "You may Also Like"
    },
    "similar": {
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/oZn86CExaTEh29vgd9JNiNsFSNL.jpg",
                "genre_ids": [
                    18
                ],
                "id": 130803,
                "original_language": "pt",
                "overview": "Adapted from the homonymous work by Rachel de Queiroz, it presents the saga of a woman against female submission in nineteenth-century patriarchal society.",
                "popularity": 18.962,
                "poster_path": "/cj6uHkx2AnB68qraRq0ONX6HKvm.jpg",
                "name": "Memorial de Maria Moura",
                "vote_average": 7.2,
                "vote_count": 4,
                "media_type": "tv",
                images: {
                    backdrops: [],
                    logos: [],
                    posters: []
                },
                title: "Memorial de Maria Moura"
            },
        ],
        "total_pages": 2222,
        "total_results": 44426,
        "title": "Similar to This"
    },
    "logo_path": "/wGRt3aaq0iM5FTzmw2q1LPIPIP4.png",
    "media_type": "tv"
};

export const contentSeasonMock: TMDBSeason = {
    episode_count: 10,
    "air_date": "2022-08-20",
    "episodes": [
        {
            "air_date": "2022-08-21",
            "episode_number": 1,
            "id": 1971015,
            "name": "The Heirs of the Dragon",
            "overview": "Viserys hosts a tournament to celebrate the birth of his second child. Rhaenyra welcomes her uncle Daemon back to the Red Keep.",
            "runtime": 66,
            "still_path": "/3oumSnkavc4pcMFvPbgWDUTclNb.jpg",
            "vote_average": 7.857,
            "vote_count": 133,
            "media_type": "episode",
            backdrop_path: '',
            images: {
                backdrops: [],
                logos: [],
                posters: []
            },
            title: "The Heirs of the Dragon"
        },
    ],
    "name": "Season 1",
    "overview": "",
    "id": 134965,
    "poster_path": "/m7ta0kNg2ONvnBFF76miVvbWK1V.jpg",
    "season_number": 1,
    "vote_average": 7.9
};

export const contentGenresMock: TMDBResponse = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 19,
    genres: [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        }
    ]
}