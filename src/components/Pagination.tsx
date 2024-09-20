import { Button, HStack, Select, Text } from "@chakra-ui/react";
import useBooks from "../hooks/useBooks";
import useBookQueryStore from "../store";

const Pagination = () => {
    const { data } = useBooks();
    const { setPage, setLimit, bookQuery: { page, limit } } = useBookQueryStore();
    const totalPages = data?.totalItems ? Math.ceil(data.totalItems / limit) : 0;

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }


    return (
        <HStack
            spacing={{ base: 3, md: 5 }} mt={10}
            justifyContent="flex-start"
        >
            <Text
                display={{ base: 'none', md: 'inline-block' }}
            >
                Page {page} of {totalPages}
            </Text>
            <Button
                onClick={handlePreviousPage}
                isDisabled={page === 1}
            >
                Previous
            </Button>
            <Button
                onClick={handleNextPage}
                isDisabled={page === totalPages}
            >
                Next
            </Button>

            <Select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                width="80px"
                ml={{ base: 0, md: 3 }}
                _focusVisible={{ boxShadow: 'none' }}
            >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={16}>16</option>
            </Select>
        </HStack >
    );
};

export default Pagination;
