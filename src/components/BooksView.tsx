import useBooks from "../hooks/useBooks"


const BooksView = () => {
    const { books, error } = useBooks()
    void error
    console.log('Books', books);

    return (
        <div>
            {error && <p>{error}</p>}
            {books.map((book) => {
                return (
                    <div key={book._id}>
                        <h1>{book.title}</h1>
                        <p>{book.author}</p>
                        <p>{book.genre}</p>
                        <p>{book.summary}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BooksView
