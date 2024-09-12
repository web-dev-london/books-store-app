import { List, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const NavList = () => {
    return (
        <>
            <List
                as={'ul'}
                display={{ base: 'none', md: 'flex' }}
                ml='60px'
            >
                <ListItem
                    className={`nav-item`}
                >
                    <NavLink
                        to='/lists'
                    >
                        Lists
                    </NavLink>
                </ListItem>
                <ListItem
                    className={`nav-item`}
                >
                    <NavLink
                        to='/trending'
                    >
                        Trending
                    </NavLink>
                </ListItem>
                <ListItem
                    className={`nav-item`}
                >
                    <NavLink
                        to='/new'
                    >
                        New
                    </NavLink>
                </ListItem>
            </List>
        </>
    )
}

export default NavList
