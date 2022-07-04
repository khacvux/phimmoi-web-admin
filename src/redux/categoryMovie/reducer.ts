import { IAction } from "../../models/action";
import { categoryModel } from "../../models/categoryMovie";
import * as TYPES from "./constants";

const initialState = {
  listCategory: [] as any,
};

const reducers = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TYPES.ADD_CATEGORY:
      return state;

    case TYPES.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
      };

    case TYPES.ADD_CATEGORY_FAILURE:
      console.log(action.payload);
      return state;

    case TYPES.GET_LIST_CATEGORY:
      return state;

    case TYPES.GET_LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategory: action.payload,
      };

    case TYPES.GET_LIST_CATEGORY_FAILURE:
      console.log(action.payload);
      return state;

    case TYPES.REMOVE_CATEGORY:
      return state;

    case TYPES.REMOVE_CATEGORY_SUCCESS:
      const newList = [...state.listCategory];
      newList.splice(
        newList.findIndex((item) => {
          return item._id == action.payload;
        }),
        1
      );
      return {
        ...state,
        listCategory: newList,
      };

    case TYPES.REMOVE_CATEGORY_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default reducers;
