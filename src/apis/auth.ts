import { loginModel } from "../models/auth";
import AXIOS from "./axiosClient";


export const loginAPI = async (data: loginModel) => {
    try {
        const res =  await AXIOS.post(`admin/login`, data);
        console.log(res.data)
        return res;
    } catch (error) {
        return error
    }
}
