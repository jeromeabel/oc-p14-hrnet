import { SortOrderType, RecordItemType } from './TableData';

const sortData = (
  data: RecordItemType[],
  key: string,
  order: SortOrderType
): RecordItemType[] => {
  const newData = [...data].sort((a, b) => {
    return a[key] < b[key] ? 1 : -1; // desc order
  });

  if (order === 'asc') newData.reverse();

  return newData;
};

export default sortData;
