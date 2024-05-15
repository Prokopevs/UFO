import { IArticle } from "../models/IArticle"
import $api from "../http";

export const getArticle = async (id: number ) => {
    const response = await $api.get<IArticle>(
        `getPost/${id}`
    );
   
    return response
};