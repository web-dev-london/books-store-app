import { Box, Heading, Text } from '@chakra-ui/react'
import { em } from 'framer-motion/client'

const HeroHeading = () => {
    return (
        <>
            <Box>
                <Heading
                    as={'h1'}
                    className='hero-heading'
                    mt={'30px'}
                    fontSize={{ base: '42px', md: '78px' }}
                    lineHeight={{ base: '52px', md: '82px' }}
                    fontWeight={'700'}
                    letterSpacing={'1px'}
                >
                    Read any book in
                    <Text
                        display={'inline-block'}
                        fontWeight={'500'}
                        letterSpacing={'-1.5px'}
                        ml={'10px'}
                        pb={0}
                        fontStyle={'normal'}
                        borderBottom={'6px solid rgba(0, 0, 0, 0.1)'}
                        borderColor={'rgb(250, 237, 180)'}
                        as={em}>10 minutes
                    </Text>
                </Heading>
            </Box>
        </>
    )
}

export default HeroHeading
