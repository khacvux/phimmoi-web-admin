import { combineReducers } from "redux";

import auth, { InitialStateModel as AuthInterface } from "./auth/reducer";
import movie, { InitialStateModel as MovieInterface } from "./movie/reducer";
import category, {
  InitialStateModel as CategoryInterface,
} from "./categoryMovie/reducer";

export interface RootReducerInterface {
    auth: AuthInterface,
    movie: MovieInterface,
    category: CategoryInterface
}

export default combineReducers<RootReducerInterface>({
  auth,
  movie,
  category,
});
