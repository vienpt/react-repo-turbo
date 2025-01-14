interface ListItemsProps {
  data: string[];
  onSelectItem: (item: string) => void;
}

export default function ListItems({ data, onSelectItem }: ListItemsProps) {
  if (data?.length === 0) return null;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item} onClick={() => onSelectItem(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
