import { IInteresting } from "../models/IInteresting";
import $api from "../http";

export const getInteresting = async () => {
    const response = await $api.get<IInteresting[]>(`/getInteresting`)
    return response
};