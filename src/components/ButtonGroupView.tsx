import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { ButtonGroup, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonGroupView = ({ isOpen, setIsOpen }: Props) => {
    return (
        <>
            <ButtonGroup
                position={'relative'}
                display={'flex'}
                alignItems={'center'}
                variant={'ghost'}
                ml={{ base: 'auto', md: '0' }}
            >
                {isOpen && (
                    <InputGroup
                        display={{ base: 'block', md: 'none' }}
                        className={isOpen ? 'search-bar-inputGroup active' : 'search-bar-inputGroup transition-all-ease-in-out'}
                    >
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input
                            _focusVisible={{ boxShadow: 'none' }}
                            variant={'outline'}
                            type='text'
                            placeholder='Find a book...'
                            borderRadius={'200px'}
                            as={'input'}
                            className={isOpen ? 'search-bar-input active' : 'search-bar-input'}
                        />
                    </InputGroup>
                )}

                <IconButton
                    onClick={() => setIsOpen(!isOpen)}
                    cursor={'pointer'}
                    display={{ base: 'inli-block', md: 'none' }}
                    aria-label='search'
                    w={'38px'}
                    h={'38px'}
                    borderRadius={'50%'}
                    className={isOpen ? 'search-icon-toggle active' : 'search-icon-toggle'}
                    icon={
                        <SearchIcon w={4} h={4} />
                    }
                />

                {isOpen && <IconButton
                    display={{ base: 'inli-block', md: 'none' }}
                    aria-label='close'
                    borderRadius={'50%'}
                    _hover={{ bg: 'gray.100' }}
                    transition={{ bg: '.4s ease' }}
                    icon={
                        <CloseIcon
                            position={'absolute'}
                            right={'50%'}
                            top={'50%'}
                            transform={'translate(50%, -50%)'}
                            w={3} h={3}
                        />
                    }
                    onClick={() => setIsOpen(!isOpen)} />
                }
            </ButtonGroup>
        </>
    )
}

export default ButtonGroupView
