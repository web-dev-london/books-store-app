import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/nav/NavBar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box
        p={5}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
