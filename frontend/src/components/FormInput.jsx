const FormInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded-md"
      />
    </div>
  );
};

export default FormInput;