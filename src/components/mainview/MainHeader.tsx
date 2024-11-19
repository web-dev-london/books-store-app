import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";
import Clink from "clink-react";

interface Props {
    header: string;
    subheader: string;
}

const MainHeader = ({ header, subheader }: Props) => {
    return (
        <>
            <Box
                m={'20px 0px 10px 0px'}
                p={'30px 0px 1px 0px'}
                textAlign={{ base: 'center', md: 'start' }}
                display={{ base: 'block', md: 'flex' }}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Clink to='/'
                    _hover={{ textDecoration: 'none' }}
                >
                    <Heading
                        as={'h2'}
                        size={'md'}
                        fontSize={{ base: '22px', md: '28px' }}
                        lineHeight={'31px'}
                        opacity={'.8'}
                    >
                        {header}
                    </Heading>
                </Clink>
                <Clink to='/'
                    _hover={{ textDecoration: 'none' }}
                >
                    <Text
                        fontWeight={'400'}
                        fontSize={{ base: '16px', md: '18px' }}
                        opacity={'.6'}
                        lineHeight={'20px'}
                        marginY={{ base: '10px', md: '0' }}
                    >
                        {subheader}
                        <ArrowForwardIcon />
                    </Text>
                </Clink>
            </Box>
        </>
    )
}

export default MainHeader;
