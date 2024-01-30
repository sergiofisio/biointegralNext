import { useState } from "react";
import InputContact from "../../inputs/contact";
import Button from "../../button";
import { toastfy } from "@/app/functions/toast";
import emailjs from "@emailjs/browser";

interface FormField {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Form = { [K in keyof FormField]: string } & { [key: string]: string };
type HasError = { [K in keyof FormField]: boolean } & {
  [key: string]: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [hasError, sethasError] = useState<HasError>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();
    try {
      let tempError = { ...hasError };
      let hasEmptyField = false;

      for (const field of ["name", "email", "phone", "message"]) {
        if (form[field] === "") {
          tempError = { ...tempError, [field]: true };
          hasEmptyField = true;
        }
      }

      sethasError(tempError);

      if (hasEmptyField) {
        throw new Error("Preencha todos os campos");
      }

      await emailjs.send(
        "service_2mocdp6",
        "template_zisxvxu",
        {
          nome: form.name,
          email: form.email,
          telefone: form.phone,
          mensagem: form.message,
        },
        "XvfhuCuvP_d-Gbx0P"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      sethasError({
        name: false,
        email: false,
        phone: false,
        message: false,
      });
      toastfy("success", "Mensagem enviada com sucesso", 3000, "bg-green");
    } catch (error: any) {
      toastfy("error", error.message, 3000, "bg-red-500");
    }
  }
  return (
    <form className="w-full h-full flex flex-col items-center justify-between gap-4">
      <h2>
        Caso queira alguma contato, envie aqui sua mensagem que responderemos o
        mais rapido o possivel
      </h2>
      <div className="w-full h-full flex flex-col gap-4">
        <InputContact
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={hasError.name}
          onFocus={() => sethasError({ ...hasError, name: false })}
        />
        <InputContact
          label="E-mail"
          type="email"
          placeholder="Digite seu email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={hasError.email}
          onFocus={() => sethasError({ ...hasError, email: false })}
        />
        <InputContact
          label="Telefone"
          type="text"
          mask="(99) 99999-9999"
          placeholder="Digite seu Telefone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          error={hasError.phone}
          onFocus={() => sethasError({ ...hasError, phone: false })}
        />
        <InputContact
          label="Mensagem"
          type="textarea"
          placeholder="Digite sua mensagem"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          error={hasError.message}
          onFocus={() => sethasError({ ...hasError, message: false })}
        />
      </div>
      <Button
        text="Enviar"
        onClick={(e) => handleSubmit(e)}
        className="w-1/2 bg-blue border-blue hover:bg-white hover:text-blue"
      />
    </form>
  );
}
