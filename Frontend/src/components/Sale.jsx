import React from "react";
import PartyList from "./PartyList";
import axios from "axios";

function Sale() {
  const Items = [
    "Full Cream (500 ml)",
    "Full Cream (400 ml)",
    "TONED Milk (500ML)",
    "TONED Milk (400 ml)",
    "DTM (500 ml)",
    "DTM (400 ml)",
    "DTM Bacha(170 ml)",
    "Family Pack (450 ml)",
    "Cow Milk (500 ml)",
    "Cow Milk (350 ml)",
    "Buffalo Milk (1 L)",
    "Buffalo Milk (500 ml)",
    "Dahi Lite (400 gm)",
    "Dahi lite (160 gm)",
    "plain Chach (300 ml)",
    "Masala Chach (300 ml)",
  ];

  function submitSalesData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    let quantity = {};
    formData.forEach((value, key) => {
      if (
        key == "dateOfDispatchAndTime" ||
        key == "dateOfOrder" ||
        key == "clientName"
      ) {
        data[key] = value;
      } else {
        quantity[key] = value;
      }
    });
    data[`quantity`]=quantity;
    console.log(data);
    const reqUrl = "https://gfoerp-mern-api.vercel.app/Sales/";

    axios
      .post(reqUrl, data)
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
      onSubmit={submitSalesData}
    >
      <PartyList />

      <div className="grid gap-2">
        <label htmlFor="dateOfOrder">Date of Order:</label>
        <input
          type="date"
          className="border-2 h-10 rounded-md px-3"
          name="dateOfOrder"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="dateOfDispatchAndTime">
          Date of Dispatch and Time:
        </label>
        <input
          type="datetime-local"
          className="border-2 h-10 rounded-md px-3"
          name="dateOfDispatchAndTime"
        />
      </div>

      <div className="grid gap-2">
        <h1 className="text-3xl text-center">Quantity</h1>

        {Items.map((item) => (
          <div className="grid gap-2" key={item}>
            <label htmlFor={item}>{`${item} :`}</label>
            <input
              type="text"
              className="border-2 h-10 rounded-md px-3"
              name={item}
            />
          </div>
        ))}
      </div>

      <button
        className="border-2 w-fit self-start px-6 py-2 rounded-lg bg-blue-600 text-white font-bold "
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default Sale;
