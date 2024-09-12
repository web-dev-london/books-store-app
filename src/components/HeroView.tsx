import { Box, Container, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import HeroBreadCrumbs from './HeroBreadCrumbs';
import HeroBreadCrumbsGray from './HeroBreadCrumbsGray';
import HeroHeading from './HeroHeading';
import HeroInputBottom from './HeroInputBottom';

const placeholderTexts = ["make money asap", "the alchemist", "master the time management", "zero to one", 'jordan peterson', 'build self-confidence', 'master the art of leadership', 'lean startup', 'the power of now', 'heal emotioanl trauma', 'improve public speeaking', 'get in shape', 'beautify your life', 'atomic habits', 'gain power of influence', 'grow in faith', 'sapiens', 'fix the system'];

const HeroView = () => {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
    const [isFocused, setIsFocused] = useState(false);



    useEffect(() => {
        if (isFocused) return

        const interval = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isFocused])

    return (
        <>
            <Box
                bg={'rgb(250, 250, 250)'}
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
                            currentPlaceholder={currentPlaceholder}
                            placeholderTexts={placeholderTexts}
                            isFocused={isFocused}
                            setIsFocused={setIsFocused}
                        />

                    </Stack>
                </Container>
            </Box >
        </>
    )
}

export default HeroView
