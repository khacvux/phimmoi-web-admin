import AXIOS from "./axiosClient";
import axios from "axios";
import { addMovieModel } from "../models/movie";

export const getVideoInfoAPI = async (id: string) => {
  try {
    const res = await axios.get(
      `https://mail.google.com/e/get_video_info?docid=${id}`, {
        headers: {
            "Content-Type": "application/json",
        }
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const addMovieAPI = async (data: addMovieModel) => {
    try {
        return await AXIOS.post(`/add-movie`, data)
    } catch (error) {
        return error
    }
}