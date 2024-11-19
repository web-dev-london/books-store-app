import { Card, useColorModeValue } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const CardView = ({ children }: PropsWithChildren) => {
    const bgColor = useColorModeValue('rgb(250, 250, 250)', 'gray.700'); // Dark mode slightly lighter for better visibility
    const hoverBgColor = useColorModeValue('rgb(240, 240, 240)', 'gray.800'); // Hover color for both modes

    return (
        <>
            <Card
                display={'grid'}
                gridTemplateRows={'min-content'}
                p={'25px'}
                gap={'10px'}
                borderRadius={'10px'}
                border={'none'}
                outline={'none'}
                boxShadow={'none'}
                bg={bgColor}
                _hover={{ bg: hoverBgColor, transform: 'scale(1.03)' }}
                transition='all .2s ease '
            >
                {children}
            </Card>
        </>
    )
}

export default CardView
