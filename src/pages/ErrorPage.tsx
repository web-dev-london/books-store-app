import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/nav/NavBar'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <NavBar />
      <Container
        maxW={'1105px'}
        paddingX={'15px'}
      >
        <Box
          py={20}
        >
          <Heading> 🤷‍♂️ Oops...</Heading>
          <Text>{isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error has occurred'}</Text>
        </Box>
      </Container>
    </>
  )
}

export default ErrorPage
