import axios, { AxiosRequestConfig } from "axios";
import z from "zod";
import {
    defineFetchResponse,
    FetchResponse,
    validateResponse,
} from "../validation/validate";

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com',
    params: {
        key: `AIzaSyDSo8ewzkQCnp4MiHC7fsJfGyGDBLcASEU`,
    }
});


class ApiClient<T> {
    endpoint: string;
    schema: z.ZodSchema<T>;

    constructor(endpoint: string, schema: z.ZodSchema<T>) {
        this.endpoint = endpoint
        this.schema = schema
    }

    getAll = async (config?: AxiosRequestConfig): Promise<FetchResponse<T>> => {
        const response = await axiosInstance.get<unknown>(this.endpoint, config);
        // console.log('Books API Response: ', response.data);
        const fetchResponseSchema = defineFetchResponse(this.schema);
        // console.log('Fetch Response Schema: ', fetchResponseSchema);
        return validateResponse(fetchResponseSchema, response.data);
    }

    get = async (id: string): Promise<T> => {
        const response = await axiosInstance.get<unknown>(`${this.endpoint}/${id}`);
        // console.log('Book Detail API Response: ', response.data);
        const validation = this.schema.safeParse(response.data);
        if (!validation.success) {
            console.error("Validation error in GET:", validation.error);
            throw new Error("Invalid data structure received from the API.");
        }
        return validation.data;
    }
}

export default ApiClient;

/* 
    API Key: Google books
    AIzaSyDSo8ewzkQCnp4MiHC7fsJfGyGDBLcASEU
 */


