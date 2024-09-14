import { Stack } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";


const BooksView = () => {
    const { books, error } = useBooks();


    const listOfBooks = books.map((book, index) => {
        return (
            <BookCard key={index} book={book} />
        )
    })

    return (
        <>
            {error && <p>{error}</p>}
            <Stack
                display={'grid'}
                gap={'10px'}
                gridAutoFlow={'column'}
                gridAutoColumns={'minmax(230px, 1fr)'}
                overflowX={'scroll'}
                overscrollBehaviorX={'contain'}
                px={'5px'}
                pt={'10px'}
                pb={'25px'}
                maxW={'calc(100vw - 40px)'}
            >
                {listOfBooks}
            </Stack>
        </>
    )
}

export default BooksView
