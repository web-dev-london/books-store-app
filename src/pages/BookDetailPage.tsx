import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Heading, Image, Spinner, Text, useColorModeValue } from "@chakra-ui/react"
import Clink from "clink-react"
import { useState } from "react"
import { FaRegFilePdf } from "react-icons/fa6"
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5"
import { useParams } from "react-router-dom"
import useBook from "../hooks/useBook"

const BookDetailPage = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [onHover, setOnHover] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(true);
  const { id } = useParams()
  const { data, isLoading } = useBook(id!)
  const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');
  const linkColor = useColorModeValue('#4169E1', '#90EE90');

  const stars = [...Array(5)].map((_, index) => {
    const currentRate = index + 1;
    return (
      <label key={index} >
        <input
          type="radio"
          style={{ display: 'none', }}
          name="rating"
          value={currentRate}
          onClick={() => setRating(currentRate)}
        />
        <StarIcon
          cursor={'pointer'}
          onMouseEnter={() => setOnHover(currentRate)}
          onMouseLeave={() => setOnHover(null)}
          color={currentRate <= (onHover ?? rating ?? currentRate) ? '#FFC107' : '#E0E0E0'}
        />
      </label>
    )
  })

  const linkToDownload = data?.accessInfo?.pdf?.downloadLink
    && <Clink to={data?.accessInfo?.pdf?.downloadLink ?? ''} target='_blank' rel='noopener noreferrer'
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        alignItems={'center'}
        gap={'5px'}
        fontSize={{ base: '16px', md: '18px' }}
        lineHeight={{ base: '24px', md: '28px' }}
        fontWeight={'500'}
        bg={bgColor}
        p={'10px'}
        borderRadius={'5px'}
        mt={'16px'}
        justifyContent={'center'}
      >
        <FaRegFilePdf
          color={linkColor}
        />
        <Text
          color={linkColor}
          textDecoration={'underline'}
        >
          Download PDF
        </Text>
      </Flex>
    </Clink>

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
          {isLoading && <Spinner />}
          {data?.volumeInfo?.title &&
            (<Text
              mb={'30px'}
              color={textColor}
            >
              Book  <ChevronRightIcon />
              {data?.volumeInfo?.title}
            </Text>)}
          <Box
            display={'flow-root'}
          >
            <Box
              w={'239px'}
              float={{ base: 'none', md: 'right' }}
              ml={{ base: 0, md: '30px' }}
              mb={{ base: '20px', md: '30px' }}
            >
              <Flex
                gap={'10px'}
              >
                <Button
                  variant={'ghost'}
                  bg={bgColor}
                  p={'0'}
                  borderRadius={'5px'}
                  _hover={{ textDecoration: 'none' }}
                  onClick={() => setIsClicked(!isClicked)}
                >
                  {isClicked ?
                    <IoBookmarkOutline
                      color={textColor}
                      style={{
                        width: '35px',
                        height: '35px',
                      }}
                    />
                    : <IoBookmark
                      color={'red'}
                      style={{
                        width: '35px',
                        height: '35px',
                      }}
                    />
                  }
                </Button>
                <Image
                  order={{ base: -1, md: 1 }}
                  borderRadius={'5px'}
                  src={data?.volumeInfo?.imageLinks?.thumbnail}
                  w={'100%'}
                />
              </Flex>
              {linkToDownload}
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
                  _hover={{ textDecoration: 'none' }}
                  color={linkColor}
                  to={data?.volumeInfo?.previewLink ?? '#'}
                  mr={'10px'}
                >
                  Preview
                </Clink>
                <Clink
                  _hover={{ textDecoration: 'none' }}
                  color={linkColor}
                  to={data?.volumeInfo?.infoLink ?? '#'}
                >
                  Info
                </Clink>
              </Flex>
              <Flex
                alignItems={'center'}
                gap={'5px'}
                justifyContent={'flex-start'}
              >

                <Text mr={'5px'}>
                  {data?.volumeInfo?.averageRating}
                </Text>

                {data?.volumeInfo?.averageRating && stars}
              </Flex>
            </Flex>
            <Text
              color={textColor}
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight={{ base: '24px', md: '28px' }}
              fontWeight={'500'}
              my={'20px'}
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
