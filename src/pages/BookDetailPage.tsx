import { useParams } from "react-router-dom"
import useBook from "../hooks/useBook"
import { Text, Box, Container, Heading, Image, useColorModeValue, Flex } from "@chakra-ui/react"
import Clink from "clink-react"

const BookDetailPage = () => {
    const { id } = useParams()
    const { data } = useBook(id!)
    const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');
    const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');

    console.log('BookDetailPage: ', data);
    return (
        <>
            <Box
                bg={bgColor}
                pb={'30px'}
            >
                <Container
                    maxW={'1105px'}
                    paddingX={'15px'}
                    py={20}
                >
                    <Box
                        display={'flow-root'}
                    >
                        <Box
                            w={'239px'}
                            float={{ base: 'none', md: 'right' }}
                            ml={{ base: 0, md: '30px' }}
                            mb={{ base: '20px', md: '30px' }}
                        >
                            <Image
                                borderRadius={'5px'}
                                src={data?.volumeInfo?.imageLinks?.thumbnail}
                                w={'100%'}
                            />
                        </Box>

                        <Heading
                            as={'h1'}
                            fontSize={{ base: '24px', md: '32px' }}
                            lineHeight={{ base: '32px', md: '40px' }}
                            fontWeight={'700'}
                            mt={{ base: '20px', md: 0 }}
                        >
                            {data?.volumeInfo?.title}
                        </Heading>
                        <Flex
                            flexDirection='column'
                            gap={'5px'}
                            fontSize={{ base: '16px', md: '18px' }}
                            lineHeight={{ base: '24px', md: '28px' }}
                            fontWeight={'500'}
                        >
                            <Text
                                color={textColor}
                            >
                                {data?.volumeInfo?.subtitle}
                            </Text>
                            <Flex
                                gap={'7px'}
                            >
                                <Text
                                    as={'span'}
                                    color={textColor}
                                >
                                    by
                                </Text>
                                <Text
                                    fontWeight={'800'}
                                >
                                    {data?.volumeInfo?.authors?.join(', ')}
                                </Text>
                            </Flex>
                            <Text>
                                Country: {data?.accessInfo?.country}
                            </Text>
                            <Flex gap={'10px'}>
                                <Text
                                    color={textColor}
                                >
                                    {data?.volumeInfo?.publishedDate}
                                </Text>
                                <Text
                                    color={textColor}
                                >
                                    {data?.volumeInfo?.pageCount} pages
                                </Text>
                            </Flex>
                            <Flex
                                gap={'10px'}
                                flexWrap={'wrap'}
                            >
                                <Text
                                    as={'span'}
                                    color={textColor}
                                >
                                    Publisher:
                                </Text>
                                <Text
                                    fontWeight={'700'}
                                >
                                    {data?.volumeInfo?.publisher}
                                </Text>
                            </Flex>
                            <Text>
                                Language: ({data?.volumeInfo?.language})
                            </Text>
                            <Flex
                                gap={'10px'}
                            >
                                <Clink
                                    to={data?.volumeInfo?.previewLink ?? '#'}
                                >
                                    Preview
                                </Clink>
                                <Clink
                                    to={data?.volumeInfo?.infoLink ?? '#'}
                                >
                                    More Info
                                </Clink>
                            </Flex>
                            <Text>
                                {data?.volumeInfo?.averageRating}
                            </Text>
                        </Flex>
                        <Text
                            color={textColor}
                            fontSize={{ base: '16px', md: '18px' }}
                            lineHeight={{ base: '24px', md: '28px' }}
                            fontWeight={'500'}
                        >
                            {data?.volumeInfo?.description}
                        </Text>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default BookDetailPage
