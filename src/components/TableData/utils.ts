import { SortOrderType, RecordItemType } from './TableData';

export const sortData = <TItem>(
  data: TItem[],
  key: keyof TItem,
  order: SortOrderType
): TItem[] => {
  const newData = [...data].sort((a, b) => {
    return a[key] < b[key] ? 1 : -1; // desc order
  });
  if (order === 'asc') {
    newData.reverse();
  }
  return newData;
};

export const filterDataByLength = <TItem>(
  data: TItem[],
  length: number
): TItem[] => {
  // return data.filter((item) => item.name.length === length);
  return [...data].slice(0, length);
};

// Loop through each properties of the object TItem
export const filterDataBySearch = <TItem extends RecordItemType>(
  data: TItem[],
  searchTerm: string
): TItem[] => {
  return data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};
