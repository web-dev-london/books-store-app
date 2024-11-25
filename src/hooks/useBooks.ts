import { useQuery } from "@tanstack/react-query";
import { Book, bookSchema, FetchResponse } from "../validation/validate";
import ApiClient from "../services/api-client";
import useBookQueryStore from "../store";
import ms from 'ms'


const apiClient = new ApiClient(`/books/v1/volumes`, bookSchema);

const useBooks = () => {
  const { bookQuery } = useBookQueryStore();

  const startIndex = (bookQuery.page - 1) * bookQuery.limit;

  return useQuery<FetchResponse<Book>>({
    queryKey: ['books', bookQuery],
    queryFn: () => {
      return apiClient.getAll({
        params: {
          q: bookQuery.search,
          filter: bookQuery.filter,
          startIndex,
          maxResults: bookQuery.limit,
          orderBy: bookQuery.orderBy,
        }
      })
    },
    staleTime: ms('24h'),// 24 hours
  })
}

export default useBooks;






/*
https://www.googleapis.com/books/v1/volumes?q=atomic-habits
 */





// import { useQuery } from "@tanstack/react-query";
// import ApiClient from "../services/api-client";
// import { bookSchema } from "../validation/validate";
// import ms from 'ms';


// const apiClient = new ApiClient(`?q=atomic-habits`, bookSchema);


// const useBooks = () => useQuery({
//     queryKey: ['books'],
//     queryFn: apiClient.getAll,
//     staleTime: ms('24h'),// 24 hours
// })


// export default useBooks;