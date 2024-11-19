import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";
const MenuView = () => {

    return (
        <>
            <Menu
            >
                <MenuButton
                    as={IconButton}
                    aria-label='menu'
                    borderRadius={'50%'}
                    transition={{ bg: '.4s ease' }}
                    icon={<FiMenu size={25} />}
                    variant='ghost'
                    ml={3}
                />
                <MenuList minW={'150px'}
                >
                    <MenuItem
                    >
                        Bookmarks
                    </MenuItem>
                    <MenuItem >
                        History
                    </MenuItem>
                    <MenuItem >
                        Ratings
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                        Support
                    </MenuItem>
                    <MenuItem  >
                        Affiliate
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                        Sign In
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuView
