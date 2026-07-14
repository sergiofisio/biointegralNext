"use client";

import { HONEYPOT_FIELD_NAME } from "@/lib/form-guard";

/** Campo oculto para bots; humanos não o preenchem. */
export function HoneypotField() {
  return (
    <div
      className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
      aria-hidden="true"
    >
      <label htmlFor={HONEYPOT_FIELD_NAME}>Não preencha este campo</label>
      <input
        id={HONEYPOT_FIELD_NAME}
        name={HONEYPOT_FIELD_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
