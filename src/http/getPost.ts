import axios from "axios"
import { IArticle } from "../models/IArticle";
import { ITotalCategories } from "../models/ITotalCategories"

export const getPost = async (category: number | null, pageNumber, limit) => {
    const categories = category !== null ? `category=${category}` : ""
    const pagination = `page=${pageNumber}&limit=${limit}`
    const response = await axios.get<IArticle[]>(
        `https://62811cdf7532b4920f77b2db.mockapi.io/posts/?${categories}&${pagination}`
    );
    return response
};

export const getTotalCategories = async () => {
    const response = await axios.get<ITotalCategories[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/totalCategories`)
    return response
};
