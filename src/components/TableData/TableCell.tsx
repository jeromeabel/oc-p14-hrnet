import { ItemValueType, RecordItemType } from './TableData';

type TableCellProps = {
  item: RecordItemType;
  keyName: string;
};

const TableCell = ({ item, keyName }: TableCellProps) => {
  const renderCellValue = (value: ItemValueType) => {
    if (typeof value !== 'object' || !(value instanceof Date)) {
      return String(value);
    } else {
      return value.toLocaleString().split(' ')[0];
    }
  };

  return (
    <td className="whitespace-nowrap">{renderCellValue(item[keyName])}</td>
  );
};

export default TableCell;
