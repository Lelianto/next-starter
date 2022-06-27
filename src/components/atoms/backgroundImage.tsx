import { useEffect, useState } from "react";
import Image from "next/image";
import HomeBanner from '../../assets/home/HomeBanner.jpg'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div className={'absolute z-0 top-0'}>
        <Image
          src={HomeBanner}
          width={width}
          height={height}
          alt={'alt'}
        />
      </div>
    );
  }

  return null;
}

export default BGImage;