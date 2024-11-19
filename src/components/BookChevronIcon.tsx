import { ChevronRightIcon } from "@chakra-ui/icons"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { BookDetail } from '../validation/validate'


type Props = {
  data?: BookDetail;
}

const BookChevronIcon = ({ data }: Props) => {
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');

  return (
    <Text
      mb={'30px'}
      color={textColor}
    >
      Book  <ChevronRightIcon />
      {data?.volumeInfo?.title}
    </Text>
  )
}

export default BookChevronIcon