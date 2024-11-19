import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { BookDetail } from "../validation/validate"
import Clink from "clink-react"
import Stars from "../utils/Stars"

type Props = {
  data?: BookDetail;
}

const BookDetailsView = ({ data }: Props) => {
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');
  const linkColor = useColorModeValue('#4169E1', '#90EE90');

  return (
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

        {data?.volumeInfo?.averageRating && <Stars />}
      </Flex>
    </Flex>
  )
}

export default BookDetailsView