import React from "react";
import PartyList from "./PartyList";
import axios from "axios";
function Purchase() {
  function submitPurchaseData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data);
    const reqUrl =
      "https://gfoerp-mern-api.vercel.app/Purchase/";

    axios
      .post(req, data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // If the status code is in the success range (200-299), the request was successful
          console.log("Request successful:", response.data);
          alert(`Data Saved Successfully in db`);
        }
      })
      .catch((error) => {
        // Handle errors (non-2xx status codes or network errors)
        console.error("Request failed:", error.response || error.message);
        alert(`Failure:${error}`);
      });
  }

  return (
    <form
      className="w-4/5 mx-auto md:w-1/2 grid gap-4 mb-4"
      onSubmit={submitPurchaseData}
    >
      <PartyList/>

      <div className="grid gap-2">
        <label htmlFor="Quantity">Quantity (LTr) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="quantity"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="FAT">FAT (%) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="fat"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="clr">CLR :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="clr"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="alchol">Alchol (%) :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="alchol"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="acidity">Acid :</label>
        <input
          type="text"
          className="border-2 h-10 rounded-md px-3"
          name="acidity"
        />
      </div>

      <div className="grid gap-2">
        <h1>Adulteration:</h1>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="adulteration" value="Yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="adulteration" value="No" />
            No
          </label>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="timeStamp">TimeStamp :</label>
        <input
          type="date"
          className="border-2 h-10 rounded-md px-3"
          name="timeStamp"
        />
      </div>

      <div className="grid gap-2">
        <h1>What to do?:</h1>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="whatToDo" value="Accept" />
            Accept
          </label>
          <label>
            <input type="radio" name="whatToDo" value="Reject" />
            Reject
          </label>
        </div>
      </div>

      <button
        className="border-2 w-fit self-start px-6 py-2 rounded-lg bg-blue-600 text-white font-bold"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default Purchase;
