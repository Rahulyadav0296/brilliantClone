import { FC } from "react";

interface ImagesProps {
  image: string;
  alt: string;
}

const Images: FC<ImagesProps> = ({ image, alt }) => {
  return (
    <img src={image} alt={alt} className="w-[100px] h-16 rounded-3xl mr-2" />
  );
};

export default Images;
