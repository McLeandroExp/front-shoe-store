import { ButtonMenu } from "./components/menu/ButtonMenu";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/menu/Menu";
import { EcommerceProvider } from "./context/EcommerceProvider";
import { useScreenWidthHeight } from "./hooks/useScreenWidthHeight";
import { Gallery } from "./components/gallery/Gallery";
import { CommerceInfo } from "./components/commerceInfo/CommerceInfo";
import { Buycard } from "./components/buycard/Buycard";
import { useState } from "react";
import { GalleryDskActive } from "./components/gallery/GalleryDskActive";

function EcommerceApp() {
  const minScreenWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showDSKG, setShowDSKG] = useState<boolean>(false);
  return (
    <EcommerceProvider>
      <div className="E-commerceApp">
        <Header showCard={showCard} />
        {screenWidth < minScreenWidth && <ButtonMenu />}
        {screenWidth < minScreenWidth && <Menu />}
        <main className="page__content">
          <Gallery setShowDSKG={setShowDSKG} />
          <CommerceInfo setShowCard={setShowCard} />
        </main>
        {showCard && <Buycard setShowCard={setShowCard} />}
        {screenWidth >= minScreenWidth && showDSKG && (
          <GalleryDskActive setShowDSKG={setShowDSKG} />
        )}
      </div>
    </EcommerceProvider>
  );
}

export default EcommerceApp;
