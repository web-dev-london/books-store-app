import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useBookQueryStore from "../store";

const SortedBooks = () => {
    const { setOrderBy } = useBookQueryStore();
    const bookQuery = useBookQueryStore((state) => state.bookQuery);
    const listOfOrderBy = [
        { label: 'Relevance', value: 'relevance' },
        { label: 'Newest', value: 'newest' },
    ]

    const currentOrder = listOfOrderBy.find((orderBy) => orderBy.value === bookQuery.orderBy)?.label || 'Relevance';





    const handleOrderBy = (orderBy: string) => {
        setOrderBy(orderBy);
    }
    return (
        <>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                >
                    Sort by: {currentOrder}
                </MenuButton>
                <MenuList>
                    {listOfOrderBy.map((orderBy, index) => {
                        return (
                            <MenuItem
                                key={index}
                                onClick={() => handleOrderBy(orderBy.value)}
                            >
                                {orderBy.label}
                            </MenuItem>
                        )
                    })}
                </MenuList>
            </Menu>
        </>
    )
}

export default SortedBooks
