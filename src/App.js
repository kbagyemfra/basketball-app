import { Route, Routes } from "react-router-dom";
import CopyRight from "./components/Footer/CopyRight";
import SocialMedia from "./components/Footer/SocialMedia";
import GlobalContextProvider from "./context/global";
import Home from "./pages/Home";
import Player from "./pages/Player";

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player/:id" element={<Player />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
        <footer className="footer">
          <SocialMedia />
          <CopyRight />
        </footer>
      </GlobalContextProvider>
    </>
  );
};

export default App;
