import { useState } from "react";
import Purchase from "./components/Purchase";
import Sale from "./components/Sale";

function App() {
  const [psselect, setpsselect] = useState("purchase");

  function addPurchase() {
    setpsselect("purchase");
  }

  function addSale() {
    setpsselect("sale");
  }

  return (
    <div className="container grid gap-4 my-4">
      <h1 className="text-center text-4xl">GFO ERP</h1>

      <form action="" className="w-100 ">
        <div className="flex gap-8 w-100 justify-center">
          <label>
            <input
              type="radio"
              name="option"
              value="option1"
              onClick={addPurchase}
            />{" "}
            Purchase
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option2"
              onClick={addSale}
            />{" "}
            Sale
          </label>
        </div>
      </form>

      {psselect == "purchase" ? <Purchase /> : <Sale />}
    </div>
  );
}

export default App;
