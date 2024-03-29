import { ComponentProps } from "react";
import { FieldValues } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./Utils";

type FieldWrapperProps<TFormValues extends FieldValues> = Omit<
  ComponentProps<typeof FormField<TFormValues>>,
  "render"
> & {
  label?: string;
  description?: string;
  children: ComponentProps<typeof FormField<TFormValues>>["render"];
};

export const FieldWrapper = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  children,
  label,
  description,
  ...props
}: FieldWrapperProps<TFormValues>) => {
  return (
    <FormField
      {...props}
      render={(methods) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{children(methods)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
