import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Book {
    _id: string
    title: string
    author: string
    genre: string
    summary: string
}

export interface FetchBooksResponse {
    books: Book[]
}

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const controller = new AbortController()
        const { signal } = controller

        apiClient.get<FetchBooksResponse>('/getall-books', { signal })
            .then((res) => setBooks(res.data.books))
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

        return () => controller.abort()
    }, [])


    return { books, error }
}

export default useBooks;