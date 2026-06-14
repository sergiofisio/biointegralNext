"use client";

import { useId, useState } from "react";
import PhoneInput from "react-phone-number-input";
import pt from "react-phone-number-input/locale/pt.json";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";
import { FieldError } from "@/components/contact/FieldError";

type PhoneFieldProps = {
  error?: string;
  onClearError?: () => void;
};

export function PhoneField({ error, onClearError }: PhoneFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2"
      >
        Telefone
      </label>
      <PhoneInput
        id={id}
        name="telefone-display"
        international
        defaultCountry="BR"
        labels={pt}
        value={phone}
        onChange={(value) => {
          setPhone(value);
          onClearError?.();
        }}
        countryCallingCodeEditable={false}
        className={cn("contact-phone-input", error && "contact-phone-input--error")}
        numberInputProps={{
          required: true,
          "aria-required": true,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? errorId : undefined,
        }}
      />
      <input type="hidden" name="telefone" value={phone ?? ""} />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
