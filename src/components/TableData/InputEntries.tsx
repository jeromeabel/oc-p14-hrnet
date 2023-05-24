type InputEntriesProps = {
  onChange: (length: number) => void;
};

const InputEntries = ({ onChange }: InputEntriesProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10); // integer
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  };
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="filterSelect" aria-label="Select the number of entries">
        Show:
      </label>
      <select className="p-1" id="filterSelect" onChange={handleChange}>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default InputEntries;
