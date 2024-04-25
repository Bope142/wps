import { useState, useEffect } from "react";
import "./style.scss";

type Picture = {
  cover: string;
  url: string;
};

type PropsBoxCover = {
  pictureList: Picture[];
};

export const BoxCoverHouse = ({ pictureList }: PropsBoxCover) => {
  const [indexCurrentCover, setIndexCurrentCover] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (indexCurrentCover + 1) % pictureList.length;
      setIndexCurrentCover(nextIndex);
      setActiveIndex(nextIndex);
    }, 8000);

    return () => clearInterval(timer);
  }, [indexCurrentCover, pictureList.length]);
  const handleClick = (index: number) => {
    setActiveIndex(index);
    setIndexCurrentCover(index);
  };
  return (
    <div
      className="container__padding container__cover"
      style={{
        background: `url("${pictureList[indexCurrentCover].url}") center/cover fixed`,
      }}
    >
      <div
        className="others__cover"
        style={{
          gridTemplateColumns: `repeat(${pictureList.length},1fr)`,
        }}
      >
        {pictureList &&
          pictureList.map((picture, index) => (
            <div
              key={index}
              className={`box__others ${
                activeIndex === index ? "active__box" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <img src={picture.cover} alt={`Photo ${index + 1}`} />
            </div>
          ))}
      </div>
    </div>
  );
};
