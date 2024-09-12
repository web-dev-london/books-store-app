import { Container, Flex, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import ButtonTrialView from './ButtonTrialView';
import Logo from './Logo';
import MenuView from './MenuView';
import NavList from './NavList';




const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    void setIsOpen

    return (
        <>
            <HStack
                bg={'white'}
                position={'fixed'}
                top={'0'}
                left={'0'}
                right={'0'}
                zIndex={'10'}
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
