import { Stack } from "@chakra-ui/react"
import { PropsWithChildren } from "react"


const ScrollerContainer = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Stack
                display={'grid'}
                gap={'10px'}
                gridAutoFlow={'column'}
                gridAutoColumns={'minmax(230px, 1fr)'}
                overflowX={'scroll'}
                overscrollBehaviorX={'contain'}
                px={'5px'}
                pt={'10px'}
                pb={'25px'}
                maxW={'calc(100vw - 40px)'}
            >
                {children}
            </Stack>
        </>
    )
}

export default ScrollerContainer
