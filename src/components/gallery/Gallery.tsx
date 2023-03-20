import { useEffect, useLayoutEffect, useState } from "react";
import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";

type galleryProps = {
  setShowDSKG: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Gallery = ({ setShowDSKG }: galleryProps) => {
  const { screenWidth } = useScreenWidthHeight();
  const [imgPos, setImgPos] = useState(1);
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    import(`../../images/image-product-${imgPos}.jpg`).then((url) =>
      setImageUrl(url.default)
    );
  }, [imgPos]);

  const handleImgMove = (direction: string, limit: number) => {
    direction === "derecha"
      ? imgPos < limit
        ? setImgPos(imgPos + 1)
        : setImgPos(1)
      : imgPos > 1
      ? setImgPos(imgPos - 1)
      : setImgPos(limit);
  };
  useLayoutEffect(() => {
    const img = document.querySelector(".galleryimg");
    img?.classList.add("animate__pulse");
    const time = setTimeout(() => {
      img?.classList.remove("animate__pulse");
    }, 900);
    return () => {
      clearTimeout(time);
    };
  }, [imgPos]);
  useLayoutEffect(() => {
    const littleImages = document.querySelectorAll(".littleimage");
    littleImages.forEach((img: Element) => {
      img.setAttribute("style", `height: ${img.clientWidth}px`);
    });
  }, [screenWidth]);
  return (
    <div className="gallery">
      <div className="gallery-img-controls">
        <button
          aria-label="move right"
          className="btn-cambiar-img"
          onClick={() => handleImgMove("izquierda", 4)}
        ></button>
        <img
          src={imageUrl}
          alt="product"
          onClick={() => {
            screenWidth >= 780 && setShowDSKG(true);
          }}
          className="galleryimg animate__animated "
        />
        <button
          aria-label="move left"
          className="btn-cambiar-img"
          onClick={() => handleImgMove("derecha", 4)}
        ></button>
      </div>
      <div className="littleimages">
        <img
          src="./assets/images/image-product-1-thumbnail.jpg"
          alt="thumbnail"
          className="littleimage"
          onClick={() => setImgPos(1)}
        />
        <img
          src="./assets/images/image-product-2-thumbnail.jpg"
          alt="thumbnail"
          className="littleimage"
          onClick={() => setImgPos(2)}
        />
        <img
          src="./assets/images/image-product-3-thumbnail.jpg"
          alt="thumbnail"
          className="littleimage"
          onClick={() => setImgPos(3)}
        />
        <img
          src="./assets/images/image-product-4-thumbnail.jpg"
          alt="thumbnail"
          className="littleimage"
          onClick={() => setImgPos(4)}
        />
      </div>
    </div>
  );
};
