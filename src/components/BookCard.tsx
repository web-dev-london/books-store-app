import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react"
import { FetchBooksResponse } from "../hooks/useBooks"
import { StarIcon } from "@chakra-ui/icons"
import { FaStarHalfAlt } from "react-icons/fa";

interface Props {
    book: FetchBooksResponse
}

const BookCard = ({ book }: Props) => {

    const starIconRating = (rating: string) => {
        const ratingNumber = Number(rating)
        const totalStars = 5

        const filledStars = Math.floor(ratingNumber)
        const halfStar = ratingNumber % 1 >= 0.5
        const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0)

        return (
            <Flex
                alignItems={'center'}
                gap={'5px'}
            >
                {Array.from({ length: filledStars }, (_, index) => (
                    <StarIcon
                        key={index}
                        color={'#FFC107'}
                    />
                ))}
                {halfStar && <FaStarHalfAlt color={'#FFC107'} />}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <StarIcon
                        key={index}
                        color={'#E0E0E0'}
                    />
                ))}
            </Flex>
        )
    }


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
                _hover={{ bg: 'rgb(249, 249, 249)', transform: 'scale(1.03)' }}
                transition='all .2s ease '
            >
                <Image
                    inlineSize={'100%'}
                    src={book.image}
                    alt={book.title}
                    borderRadius={'5px'}
                />
                <CardBody
                    pl={'0'}
                    pb={'0'}
                    display={'grid'}
                    gap={'2px'}
                >
                    <Text
                        fontSize={'14px'}
                        fontWeight={'600'}
                        lineHeight={'21px'}
                    >
                        {book.title}
                    </Text>
                    <Text
                        fontSize={'13px'}
                        fontWeight={'400'}
                        lineHeight={'18px'}
                        color={'rgba(0, 0, 0, 0.6)'}
                        mt={'5px'}
                    >
                        {book.author}
                    </Text>
                    <Flex
                        alignItems={'center'}
                        gap={'5px'}
                        mt={'7px'}
                    >
                        <Text
                            fontWeight={'600'}
                            fontSize={'16px'}
                            mr={'5px'}
                        >
                            {book.rating}
                        </Text>
                        {/* <StarIcon color={'#FFB800'} /> */}
                        {starIconRating(book.rating)}
                    </Flex>
                </CardBody>
            </Card>
        </>
    )
}

export default BookCard
