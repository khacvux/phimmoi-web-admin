import AXIOS from "./axiosClient";
import axios from "axios";
import {
  addMovieModel,
  GetInfoMovieModel,
  GetMoviesByCategoryModel,
} from "../models/movie";

export const getVideoInfoAPI = async (id: string) => {
  try {
    const res = await axios.get(
      `https://mail.google.com/e/get_video_info?docid=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const addMovieAPI = async ({
  token,
  formdata,
}: {
  token: string;
  formdata: any;
}) => {
  try {
    return await AXIOS.post(`/add-movie`, formdata, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": `multipart/form-data`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const listMovieByCategory = async (data: GetMoviesByCategoryModel) => {
  try {
    const res = await AXIOS.get(`movie/category/${data.idCategory}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getInfoMovie = async (data: GetInfoMovieModel) => {
  try {
    const res = await AXIOS.get(`movie/info/${data.idMovie}`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
