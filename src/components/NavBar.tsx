import { Container, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ButtonTrialView from './ButtonTrialView';
import Logo from './Logo';
import MenuView from './MenuView';
import NavList from './NavList';
// import ButtonGroupView from './ButtonGroupView';





const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const scrolledBgColor = useColorModeValue('gray.100', 'gray.700');
    void setIsOpen

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <HStack
                bg={isScrolled ? scrolledBgColor : bgColor}
                color={textColor}
                position={'fixed'}
                top={'0'}
                left={'0'}
                right={'0'}
                zIndex={'10'}
                transition={'background-color .4s ease-in-out'}
            >
                <Container
                    maxW={'1105px'}
                    paddingX={'15px'}
                >
                    <HStack
                        height={'65.99px'}
                    >
                        <Logo isOpen={isOpen} />
                        <NavList />
                        <Flex ml={'auto'}>
                            <ButtonTrialView />
                            {/* <ButtonGroupView isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                            <MenuView />
                        </Flex>
                    </HStack>
                </Container >
            </HStack>
        </>
    )
}

export default NavBar
