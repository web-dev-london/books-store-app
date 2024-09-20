// theme.js

import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

// Define your custom colors to match the look of the site
const customTheme = extendTheme({
    config,
    styles: {
        global: (props: { colorMode: string }) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
                color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
            },
            // More global styles...
        }),
    },
    colors: {
        brand: {
            50: '#f0eaff',
            100: '#d9d7ff',
            200: '#b2b5ff',
            300: '#8992ff',
            400: '#616eff',
            500: '#3b53e6', // Your primary brand color
            600: '#2f41b4',
            700: '#232f82',
            800: '#171e50',
            900: '#0b0d1e',
        },
        lightBackground: "#f5f5f5", // Light background
        darkBackground: "#1a202c", // Dark background
        textLight: "#2d3748", // Dark text
        textDark: "#e2e8f0", // Light text
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                solid: (props: { colorMode: string }) => ({
                    bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
                    color: props.colorMode === 'dark' ? 'gray.200' : 'white',
                    _hover: {
                        bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.600',
                    },
                }),
            },
        },
        Input: {
            variants: {
                outline: (props: { colorMode: string }) => ({
                    field: {
                        bg: props.colorMode === 'dark' ? 'gray.200' : 'white',
                        color: props.colorMode === 'dark' ? 'gray.900' : 'gray.800',
                        _hover: {
                            bg: props.colorMode === 'dark' ? 'gray.400' : 'gray.50',
                        },
                    },
                }),
            },
        },
        Select: {
            variants: {
                outline: (props: { colorMode: string }) => ({
                    field: {
                        bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
                        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.800',
                        _hover: {
                            bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.200',
                        },
                    },
                }),
            },
        },

    },
});

export default customTheme;
