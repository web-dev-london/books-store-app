import { Box, Text } from '@chakra-ui/react'
import Clink from 'clink-react'


const HeroBreadCrumbs = () => {
    return (
        <>
            <Box
                p={'6px 18px'}
                bg={'rgba(0, 228,121,0.07)'}
                border={'1px solid rgba(0, 228,121,0.28)'}
                borderRadius={{ base: '10px', md: '50px' }}
                fontWeight={'600'}
                textAlign={'center'}
                fontSize={'14px'}
                w={'100%'}
                maxW={'580px'}
                margin={'0 auto'}
                position={'relative'}
                top={'-10px'}
            >
                <Text
                    display={'inline-block'}
                    lineHeight={'18px'}
                >
                    Help us spread the word about SoBrief and earn 50% commission!
                </Text>
                <Clink
                    ml={{ base: '0', md: '16px' }}
                    to={'/'}
                    textDecoration={'1px underline #aaa'}
                    fontWeight={'600'}
                    _hover={{ textDecoration: ' 1px underline #aaa' }}
                    fontSize={'13px'}
                    whiteSpace={'nowrap'}
                    position={'relative'}
                    top={'0px'}
                >
                    Learn more
                </Clink>
            </Box>
        </>
    )
}

export default HeroBreadCrumbs
