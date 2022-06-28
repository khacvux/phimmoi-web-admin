export interface movieModel {
    image: File,
    name: string,
    description: string,
}

export interface infoMovieModel extends movieModel {
    idMovieDrive: string,
}

export interface addMovieModel extends movieModel {
    videoInfo: any,
}