
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import Layout from "../pages/Layout"
import HomePage from "../pages/HomePage"
import BookDetailPage from "../pages/BookDetailPage"

const router = createBrowserRouter([
    // Layout
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'book/:id', element: <BookDetailPage /> },
            { path: '/*', element: <ErrorPage /> },
        ]
    }
])

export default router