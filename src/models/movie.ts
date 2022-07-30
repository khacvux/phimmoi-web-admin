export interface movieModel {
    poster: File,
    name: string,
    description: string,
    category: string
}

// export interface infoMovieModel extends movieModel {
//     // idMovieDrive: string,
//     movieUrl: string
// }

export interface infoMovieModel {
    _id: string;
    name: string;
    posterUrl: string;
    movieUrl: string;
    duration: string | undefined;
    view: number | undefined;
    category: string | undefined;
    description: string;
  }

export interface addMovieModel extends movieModel {
    movieFile: any,
    token: string
}

export interface addMovieSagaModel {
    type: string,
    payload: addMovieModel
}

export interface GetMoviesByCategoryModel {
    token: string,
    idCategory: string
}

export interface GetInfoMovieModel { 
    token: string,
    idMovie: string,
}