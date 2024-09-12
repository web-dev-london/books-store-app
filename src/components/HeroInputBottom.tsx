import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input, keyframes } from '@chakra-ui/react'

const spin = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    10% {
        transform: translateY(0);
        opacity: 1;
    }
        90% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100%);
            opacity: 0;
        }`

interface Props {
    currentPlaceholder: number
    placeholderTexts: string[]
    isFocused: boolean
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}


const HeroInputBottom = ({ currentPlaceholder, placeholderTexts, isFocused, setIsFocused }: Props) => {
    const slideAnimation = `${spin} 2s ease infinite`
    return (
        <>
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
                    <SearchIcon color='black' fontSize={'20px'} />
                </InputLeftElement>
                <Input
                    as={'input'}
                    size={'lg'}
                    border={'1px solid rgba(0, 0, 0, 0.1)'}
                    borderRadius={'200px'}
                    boxShadow={'0 4px 20px -2px rgba(0, 0, 0, 0.2)'}
                    type='text'
                    placeholder={`${!isFocused ? placeholderTexts[currentPlaceholder] : ''}`}
                    _placeholder={{ animation: slideAnimation, fontSize: '22px', lineHeight: '26px' }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    bg={'white'}
                    _focusVisible={{ boxShadow: 'none' }}
                    transition={'_placeholder 0.5s ease-in-out'}
                />
            </InputGroup>
        </>
    )
}

export default HeroInputBottom
