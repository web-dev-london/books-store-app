import { Text, useColorModeValue } from "@chakra-ui/react"
import { BookDetail } from '../validation/validate'


type Props = {
  data?: BookDetail;
}

const BookDescription = ({ data }: Props) => {
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');

  return (
    <Text
      color={textColor}
      fontSize={{ base: '16px', md: '18px' }}
      lineHeight={{ base: '24px', md: '28px' }}
      fontWeight={'500'}
      my={'20px'}
    >
      {data?.volumeInfo?.description}
    </Text>
  )
}

export default BookDescription