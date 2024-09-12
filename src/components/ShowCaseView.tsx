import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Clink from 'clink-react'

const ShowCaseView = () => {
    return (
        <>
            <Container
                maxW={'1105px'}
                paddingX={'15px'}
                pb={'100px'}
            >
                <Box
                    m={'20px 0px 5px 0px'}
                    p={'30px 0px 1px 0px'}
                    textAlign={{ base: 'center', md: 'start' }}
                    display={{ base: 'block', md: 'flex' }}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Clink to='/'
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Heading
                            as={'h2'}
                            size={'md'}
                            color={'black'}
                            fontSize={{ base: '22px', md: '28px' }}
                            lineHeight={'31px'}
                        >
                            Best Productivity Books
                        </Heading>
                    </Clink>
                    <Clink to='/'
                        _hover={{ textDecoration: 'none' }}
                    >
                        <Text
                            fontWeight={'400'}
                            fontSize={{ base: '16px', md: '18px' }}
                            opacity={'.6'}
                            lineHeight={'20px'}
                            marginY={{ base: '10px', md: '0' }}
                        >
                            More
                            <ArrowForwardIcon />
                        </Text>
                    </Clink>
                </Box>
            </Container >
        </>
    )
}

export default ShowCaseView
