// import { useState, useEffect } from "react";
import "./style.scss";
import { FaPlay } from "react-icons/fa";

type Picture = {
  cover: string;
  url: string;
};

type PropsBoxCover = {
  pictureList: Picture[];
};

export const BoxCoverHouse = ({ pictureList }: PropsBoxCover) => {
  // const [indexCurrentCover, setIndexCurrentCover] = useState(0);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [, setActiveIndex] = useState<number>(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const nextIndex = (indexCurrentCover + 1) % pictureList.length;
  //     setIndexCurrentCover(nextIndex);
  //     setActiveIndex(nextIndex);
  //   }, 8000);

  //   return () => clearInterval(timer);
  // }, [indexCurrentCover, pictureList.length]);

  return (
    <div className=" container__cover">
      <div className="main__cover">
        <div className="player__container">
          <button className="btn__play">
            <FaPlay />
          </button>
        </div>
        <img src="/public/images/cover/cover10.webp" alt="" />
      </div>
      <div className="others__cover">
        <div className="cover__box">
          <img src="/public/images/cover/cover6.webp" alt="" />
        </div>
        <div className="cover__box">
          <img src="/public/images/cover/cover4.webp" alt="" />
        </div>
        <div className="cover__box">
          <img src="/public/images/cover/cover2.webp" alt="" />
        </div>
        <div className="cover__box">
          <img src="/public/images/cover/cover3.webp" alt="" />
        </div>
      </div>
    </div>
  );
};
