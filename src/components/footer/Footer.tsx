import { Container, ListItem, UnorderedList } from '@chakra-ui/react'

const Footer = () => {
    const footerLists = ['Pricing', 'Terms of Service', 'Privacy Policy', 'Affiliate', 'Twitter']

    const listOfLinks = footerLists.map((list, index) => {
        return (
            <ListItem
                key={index}
                m={'0 10px '}
                _first={{ listStyleType: 'none' }}
                fontSize={'12px'}
            >
                {list}
            </ListItem>
        )
    })
    return (
        <>

            <Container
                maxW={'1105px'}
                paddingX={'15px'}
            >
                <UnorderedList
                    m={'0'}
                    flexWrap={'wrap'}
                    p={'40px 0'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {listOfLinks}
                </UnorderedList>
            </Container>

        </>
    )
}

export default Footer
