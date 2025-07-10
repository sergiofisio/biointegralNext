import { useState } from "react";
import { showToast } from "../../../functions/toast";
import InputContact from "../../inputs/contact";
import Button from "../../button";
import emailjs from "@emailjs/browser";

interface FormField {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Form = { [K in keyof FormField]: string };
type HasError = { [K in keyof FormField]: boolean };

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      setDisabled(true);
      let tempError = { ...hasError };
      let hasEmptyField = false;

      for (const fieldKey of Object.keys(form) as Array<keyof FormField>) {
        if (form[fieldKey].trim() === "") {
          tempError = { ...tempError, [fieldKey]: true };
          hasEmptyField = true;
        }

        if (
          fieldKey === "phone" &&
          form.phone.includes("_") &&
          form.phone.replace(/[^0-9]/g, "").length < 10
        ) {
          tempError = { ...tempError, phone: true };
          hasEmptyField = true;
        }
      }

      sethasError(tempError);

      if (hasEmptyField) {
        throw new Error("Preencha todos os campos corretamente.");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTATO,
        {
          nome: form.name,
          email: form.email,
          telefone: form.phone,
          mensagem: form.message,
        },
        import.meta.env.VITE_EMAILJS_USER
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
      showToast({
        message: "Mensagem enviada com sucesso!",
        type: "success",
        position: "top-right",
        timeout: 3000,
      });
      setShowModal({ type: "", info: { name: "", img: "", modal: [] } });
      setDisabled(false);
    } catch (error: any) {
      console.error({ error });

      setDisabled(false);
      showToast({
        message: error.message || "Ocorreu um erro ao enviar a mensagem.",
        type: "error",
        position: "bottom-center",
        timeout: 3000,
      });
    }
  }

  return (
    <form
      className="flex flex-col items-center justify-between w-full h-full gap-4 !p-4"
      onSubmit={handleSubmit}
    >
      <h2>
        Caso queira algum contato, envie aqui sua mensagem que responderemos o
        mais rápido possível.
      </h2>
      <div className="flex flex-col w-full h-full gap-4">
        <InputContact
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={form.name}
          onChange={(e) => {
            console.log(e.target.value);
            setForm({ ...form, name: e.target.value });
          }}
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
          onChange={(e: any) => {
            setForm({ ...form, phone: e.target.value });
          }}
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
        onClick={handleSubmit} // O onClick do botão deve chamar o handleSubmit
        className="w-1/2 border-blue md:h-fit"
        disabled={disabled}
      />
    </form>
  );
}
