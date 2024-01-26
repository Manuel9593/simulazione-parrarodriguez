export type Movie = {
    Title: string,
    Year: string | number,
    imdbID: string,
    Type: "movie" | "series" | "episode",
    Poster: string
}

export type MovieDetail = {
    Title:      string;
    Year:       string;
    Rated:      string;
    Released:   string;
    Runtime:    string;
    Genre:      string;
    Director:   string;
    Writer:     string;
    Actors:     string;
    Plot:       string;
    Language:   string;
    Country:    string;
    Awards:     string;
    Poster:     string;
    Ratings:    Rating[];
    Metascore:  string;
    imdbRating: string;
    imdbVotes:  string;
    imdbID:     string;
    Type:       "movie" | "series" | "episode";
    DVD:        string;
    BoxOffice:  string;
    Production: string;
    Website:    string;
    Response:   string;
}

export interface Rating {
    Source: string;
    Value:  string;
}
