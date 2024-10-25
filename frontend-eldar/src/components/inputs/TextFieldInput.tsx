import { TextField, TextFieldProps } from "@mui/material";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
  Path,
  FieldError,
} from "react-hook-form";

interface TextFieldInputProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name" | "error"> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
}

export const TextFieldInput = <T extends FieldValues>({
  control,
  name,
  rules,
  error,
  ...restProps
}: TextFieldInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          autoComplete="off"
          error={Boolean(error)}
          helperText={error?.message}
          {...restProps}
          {...field}
          variant="outlined"
        />
      )}
    />
  );
};
