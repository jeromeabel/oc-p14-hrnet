type ColumnProps = {
  label: string;
};

const T_HeadColumn = ({ label }: ColumnProps) => {
  return <th className="px-0 py-4">{label}</th>;
};

export default T_HeadColumn;
