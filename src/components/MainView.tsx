import { Container, Flex, Grid, Spinner, Text } from '@chakra-ui/react';
import useBooks from '../hooks/useBooks';
import CardsView from './CardsView';
import FilteredBooks from './FilteredBooks';
import MainHeader from './MainHeader';
import Pagination from './Pagination';
import SortedBooks from './SortedBooks';
import Clink from 'clink-react';


const MainView = () => {
    const { data, isLoading, error } = useBooks();

    const listOfBooks = data?.items && data?.items.map((book, index) => {
        return (
            <Clink key={index} to={`/book/${book.id}`}>
                <CardsView book={book} />
            </Clink>
        )
    })

    if (isLoading) return <Spinner />
    if (error) return <Text>{error.toString()}</Text>

    return (
        <>
            <Container
                maxW={'1105px'}
                paddingX={'15px'}
                pb={'100px'}
            >
                <MainHeader
                    header={'All Books'}
                    subheader={'More'}
                />

                <Flex
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                    gap={4}
                    mb={'20px'}
                    justifyContent={'flex-end'}
                >
                    <FilteredBooks />
                    <SortedBooks />
                </Flex>

                <Grid
                    templateColumns={'repeat(auto-fill, minmax(230px, 1fr))'}
                    gap={4}
                >
                    {listOfBooks}
                </Grid>

                <Pagination />
            </Container >
        </>
    )
}

export default MainView;
