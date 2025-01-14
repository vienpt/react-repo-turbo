import { Input } from "@repo/shadcn/components/ui/input";

interface InputSearchProps {
  query: string;
  setQuery: (str: string) => void;
  onFocus: () => void;
}
export default function InputSearch({
  query,
  setQuery,
  onFocus,
}: InputSearchProps) {
  return (
    <Input
      value={query}
      onFocus={onFocus}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
}
