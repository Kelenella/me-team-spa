import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container";
import Loader from "./components/Loader";
import "./App.css";

const MainPage = lazy(() => import("./_pages/MainPage"));
const FavoritesPage = lazy(() => import("./_pages/FavoritesPage"));
const DetailsPage = lazy(() => import("./_pages/DetailsPage"));

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/me-team-spa" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
