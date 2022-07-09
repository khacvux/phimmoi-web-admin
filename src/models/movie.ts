export interface movieModel {
    poster: File,
    name: string,
    description: string,
    category: string
}

export interface infoMovieModel extends movieModel {
    // idMovieDrive: string,
    movieUrl: string
}

export interface addMovieModel extends movieModel {
    movieFile: any,
}

export interface addMovieSagaModel {
    type: string,
    payload: addMovieModel
}