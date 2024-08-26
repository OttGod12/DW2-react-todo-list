import { Route, Routes } from "react-router-dom";

// import { Home } from "./pages/Home";
// import { SobreNos } from "./pages/SobreNos/SobreNos";
// import { Erro404 } from "./pages/Erro404/Erro404";

import { Home, SobreNos, Erro404 } from "./pages";

import { LayoutPadrao } from "./layouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
}
