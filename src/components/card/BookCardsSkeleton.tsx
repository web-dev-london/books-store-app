import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const BookCardsSkeleton = ({ height }: { height: string }) => {
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
                transition={'all .4s ease '}
            >
                <Skeleton
                    borderRadius={'10px'}
                    height={height}
                />
                <CardBody
                >
                    <SkeletonText noOfLines={4} spacing='3' />
                </CardBody>
            </Card>

        </>
    )
}

export default BookCardsSkeleton
