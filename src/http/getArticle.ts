import axios from "axios"
import { IArticle } from "../models/IArticle"


export const getArticle = async (id: number ) => {
    const response = await axios.get<IArticle>(
        `https://62811cdf7532b4920f77b2db.mockapi.io/posts/${id}`
    );
    return response
};