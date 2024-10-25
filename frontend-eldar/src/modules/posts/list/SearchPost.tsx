import { FieldValues, useForm } from "react-hook-form";
import { TextFieldInput } from "../../../components/inputs/TextFieldInput";

interface SearchPostProps {
  handleSearch: (searchTerm: string) => void;
}

export const SearchPost: React.FC<SearchPostProps> = ({ handleSearch }) => {
  const { control } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });
  return (
    <TextFieldInput
      control={control}
      label="Search"
      fullWidth
      size="small"
      name="search"
      rules={{
        onChange: (e) => handleSearch(e.target.value),
      }}
    />
  );
};
