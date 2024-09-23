import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { ButtonGroup, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useBookQueryStore from '../store';

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonGroupView = ({ isOpen, setIsOpen }: Props) => {
    const [placeholder, setPlaceholder] = useState('Search...');
    const ref = React.useRef<HTMLInputElement>(null);
    const { setSearchText } = useBookQueryStore();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

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
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                if (ref.current) {
                                    const searchTerm = ref.current.value;

                                    if (searchTerm) {
                                        setSearchText(searchTerm);
                                        const params = new URLSearchParams(searchParams.toString());
                                        params.set('search', searchTerm);
                                        navigate(`/?${params.toString()}`);
                                    } else {
                                        navigate('/');
                                    }
                                }
                            }}
                        >
                            <InputLeftElement pointerEvents='none'>
                                <SearchIcon color='gray.300' mr={2} />
                            </InputLeftElement>
                            <Input
                                pl={'30px'}
                                ref={ref}
                                _placeholder={{
                                    color: 'black',
                                    fontSize: '15px',
                                    opacity: '0.4',
                                    letterSpacing: '.5px',
                                }}
                                placeholder={placeholder}
                                _focusVisible={{ boxShadow: 'none' }}
                                variant={'outline'}
                                type='text'
                                onFocus={() => setPlaceholder('')}
                                onBlur={() => setPlaceholder('Search...')}
                                transition={'.4s ease'}
                                borderRadius={'200px'}
                                as={'input'}
                                className={isOpen ? 'search-bar-input active' : 'search-bar-input'}
                            />
                        </form>
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
                            transform={'translate(100%, -50%)'}
                            w={3} h={3}
                            color={'black'}
                        />
                    }
                    onClick={() => setIsOpen(!isOpen)} />
                }
            </ButtonGroup>
        </>
    )
}

export default ButtonGroupView
