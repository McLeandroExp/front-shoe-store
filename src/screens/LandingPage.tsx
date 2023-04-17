import { useContext } from "react";
import { useScreenWidthHeight } from "../hooks/useScreenWidthHeight";
import { Gallery } from "../components/gallery/Gallery";
import { CommerceInfo } from "../components/commerceInfo/CommerceInfo";
import { Buycard } from "../components/buycard/Buycard";
import { GalleryDskActive } from "../components/gallery/GalleryDskActive";
import { EcommerceContext } from "../context/EcommerceContext";

export const LandingPage = () => {
  const minScreenWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const { showDSKG, showCard } = useContext(EcommerceContext);

  return (
    <>
      <main className="page__content">
        <Gallery />
        <CommerceInfo />
      </main>
      {showCard && <Buycard />}
      {screenWidth >= minScreenWidth && showDSKG && <GalleryDskActive />}
    </>
  );
};
