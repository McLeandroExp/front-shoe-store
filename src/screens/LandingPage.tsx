import { useContext, useEffect, useState } from "react";
import { useScreenWidthHeight } from "../hooks/useScreenWidthHeight";
import { Gallery } from "../components/gallery/Gallery";
import { CommerceInfo } from "../components/commerceInfo/CommerceInfo";
import { Buycard } from "../components/buycard/Buycard";
import { GalleryDskActive } from "../components/gallery/GalleryDskActive";
import { EcommerceContext } from "../context/EcommerceContext";
import { useQuery } from "react-query";
import { getProducts } from "../helpers/queries";

export const LandingPage = () => {
  const minScreenWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const { showDSKG, showCard } = useContext(EcommerceContext);
  const { data: products, isLoading } = useQuery(["getProducts"], getProducts);
  const [imgs, setImgs] = useState<string[][] | undefined>(undefined);

  useEffect(() => {
    setImgs(products?.map((product) => product.imgs));
  }, [products]);
  return (
    <>
      <main className="page__content">
        <Gallery />
        <CommerceInfo />
      </main>
      {showCard && <Buycard />}
      {screenWidth >= minScreenWidth && showDSKG && (
        <GalleryDskActive imgs={imgs} isLoading={isLoading} />
      )}
    </>
  );
};
