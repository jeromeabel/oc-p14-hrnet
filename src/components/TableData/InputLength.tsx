type InputLengthProps = {
  onChange: (length: number) => void;
};

const InputLength = ({ onChange }: InputLengthProps) => {
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
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>25</option>
      </select>
      <span>entries</span>
    </div>
  );
};

export default InputLength;

/* <option value="0">All</option> 10 25 50 100 */
