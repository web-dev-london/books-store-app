import { Button, useColorModeValue, IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ButtonTrialView = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('white', 'gray.600');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const hoverColor = useColorModeValue('gray.200', 'gray.700');
    return (
        <>
            <IconButton
                aria-label="Toggle theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                size="md"
                borderRadius={'50%'}
            />
            <Button
                bg={bgColor}
                color={textColor}
                _hover={{ bg: hoverColor }}
                p={'10px 22px'}
                ml={'19px'}
                borderRadius={'200px'}
                border={'1px solid rgba(0, 0, 0, 0.1)'}
                boxShadow={'0 4px 20px -2px rgba(0, 0, 0, 0.15)'}
                variant={'ghost'}
                fontWeight={'500'}
                fontSize={'15px'}
                display={{ base: 'none', md: 'block' }}
                transition={'.4s ease'}
            >
                Start free trial
            </Button>
        </>
    )
}

export default ButtonTrialView
