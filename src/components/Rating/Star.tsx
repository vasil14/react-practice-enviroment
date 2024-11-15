import { Star as StarIcon } from "@phosphor-icons/react";

interface StarProps {
  isFilled?: boolean;
  onSelect?: () => void;
}

const Star = ({ isFilled = false, onSelect }: StarProps) => {
  return (
    <StarIcon
      size={32}
      fill={isFilled ? "orange" : "grey"}
      onClick={onSelect}
      weight="fill"
    />
  );
};

export default Star;
