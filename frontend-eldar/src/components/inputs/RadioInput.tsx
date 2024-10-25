import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

// Define la interfaz para las opciones
interface Option {
  value: string | number; // Ajusta según tus necesidades
  label: string;
}

interface RadioInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: Option[];
  label?: string; // Añadir la propiedad para la etiqueta del grupo
}

export const RadioInput = <T extends FieldValues>({
  control,
  name,
  options,
  label,
}: RadioInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <RadioGroup {...field} row>
            {options.map(({ value, label }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
