import { Button, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5"


const BookmarkView = () => {
  const [isClicked, setIsClicked] = useState(true);
  const bgColor = useColorModeValue('rgb(250, 250, 250)', 'rgb(26, 32, 44)');
  const textColor = useColorModeValue('rgba(0, 0, 0, 0.6)', 'rgba(255, 255, 255, 0.6)');





  return (
    <Button
      variant={'ghost'}
      bg={bgColor}
      p={'0'}
      borderRadius={'5px'}
      _hover={{ textDecoration: 'none' }}
      onClick={() => setIsClicked(!isClicked)}
    >
      {isClicked ?
        <IoBookmarkOutline
          color={textColor}
          style={{
            width: '35px',
            height: '35px',
          }}
        />
        : <IoBookmark
          color={'red'}
          style={{
            width: '35px',
            height: '35px',
          }}
        />
      }
    </Button>
  )
}

export default BookmarkView