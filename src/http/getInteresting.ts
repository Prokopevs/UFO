import axios from "axios";
import { IInteresting } from "../models/IInteresting";

export const getInteresting = async () => {
    const response = await axios.get<IInteresting[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/interesting`)
    return response
};