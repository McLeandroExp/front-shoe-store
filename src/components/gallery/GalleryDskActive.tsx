import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";

type galleryDskProps = {
  setShowDSKG: React.Dispatch<React.SetStateAction<boolean>>;
};
export const GalleryDskActive = ({ setShowDSKG }: galleryDskProps) => {
  const [imgPos, setImgPos] = useState(1);
  const [direccion, setDireccion] = useState("derecha");
  // const { screenHeight } = useScreenWidthHeight();
  const refDiv = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   if (refDiv.current) refDiv.current.style.height = String(screenHeight);
  //   console.log("cambiando height " + screenHeight);
  // }, [screenHeight]);

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
    const img = document.querySelector(".gdeskimg");
    const left = "animate__backInLeft";
    const right = "animate__backInRight";
    if (direccion === "izquierda") {
      img?.classList.add(right);
    } else {
      img?.classList.add(left);
    }
    const time = setTimeout(() => {
      if (direccion === "izquierda") {
        img?.classList.remove(right);
      } else {
        img?.classList.remove(left);
      }
    }, 900);
    return () => {
      clearTimeout(time);
    };
  }, [imgPos, direccion]);
  return (
    <div className="galleryDskActive" ref={refDiv}>
      <section className="gdagallery">
        <div className="gdacontent">
          <button
            className="gdskbtn"
            aria-label="move left"
            onClick={() => {
              handleImgMove("izquierda", 4);
              setDireccion("izquierda");
            }}
          ></button>
          <img
            src={imageUrl}
            alt="product"
            className="gdeskimg animate__animated animate__faster"
          />
          <button
            aria-label="move right"
            className="gdskbtn scnd"
            onClick={() => {
              handleImgMove("derecha", 4);
              setDireccion("derecha");
            }}
          ></button>
          <button
            className="gsaclosebtn"
            onClick={() => setShowDSKG(false)}
          ></button>
        </div>
        <div className="dskltimgs">
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
      </section>
    </div>
  );
};
