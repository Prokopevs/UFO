import axios from "axios";
import { IPosts } from "../models/IPosts";
import { ITotalCategories } from "../models/ITotalCategories";

export const getPost = async (category: number | null, id: number | null = null, pageNumber, limit) => {
    const categories = category !== null ? `category=${category}` : ""
    const pagination = id !== null ? "" : `page=${pageNumber}&limit=${limit}`
    console.log("category=" +category + " id=" + id + " pageNumber=" + pageNumber + " limit=" + limit)
    const response = await axios.get<IPosts[]>(
        `https://62811cdf7532b4920f77b2db.mockapi.io/posts/?${
            id !== null ? `id=${id}` : categories
        }&${pagination}`
    );
    return response
};

export const getTotalCategories = async () => {
    const response = await axios.get<ITotalCategories[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/totalCategories`)
    return response
};
