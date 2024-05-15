import { IArticle } from "../models/IArticle";
import { ITotalCategories } from "../models/ITotalCategories"
import $api from "../http";

export const getPost = async (category: number | null, pageNumber, limit) => {
    const categories = category !== null ? `category=${category}` : ""
    const pagination = `page=${pageNumber}&limit=${limit}`
    const response = await $api.get<IArticle[]>(
        `/getPosts?${categories}&${pagination}`
    );
    return response
};

export const getTotalCategories = async () => {
    const response = await $api.get<ITotalCategories[]>(`/getTotalCount`)
    return response
};