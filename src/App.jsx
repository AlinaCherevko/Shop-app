//import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense, lazy } from "react";

const Shop = lazy(() => import("../src/pages/Shop/Shop"));
const Basket = lazy(() => import("../src/pages/Basket/Basket"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/cards" element={<Basket />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
