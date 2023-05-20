type ColumnProps = {
  label: string;
};

const TableHeaderColumn = ({ label }: ColumnProps) => {
  return <th className="p-4 border">{label}</th>;
};

export default TableHeaderColumn;
