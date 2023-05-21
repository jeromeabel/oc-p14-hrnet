import T_HeadColumn from './T_HeadColumn';

type ItemValue = number | string | Date | boolean;

type TableDataProps<
  TItem extends Record<string, ItemValue>,
  THeader extends Record<string, string>
> = {
  data: TItem[];
  headers: THeader[];
};

const TableData = <
  TItem extends Record<string, ItemValue>,
  THeader extends Record<string, string>
>({
  data,
  headers,
}: TableDataProps<TItem, THeader>) => {
  return (
    <div className="my-8">
      <table className="w-full my-8">
        <thead className="border-b">
          <tr>
            {headers.map((col, index) => (
              <T_HeadColumn key={index} label={col.label} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <td key={key}>{String(item[key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
