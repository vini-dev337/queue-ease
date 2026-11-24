import { useState } from "react";
import DropDown from "./DropDown";

const SearchCard = () => {
  const [hospital, setHospital] = useState("");
  const [test, setTest] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!hospital || !test || !date) {
      console.log("Please choose a hospital, a test and a date");
      return;
    }
    console.log({ hospital, test, date });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <DropDown
          label="Hospital"
          id="hospital"
          options={["Select hospital", "Hospital 1", "Hospital 2"]}
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
        />
        <DropDown
          label="Test"
          id="test"
          options={["Select test", "Ultrasound", "X-ray", "Blood test"]}
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-base font-semibold text-slate-500 pl-3">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-800"
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 h-12 w-full rounded-lg bg-blue-500 font-bold text-white"
      >
        Search
      </button>
    </>
  );
};

export default SearchCard;