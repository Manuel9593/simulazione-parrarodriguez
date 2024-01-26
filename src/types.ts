export type Movie = {
    Title: string,
    Year: string | number,
    imdbID: string,
    Type: "movie" | "series" | "episode",
    Poster: string
}