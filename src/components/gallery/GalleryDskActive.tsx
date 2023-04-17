import { FC, useContext, useLayoutEffect, useRef, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
// import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";

interface GalleryDskActiveProps {
  imgs: string[][] | undefined;
  isLoading: boolean;
}

export const GalleryDskActive: FC<GalleryDskActiveProps> = ({
  imgs,
  isLoading,
}) => {
  const { setShowDSKG, productPos } = useContext(EcommerceContext);
  const [imgPos, setImgPos] = useState(0);
  const [direccion, setDireccion] = useState("derecha");
  const refDiv = useRef<HTMLDivElement | null>(null);

  const handleImgMove = (direction: string, limit: number | undefined) => {
    if (limit) {
      direction === "derecha"
        ? imgPos < limit
          ? setImgPos(imgPos + 1)
          : setImgPos(1)
        : imgPos > 1
        ? setImgPos(imgPos - 1)
        : setImgPos(limit);
    }
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
              handleImgMove(
                "izquierda",
                imgs ? imgs[productPos].length - 1 : 4
              );
              setDireccion("izquierda");
            }}
          ></button>
          <img
            src={
              isLoading
                ? "./assets/images/loading-img.gif"
                : imgs
                ? imgs[productPos][imgPos]
                : ""
            }
            alt="product"
            className="gdeskimg animate__animated animate__faster"
          />
          <button
            aria-label="move right"
            className="gdskbtn scnd"
            onClick={() => {
              handleImgMove("derecha", imgs ? imgs[productPos].length - 1 : 4);
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
            src={
              isLoading
                ? "./assets/images/loading-img.gif"
                : imgs
                ? imgs[productPos][0]
                : "./assets/images/image-product-1-thumbnail.jpg"
            }
            alt="thumbnail"
            className="littleimage"
            onClick={() => setImgPos(0)}
          />
          <img
            src={
              isLoading
                ? "./assets/images/loading-img.gif"
                : imgs
                ? imgs[productPos][1]
                : "./assets/images/image-product-1-thumbnail.jpg"
            }
            alt="thumbnail"
            className="littleimage"
            onClick={() => setImgPos(1)}
          />
          <img
            src={
              isLoading
                ? "./assets/images/loading-img.gif"
                : imgs
                ? imgs[productPos][2]
                : "./assets/images/image-product-1-thumbnail.jpg"
            }
            alt="thumbnail"
            className="littleimage"
            onClick={() => setImgPos(2)}
          />
          <img
            src={
              isLoading
                ? "./assets/images/loading-img.gif"
                : imgs
                ? imgs[productPos][3]
                : "./assets/images/image-product-1-thumbnail.jpg"
            }
            alt="thumbnail"
            className="littleimage"
            onClick={() => setImgPos(3)}
          />
        </div>
      </section>
    </div>
  );
};
