"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { SatisfacaoFormState } from "../../../interfaces/interface";
import { showToast } from "../../../functions/toast";
import Input from "../../inputs/input";
import InputSelect from "../../inputs/select";
import Button from "../../button";

export default function SatisfacaoForm() {
  const [form, setForm] = useState<SatisfacaoFormState>({
    name: {
      question: "Nome Completo *",
      value: "",
      type: "text",
      error: false,
      required: true,
    },
    email: {
      question: "E-mail *",
      value: "",
      type: "email",
      error: false,
      required: true,
    },
    terapist: {
      question: "Qual o nome do profissional que te atendeu? *",
      options: ["", "Dra. Fresia Sá", "Dr. Sergio Bastos"],
      value: "",
      type: "text",
      error: false,
      required: true,
    },
    grade: {
      question: "Qual a sua avaliação do tratamento *",
      options: ["", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      value: "",
      error: false,
      required: true,
    },
    comment: {
      question: "Deixe aqui o seu comentário",
      value: "",
      type: "textarea",
      error: false,
      required: false,
    },
    testmonial: {
      question: "Gostaria de deixar um depoimento?",
      value: "",
      type: "textarea",
      error: false,
      required: false,
    },
  });

  const verifyForm = () => {
    let isValid = true;
    const updatedForm: SatisfacaoFormState = { ...form };

    (Object.keys(updatedForm) as Array<keyof SatisfacaoFormState>).forEach(
      (key) => {
        const field = updatedForm[key];

        if (field.required && !field.value) {
          field.error = true;
          isValid = false;
        } else {
          field.error = false;
        }
      }
    );

    setForm(updatedForm);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!verifyForm()) {
        throw new Error("Todos os campos com * são obrigatórios.");
      }
      await emailjs.send(
        process.env.VITE_EMAILJS_SERVICE,
        process.env.VITE_EMAILJS_TEMPLATE_SATISFACAO,
        {
          nomeCompleto: form.name.value,
          email: form.email.value,
          profissional: form.terapist.value,
          avaliacao: form.grade.value,
          comentario: form.comment.value,
          depoimento: form.testmonial.value,
        },
        process.env.VITE_EMAILJS_USER
      );
      showToast({
        message: "Formulário enviado com sucesso!",
        type: "success",
        position: "top-right",
        timeout: 3000,
      });
    } catch (error: any) {
      console.error("Erro ao enviar o formulário:", error);
      showToast({
        message: error.message,
        type: "error",
        position: "bottom-center",
        timeout: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col  w-full h-full gap-4 !px-20 !py-8 md:p-2">
      <form className="flex flex-col gap-4 w-full h-full">
        <h1>Questionário de Satisfação</h1>
        <Input
          className="flex flex-col w-full"
          question={form.name}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              name: { ...prev.name, value: e.target.value },
            }));
          }}
        />
        <Input
          className="flex flex-col w-full"
          question={form.email}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              email: { ...prev.email, value: e.target.value },
            }));
          }}
        />
        <InputSelect
          className="flex gap-4 w-full md:w-full"
          question={form.terapist}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              terapist: { ...prev.terapist, value: e.target.value },
            }));
          }}
        />
        <InputSelect
          className="flex gap-4 w-full md:w-full"
          question={form.grade}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              grade: { ...prev.grade, value: e.target.value },
            }));
          }}
        />
        <Input
          className="flex flex-col w-full"
          question={form.comment}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              comment: { ...prev.comment, value: e.target.value },
            }));
          }}
        />
        <Input
          className="flex flex-col w-full"
          question={form.testmonial}
          set={(e: any) => {
            setForm((prev) => ({
              ...prev,
              testmonial: { ...prev.testmonial, value: e.target.value },
            }));
          }}
        />
        <div className="flex items-center justify-center w-full gap-2">
          <Button
            type="submit"
            text="Enviar"
            className="w-full bg-blue hover:text-blue hover:bg-white border-blue"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
