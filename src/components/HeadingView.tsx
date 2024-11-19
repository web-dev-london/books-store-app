import { Heading } from "@chakra-ui/react";


type Props = {
  title?: string;
}

const HeadingView = ({ title }: Props) => {

  return (
    <Heading
      as={'h1'}
      fontSize={{ base: '24px', md: '32px' }}
      lineHeight={{ base: '32px', md: '40px' }}
      fontWeight={'700'}
      mt={{ base: '20px', md: 0 }}
    >
      {title}
    </Heading>
  )
}

export default HeadingView;