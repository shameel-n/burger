import React from "react";
import Layout from "./componets/Layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        test
      </Layout>
    </div>
  );
}

export default App;
