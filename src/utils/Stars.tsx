import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";


const Stars = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [onHover, setOnHover] = useState<number | null>(null);



  const stars = [...Array(5)].map((_, index) => {
    const currentRate = index + 1;
    return (
      <label key={index} >
        <input
          type="radio"
          style={{ display: 'none', }}
          name="rating"
          value={currentRate}
          onClick={() => setRating(currentRate)}
        />
        <StarIcon
          cursor={'pointer'}
          onMouseEnter={() => setOnHover(currentRate)}
          onMouseLeave={() => setOnHover(null)}
          color={currentRate <= (onHover ?? rating ?? currentRate) ? '#FFC107' : '#E0E0E0'}
        />
      </label>
    )
  });

  return stars;
}

export default Stars;