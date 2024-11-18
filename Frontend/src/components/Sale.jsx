import React from "react";
import PartyList from "./PartyList";
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

  const submitSalesData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    console.log(data);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzk2A-A8Dy3JLInqxl1Wy1XlOjJIQexgdVkLr76RhU89IbMEDLVKjLHbhIQq7QJBHVi/exec"; 
      // your Google Apps Script URL
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",  // Send JSON content
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (result.status === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <form
      className="w-4/5 mx-auto md:w-1/2 grid gap-4 mb-4"
      onSubmit={submitSalesData}
    >
      <PartyList />

      <div className="grid gap-2">
        <label htmlFor="Date of order">Date of Order:</label>
        <input
          type="date"
          className="border-2 h-10 rounded-md px-3"
          name="Date of order"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="Date of dispatch and time">
          Date of Dispatch and Time:
        </label>
        <input
          type="datetime-local"
          className="border-2 h-10 rounded-md px-3"
          name="Date of dispatch and time"
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
