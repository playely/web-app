interface TMDBConfigImages {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: string[],
    logo_sizes: string[],
    poster_sizes: string[],
    profile_sizes: string[],
    still_sizes: string[]
  }

export interface TMDBConfig {
    images: TMDBConfigImages,
    change_keys: string;
  }