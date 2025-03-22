
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./ApplicationForm";

interface FormFieldProps {
  form: UseFormReturn<FormValues>;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  type?: string;
}

export default function CustomFormField({ 
  form, 
  name, 
  label, 
  placeholder, 
  type = "text" 
}: FormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              type={type} 
              placeholder={placeholder} 
              {...field} 
              value={field.value || ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
