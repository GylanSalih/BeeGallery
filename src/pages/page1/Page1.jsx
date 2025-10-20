import React from 'react';


// import Components
import Cards from "../../components/card/Cards"
// import Muster from "../../components/muster/Muster"

export default function Page1() {
 

  return (
    <div className="app">
        <Cards title="hey" />
        <Cards />
        <Cards />
        <Cards />

        {/* <Muster /> */}
    </div>
  );
}