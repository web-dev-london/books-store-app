import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const InputGroupView = () => {
    return (
        <>
            <Flex
                display={{ base: 'none', md: 'flex' }}
                ml={'auto'}
            >
                <InputGroup
                >
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        _focusVisible={{ boxShadow: 'none' }}
                        variant={'outline'}
                        borderRadius={'200px'}
                        type='text'
                        placeholder='Find a book...'
                    />
                </InputGroup>
            </Flex>
        </>
    )
}

export default InputGroupView;
