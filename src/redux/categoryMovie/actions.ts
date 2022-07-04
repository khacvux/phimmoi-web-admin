import { IAction } from "../../models/action";
import { addCategoryModel, removeCategoryModel } from "../../models/categoryMovie";
import * as TYPES from "./constants";

export const addCategory = (payload: addCategoryModel): IAction => {
    return {
        type: TYPES.ADD_CATEGORY,
        payload
    }
};

export const addCategorySuccess = (): IAction => {
    return {
        type: TYPES.ADD_CATEGORY_SUCCESS,
        payload: null
    }
};

export const addCategoryFail = (payload: any): IAction => {
    return {
        type: TYPES.ADD_CATEGORY_FAILURE,
        payload
    }
};

export const getListCategory = (payload: any): IAction => {
    return {
        type: TYPES.GET_LIST_CATEGORY,
        payload
    }
};

export const getListCategorySuccess = (payload: any): IAction => {
    return {
        type: TYPES.GET_LIST_CATEGORY_SUCCESS,
        payload
    }
};

export const getListCategoryFail = (payload: any): IAction => {
    return {
        type: TYPES.GET_LIST_CATEGORY_FAILURE,
        payload
    }
};

export const removeCategory = (payload: removeCategoryModel): IAction => {
    return {
        type: TYPES.REMOVE_CATEGORY,
        payload
    }
};

export const removeCategorySuccess = (payload: string): IAction => {
    return {
        type: TYPES.REMOVE_CATEGORY_SUCCESS,
        payload
    }
};

export const removeCategoryFail = (payload: any): IAction => {
    return {
        type: TYPES.REMOVE_CATEGORY_FAILURE,
        payload
    }
};