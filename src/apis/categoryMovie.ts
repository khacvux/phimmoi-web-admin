import { IAction } from "../models/action";
import { addCategoryModel, removeCategoryModel } from "../models/categoryMovie";
import AXIOS from "./axiosClient";

const url = 'category/'


export const addCategoryAPI = async (data: any) => {
    const { name, token } = data
    try {
        const res =  await AXIOS.post(`${url}add`, { name }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })   
        return res     
    } catch (error) {
        return error
    }
}


export const getListCategoryAPI = async (token: string) => {
    try {
        const res = await AXIOS.get(`${url}list`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })     
        return res   
    } catch (error) {
        return error
    }
}

export const removeCategoryAPI = async (data: removeCategoryModel) => {
    const { token, _id } = data
    try {
        const res = await AXIOS.post(`${url}remove`, {
            _id
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })      
        return res
    } catch (error) {
        return error
    }
}