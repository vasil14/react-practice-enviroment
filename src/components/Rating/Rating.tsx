import { useState } from "react";

import { StyledRating, StyledRatingText } from "./styles";
import Star from "./Star";

interface RatingProps {
  totalStars?: number;
}

const Rating = ({ totalStars = 5 }: RatingProps) => {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <StyledRating>
        {[...Array(totalStars)].map((_, index) => (
          <Star
            key={index}
            isFilled={index < rating}
            onSelect={() => setRating(index + 1)}
          />
        ))}
      </StyledRating>
      <StyledRatingText className="rating-text">
        {rating} of {totalStars} stars
      </StyledRatingText>
    </>
  );
};

export default Rating;
