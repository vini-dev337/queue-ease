const DropDown = ({ label, id, options, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold text-slate-500 pl-3">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-800"
      >
        {options.map((option, index) => (
          // the first option is the placeholder, so its value is empty ("nothing chosen")
          <option key={option} value={index === 0 ? "" : option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;