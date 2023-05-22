type InputLengthType = {
  onChange: (length: number) => void;
};

const InputLength = ({ onChange }: InputLengthType) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10); // integer
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  };
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="filterSelect" aria-label="Select the lenght of the data">
        Show:
      </label>
      <select className="p-1" id="filterSelect" onChange={handleChange}>
        <option value="0">All</option>
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default InputLength;
