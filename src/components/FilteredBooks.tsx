import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useBookQueryStore from "../store"


const FilteredBooks = () => {
    const { setFilter } = useBookQueryStore();
    const bookQuery = useBookQueryStore((state) => state.bookQuery);

    const listOfFilters = [
        { label: 'Partial', value: 'partial' },
        { label: 'Full', value: 'full' },
        { label: 'Free', value: 'free-ebooks' },
        { label: 'Paid', value: 'paid-ebooks' },
        { label: 'Ebooks', value: 'ebooks' },
    ];

    const currentFilterOrder = listOfFilters.find((filter) => filter.value === bookQuery.filter)?.label || 'Full';

    const handleFilter = (filter: string) => {
        setFilter(filter);
    }
    return (
        <>
            <Menu
            >
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                >
                    Order by: {currentFilterOrder}
                </MenuButton>
                <MenuList>
                    {listOfFilters.map((filter, index) => {
                        return (
                            <MenuItem
                                key={index}
                                onClick={() => handleFilter(filter.value)}
                            >
                                {filter.label}
                            </MenuItem>
                        )
                    })}
                </MenuList>
            </Menu>
        </>
    )
}

export default FilteredBooks
