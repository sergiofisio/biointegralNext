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

export default function ContactForm({
  setShowModal,
}: {
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
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
  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();
    try {
      setDisabled(true);
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTATO,
        {
          nome: form.name,
          email: form.email,
          telefone: form.phone,
          mensagem: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER
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
      setShowModal({ type: "", info: { name: "", img: "", modal: [] } });
      setDisabled(false);
    } catch (error: any) {
      console.log({ error });

      setDisabled(false);
      toastfy("error", error.message, 3000, "bg-red-500");
    }
  }
  return (
    <form className="flex flex-col items-center justify-between w-full h-full gap-4">
      <h2>
        Caso queira alguma contato, envie aqui sua mensagem que responderemos o
        mais rapido o possivel
      </h2>
      <div className="flex flex-col w-full h-full gap-4">
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
        onClick={handleSubmit}
        className="w-1/2 border-blue md:h-fit"
        disabled={disabled}
      />
    </form>
  );
}
