import { Box, Text, useColorModeValue } from '@chakra-ui/react'

const HeroBreadCrumbsGray = () => {
    const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');
    return (
        <>
            <Box
                mt={'20px'}
            >
                <Text
                    fontSize={{ base: '19px', md: '27px' }}
                    lineHeight={{ base: '28px', md: '32px' }}
                    paddingY={'23px'}
                    color={textColor}
                    fontWeight={'400'}
                >
                    73,530 books summarized with audio in 40 languages &#8213; free to read
                </Text>
            </Box>
        </>
    )
}

export default HeroBreadCrumbsGray;
