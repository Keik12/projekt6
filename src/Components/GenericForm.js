import { useState } from "react";
export const GenericForm = ({ title, onButtonPress }) => {
  const [textValue, setTextValue] = useState("");
  const [numericValue, setNumericValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onButtonPress(textValue, numericValue);
    console.log(textValue);
    console.log(numericValue);
  };

  return (
    <form id="revenueForm" onSubmit={handleSubmit}>
      <p>{title || "Przychody"}</p>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Nazwa przychodu"
        name=""
        id="revenueName"
        required
      />
      <input
        type="number"
        value={numericValue}
        onChange={(e) => setNumericValue(e.target.value)}
        placeholder="Kwota"
        name=""
        id="revenueAmount"
        required
        min="0.01"
        step="0.01"
      />
      <button type="submit" className="add">
        Dodaj
      </button>
    </form>
  );
};
