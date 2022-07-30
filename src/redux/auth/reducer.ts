import { IAction } from "../../models/action";
import { userModel } from "../../models/auth";
import * as TYPES from "./constants";

export interface InitialStateModel {
  admin: userModel;
}

const initialState: InitialStateModel = {
  admin: {} as userModel,
};

const reducers = (state: InitialStateModel = initialState, action: IAction) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
      };

    case TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
      };

    case TYPES.SIGN_IN_FAILURE:
      console.log(action.payload);
      return {
        ...state,
      };

    case TYPES.SIGN_OUT:
      return {
        ...state,
        admin: {},
      };

    default:
      return state;
  }
};

export default reducers;
