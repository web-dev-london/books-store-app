import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Review {
    _id: string
    reviewer: string
    rating: number
    comment: string
}



export interface FetchBooksResponse {
    id: string;
    title: string;
    author: string;
    image: string;
    rating: string;
}

const useBooks = () => {
    const [books, setBooks] = useState<FetchBooksResponse[]>([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const controller = new AbortController()
        const { signal } = controller
        apiClient.get<FetchBooksResponse[]>('search.php?query=atomic', { signal })
            .then((res) => setBooks(res.data))
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        return () => controller.abort()
    }, [])


    return { books, error }
}

export default useBooks;