import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Clink from "clink-react"
import { FaRegFilePdf } from "react-icons/fa6"
import { BookDetail } from '../validation/validate'


type Props = {
  data?: BookDetail;
}

const LinkToDownload = ({ data }: Props) => {
  const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');
  const linkColor = useColorModeValue('#4169E1', '#90EE90');


  return (
    <Clink to={data?.accessInfo?.pdf?.downloadLink ?? ''} target='_blank' rel='noopener noreferrer'
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
  )
}

export default LinkToDownload