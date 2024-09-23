import { CardBody, Flex, Text, Image } from "@chakra-ui/react"
import CardView from "../utils/CardView"
import { Book } from "../validation/validate"
import noImage from '../assets/no-image-placeholder.webp'
import { StarIcon } from "@chakra-ui/icons"
import { FaStarHalfAlt } from "react-icons/fa";
import Clink from "clink-react"


interface Props {
    book: Book
}

const CardsView = ({ book }: Props) => {
    const starIconRating = (rating: number) => {
        const totalStars = 5

        const filledStars = Math.floor(rating)
        const halfStar = rating % 1 >= 0.5
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

    const srcImage = book.volumeInfo?.imageLinks?.thumbnail || noImage
    return (
        <>
            <CardView>
                <Image
                    inlineSize={'100%'}
                    src={srcImage}
                    alt={book.volumeInfo.title}
                    borderRadius={'5px'}
                />
                <CardBody
                    pl={'0'}
                    pb={'0'}
                    display={'grid'}
                    gap={'2px'}
                >
                    <Text
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight={'600'}
                        lineHeight={'21px'}
                    >
                        <Clink to={`/book/${book.id}`}>
                            {book.volumeInfo.title}
                        </Clink>
                    </Text>
                    <Text
                        fontSize={{ base: '13px', md: '15px' }}
                        fontWeight={'400'}
                        lineHeight={'18px'}
                    >
                        Language: {book.volumeInfo.language}
                    </Text>
                    {book.volumeInfo.publishedDate &&
                        (<Text
                            fontSize={{ base: '13px', md: '15px' }}
                            fontWeight={'400'}
                            lineHeight={'18px'}
                        >
                            {book.volumeInfo.publishedDate}
                        </Text>)}
                    <Text
                        fontSize={{ base: '13px', md: '15px' }}
                        fontWeight={'400'}
                        lineHeight={'18px'}
                    >
                        By: {book.volumeInfo.publisher}
                    </Text>
                    <Text
                        fontSize={{ base: '13px', md: '15px' }}
                        fontWeight={'400'}
                        lineHeight={'18px'}
                        mt={'5px'}
                    >
                        {book.volumeInfo.authors}
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
                            {book.volumeInfo.averageRating}
                        </Text>
                        {book.volumeInfo.averageRating && starIconRating(book.volumeInfo.averageRating)}
                    </Flex>
                </CardBody>
            </CardView>
        </>
    )
}

export default CardsView
