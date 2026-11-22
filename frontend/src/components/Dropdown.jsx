// components/Dropdown.jsx
const Dropdown = ({ label, id, options }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-base font-semibold text-slate-500 pl-3'>
        {label}
      </label>
      <select id={id} className='h-12 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-800'>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown