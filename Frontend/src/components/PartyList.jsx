import React from "react";

function PartyList() {
  return (
    <div className="grid gap-2">
      <label htmlFor="Quantity">Party/Client:</label>
      <select id="names" name="names" className="border-2 h-10 rounded-md px-2">
        <option value="john">John</option> <option value="jane">Jane</option>{" "}
        <option value="michael">Michael</option>{" "}
        <option value="emily">Emily</option>{" "}
        <option value="david">David</option>{" "}
        <option value="sarah">Sarah</option>{" "}
        <option value="james">James</option>{" "}
        <option value="laura">Laura</option>{" "}
        <option value="robert">Robert</option>{" "}
        <option value="mary">Mary</option>{" "}
      </select>
      
    </div>
  );
}

export default PartyList;
