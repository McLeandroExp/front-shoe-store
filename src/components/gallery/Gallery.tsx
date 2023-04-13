import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";
import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../helpers/queries";
import { IProducto } from "../../types/models";

type galleryProps = {
  setShowDSKG: React.Dispatch<React.SetStateAction<boolean>>;
  productPos: number;
  setProductPos: React.Dispatch<React.SetStateAction<number>>;
};
export const Gallery = ({
  setShowDSKG,
  productPos,
  setProductPos,
}: galleryProps) => {
  const { screenWidth } = useScreenWidthHeight();
  const { data: products, isLoading } = useQuery(["getProducts"], getProducts);
  const [imgs, setImgs] = useState<string[][] | undefined>(undefined);
  const [imgPos, setImgPos] = useState(0);

  useEffect(() => {
    setImgs(products?.map((product) => product.imgs));
  }, [products]);

  const handleProdMove = (direction: string, limit: number | undefined) => {
    if (limit) {
      direction === "derecha"
        ? productPos < limit - 1
          ? setProductPos((p) => p + 1)
          : setProductPos(0)
        : productPos > 0
        ? setProductPos((p) => p - 1)
        : setProductPos(limit - 1);
    }
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
          onClick={() => handleProdMove("izquierda", imgs?.length)}
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
          onClick={() => {
            screenWidth >= 780 && setShowDSKG(true);
          }}
          className="galleryimg animate__animated "
        />
        <button
          aria-label="move left"
          className="btn-cambiar-img"
          onClick={() => handleProdMove("derecha", imgs?.length)}
        ></button>
      </div>
      <div className="littleimages">
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
              : "./assets/images/image-product-2-thumbnail.jpg"
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
    </div>
  );
};
