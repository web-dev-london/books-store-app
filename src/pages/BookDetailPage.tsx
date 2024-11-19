import { Box, Container, Spinner, useColorModeValue } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BookChevronIcon from "../components/BookChevronIcon"
import BookDescription from "../components/BookDescription"
import BookDetailsView from "../components/BookDetailsView"
import BookRightColumn from "../components/BookRightColumn"
import HeadingView from "../components/HeadingView"
import LinkToDownload from "../components/LinkToDownload"
import useBook from "../hooks/useBook"


const BookDetailPage = () => {
  const { id } = useParams()
  const { data, isLoading } = useBook(id!)
  const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');


  const linkToDownload = data?.accessInfo?.pdf?.downloadLink
    && <LinkToDownload
      data={data}
    />

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
            (<BookChevronIcon
              data={data}
            />
            )}
          <Box
            display={'flow-root'}
          >
            <BookRightColumn
              data={data}
            >
              {linkToDownload}
            </BookRightColumn>
            <HeadingView
              title={data?.volumeInfo?.title}
            />
            <BookDetailsView
              data={data}
            />
            <BookDescription
              data={data}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default BookDetailPage
