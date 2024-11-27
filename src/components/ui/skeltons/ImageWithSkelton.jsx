import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSkelton = ({ src, alt, clsName }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={` ${clsName}`} style={{position:"relative"}}>
      <SkeletonTheme baseColor="#dadada" highlightColor="#eee">
        {isLoading && <Skeleton className={`ImageWithSkelton`} />}
      </SkeletonTheme>
      <img src={src} className="ImageWithSkeltonImg" alt={alt} onLoad={handleImageLoad} />
    </div>
  );
};

export default ImageWithSkelton;
