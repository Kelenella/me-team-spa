import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import PublicRoute from "./routes/publicRouter";

const HomePage = lazy(() =>
  import("./_pages/HomePage" /* webpackChunkName: "home-page" */)
);

function App() {
  return <></>;
}

export default App;
