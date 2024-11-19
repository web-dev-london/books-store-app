import { Box, Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import BookmarkView from "../components/BookmarkView";
import { BookDetail } from "../validation/validate";


type Props = {
  data?: BookDetail;
  children: ReactNode;
}

const BookRightColumn = ({ data, children }: Props) => {
  return (
    <Box
      w={'239px'}
      float={{ base: 'none', md: 'right' }}
      ml={{ base: 0, md: '30px' }}
      mb={{ base: '20px', md: '30px' }}
    >
      <Flex
        gap={'10px'}
      >
        <BookmarkView />
        <Image
          order={{ base: -1, md: 1 }}
          borderRadius={'5px'}
          src={data?.volumeInfo?.imageLinks?.thumbnail}
          w={'100%'}
        />
      </Flex>
      {children}
    </Box>
  )
}

export default BookRightColumn