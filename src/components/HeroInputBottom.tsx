import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import useBookQueryStore from '../store';


const HeroInputBottom = () => {
    const [placeholder, setPlaceholder] = useState('Search for Books');
    const ref = React.useRef<HTMLInputElement>(null);
    const { setSearchText } = useBookQueryStore();
    // const navigate = useNavigate();



    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (ref.current) {
                        setSearchText(ref.current.value);
                    }
                }}
            >
                <InputGroup
                    position={'relative'}
                    maxWidth={'414px'}
                    top={'32px'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                >
                    <InputLeftElement
                        pointerEvents='none'
                        position={'absolute'}
                        left={'2%'}
                        top={'50%'}
                        transform={'translate(-2%, -50%)'}
                    >
                        <SearchIcon
                            opacity={'0.2'}
                            color='black'
                            fontSize={'18px'}
                        />
                    </InputLeftElement>
                    <Input
                        ref={ref}
                        as={'input'}
                        size={'lg'}
                        border={'1px solid rgba(0, 0, 0, 0.1)'}
                        borderRadius={'200px'}
                        boxShadow={'0 4px 20px -2px rgba(0, 0, 0, 0.2)'}
                        type='text'
                        placeholder={placeholder}
                        _placeholder={{
                            color: 'black',
                            fontSize: '15px',
                            opacity: '0.4',
                        }}
                        onFocus={() => setPlaceholder('')}
                        onBlur={() => setPlaceholder('Search for Books')}
                        _focusVisible={{ boxShadow: 'none' }}
                        transition={'.4s ease'}
                    />
                </InputGroup>
            </form>
        </>
    )
}

export default HeroInputBottom
