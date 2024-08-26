import { Outlet } from "react-router-dom";
import { Header, Main, Footer } from "../../components";

import { useAppContext } from "../../hooks";
// import { useContext } from "react";
// import { AppContext } from "../../contexts";

export function LayoutPadrao() {
  // const { autor } = useContext(AppContext);
  const { autor } = useAppContext();

  return (
    <>
      <Header />
      <Main>
        {/* O Outlet deve ser utilizado na rota principal para que os elementos nas sub rotas sejam renderizando. Isso permite que os elementos visuais sejam renderizados dentro do layout. */}
        <Outlet />
      </Main>
      <Footer autor={autor} />
    </>
  );
}
