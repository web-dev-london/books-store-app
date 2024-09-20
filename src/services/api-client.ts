import axios, { AxiosRequestConfig } from "axios";
import { defineFetchResponse, FetchResponse } from "../validation/validate";
import { fromZodError } from "zod-validation-error";
import z from "zod";

const axiosInstance = axios.create({
    // /books/v1/volumes
    baseURL: 'https://www.googleapis.com',
    params: {
        key: `AIzaSyDSo8ewzkQCnp4MiHC7fsJfGyGDBLcASEU`,
    }
});

export const apiClient = axios.create({
    baseURL: 'https://www.googleapis.com',
    params: {
        key: `AIzaSyDSo8ewzkQCnp4MiHC7fsJfGyGDBLcASEU`,
    }
});

const validateResponse = <T>(responseSchema: z.ZodSchema<FetchResponse<T>>, data: unknown): FetchResponse<T> => {
    const validation = responseSchema.safeParse(data);
    if (!validation.success) {
        console.log(fromZodError(validation.error));
        throw new Error(`Invalid data strcucture received from the API: ${fromZodError(validation.error)}`);
    }
    return validation.data
}


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
}

export default ApiClient;

/* 
    API Key: Google books
    AIzaSyDSo8ewzkQCnp4MiHC7fsJfGyGDBLcASEU
 */


