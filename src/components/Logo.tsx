import { Flex, Image, Text } from '@chakra-ui/react'
import Clink from 'clink-react'
import logo from '../assets/logo.png';

const Logo = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <>
            <Clink
                display={isOpen ? { base: 'none', md: 'block' } : 'block'}
                _hover={{ textDecoration: 'none' }}
                to='/'>
                <Flex
                    align={'center'}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        objectFit="cover"
                        w={'30px'}
                        h={'30px'}
                        borderRadius={'50%'}
                    />
                    <Text
                        display={'inline-block'}
                        ml={'10px'}
                        fontWeight={'600'}
                        fontSize={'24px'}
                    >
                        OnBrief
                    </Text>
                </Flex>
            </Clink>
        </>
    )
}

export default Logo
