import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";
const MenuView = () => {
    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='menu'
                    borderRadius={'50%'}
                    _hover={{ bg: '#f4f4f4' }}
                    transition={{ bg: '.4s ease' }}
                    icon={<FiMenu size={25} />}
                    variant='ghost'
                    ml={3}
                    _focus={{ bg: '#f4f4f4' }}
                />
                <MenuList minW={'150px'}>
                    <MenuItem _hover={{ bg: '#f4f4f4' }} _focus={{ bg: '#f4f4f4' }}>
                        Bookmarks
                    </MenuItem>
                    <MenuItem _hover={{ bg: '#f4f4f4' }}>
                        History
                    </MenuItem>
                    <MenuItem _hover={{ bg: '#f4f4f4' }}>
                        Ratings
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem _hover={{ bg: '#f4f4f4' }}>
                        Support
                    </MenuItem>
                    <MenuItem _hover={{ bg: '#f4f4f4' }} >
                        Affiliate
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem _hover={{ bg: '#f4f4f4' }}>
                        Sign In
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuView
