import { List, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const NavList = () => {

    const links = [
        { name: 'Lists', path: '/lists' },
        { name: 'Trending', path: '/trending' },
        { name: 'New', path: '/new' },
    ];

    const listItems = links.map((link) => (
        <ListItem
            key={link.name}
            fontWeight={'500'}
            fontSize={'16px'}
            mr={'25px'}
            _last={{ mr: '0' }}
        >
            <NavLink
                to={link.path}
            >
                {link.name}
            </NavLink>
        </ListItem>
    ));

    return (
        <>
            <List
                as={'ul'}
                display={{ base: 'none', md: 'flex' }}
                ml='60px'
            >
                {listItems}
            </List>
        </>
    )
}

export default NavList
