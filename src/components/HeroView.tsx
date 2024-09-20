import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';
import HeroBreadCrumbs from './HeroBreadCrumbs';
import HeroBreadCrumbsGray from './HeroBreadCrumbsGray';
import HeroHeading from './HeroHeading';
import HeroInputBottom from './HeroInputBottom';
// import { placeholderTexts } from '../helper/placeholder';



const HeroView = () => {
    const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');
    const textColor = useColorModeValue('rgb(26, 32, 44)', 'rgb(250, 250, 250)');
    return (
        <>
            <Box
                bg={bgColor}
                color={textColor}
                pb={'30px'}
                position={'relative'}
            >
                <Container
                    position={'relative'}
                    width={'100%'}
                    margin={'0 auto'}
                    maxW={'1105px'}
                    paddingX={'15px'}
                    paddingY={'30px'}
                    textAlign={'center'}
                >
                    <Stack
                        textAlign={'center'}
                        p={'76px 5px 16px 5px'}
                    >
                        <HeroBreadCrumbs />
                        <HeroHeading />
                        <HeroBreadCrumbsGray />
                        <HeroInputBottom
                        />

                    </Stack>
                </Container>
            </Box >
        </>
    )
}

export default HeroView
