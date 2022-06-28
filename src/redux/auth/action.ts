import { IAction } from "../../models/action";
import { loginModel } from "../../models/auth";
import * as TYPES from "./constants";

export const login = (payload: loginModel): IAction => {
  return {
    type: TYPES.SIGN_IN,
    payload,
  };
};

export const loginSuccess = (payload: any): IAction => {
  return {
    type: TYPES.SIGN_IN_SUCCESS,
    payload,
  };
};

export const loginFail = (payload: any): IAction => {
  return {
    type: TYPES.SIGN_IN_FAILURE,
    payload,
  };
};

export const logout = (): IAction => {
  return{
    type:  TYPES.SIGN_OUT,
    payload: null 
  }
}