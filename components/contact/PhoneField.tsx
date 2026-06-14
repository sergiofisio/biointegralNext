"use client";

import { useId, useState } from "react";
import PhoneInput from "react-phone-number-input";
import pt from "react-phone-number-input/locale/pt.json";
import "react-phone-number-input/style.css";

export function PhoneField() {
  const id = useId();
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
        onChange={setPhone}
        countryCallingCodeEditable={false}
        className="contact-phone-input"
        numberInputProps={{
          required: true,
          "aria-required": true,
        }}
      />
      <input type="hidden" name="telefone" value={phone ?? ""} />
    </div>
  );
}
