import { Button } from "@chakra-ui/react"

const ButtonTrialView = () => {
    return (
        <>
            <Button
                p={'10px 22px'}
                ml={'19px'}
                borderRadius={'200px'}
                border={'1px solid rgba(0, 0, 0, 0.1)'}
                boxShadow={'0 4px 20px -2px rgba(0, 0, 0, 0.15)'}
                variant={'ghost'}
                fontWeight={'500'}
                fontSize={'15px'}
                _hover={{ bg: 'white', color: 'black' }}
                display={{ base: 'none', md: 'block' }}
            >
                Start free trial
            </Button>
        </>
    )
}

export default ButtonTrialView
