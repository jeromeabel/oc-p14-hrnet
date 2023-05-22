import React from 'react';
import { ItemValueType, RecordItemType } from './TableData';

type TableCellProps = {
  item: RecordItemType;
  keyName: string;
};

const TableCell: React.FC<TableCellProps> = ({ item, keyName }) => {
  const renderCellValue = (value: ItemValueType) => {
    if (typeof value !== 'object' || !(value instanceof Date)) {
      return String(value);
    } else {
      return value.toLocaleString().split(' ')[0];
    }
  };

  return <td>{renderCellValue(item[keyName])}</td>;
};

export default TableCell;
