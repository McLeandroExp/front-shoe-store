import { useEffect, useState } from "react";
import { useScreenWidthHeight } from "../hooks/useScreenWidthHeight";
import { Gallery } from "../components/gallery/Gallery";
import { CommerceInfo } from "../components/commerceInfo/CommerceInfo";
import { Buycard } from "../components/buycard/Buycard";
import { GalleryDskActive } from "../components/gallery/GalleryDskActive";
import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../helpers/queries";
import { IProducto } from "../types/models";

export const LandingPage = () => {
  const minScreenWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showDSKG, setShowDSKG] = useState<boolean>(false);
  const [productPos, setProductPos] = useState(0);
  return (
    <>
      <main className="page__content">
        <Gallery
          setShowDSKG={setShowDSKG}
          productPos={productPos}
          setProductPos={setProductPos}
        />
        <CommerceInfo
          setShowCard={setShowCard}
          productPos={productPos}
          setProductPos={setProductPos}
        />
      </main>
      {showCard && <Buycard setShowCard={setShowCard} />}
      {screenWidth >= minScreenWidth && showDSKG && (
        <GalleryDskActive setShowDSKG={setShowDSKG} />
      )}
    </>
  );
};
