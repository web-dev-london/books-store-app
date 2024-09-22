import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { BookDetail, bookDetailSchema } from "../validation/validate";
import ms from 'ms'


const apiClient = new ApiClient(`/books/v1/volumes`, bookDetailSchema);

const useBook = (id: string) => useQuery<BookDetail>({
    queryKey: ['book', id],
    queryFn: () => apiClient.get(id),
    staleTime: ms('24h'),// 24 hours
})

export default useBook;