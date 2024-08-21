import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer autor="Rafael" />
    </>
  );
}

export default App;
