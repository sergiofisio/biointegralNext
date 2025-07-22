import { useState } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "../../../functions/toast";
import Button from "../../button";

export default function SatisfacaoForm() {
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [terapist, setTerapist] = useState({ value: "", error: false });
  const [grade, setGrade] = useState({ value: "", error: false });
  const [comment, setComment] = useState({ value: "", error: false });
  const [testmonial, setTestmonial] = useState({ value: "", error: false });

  const verifyField = (
    field: { value: string; error: boolean },
    setField: any,
    required = true
  ) => {
    if (required && !field.value.trim()) {
      setField((prev: any) => ({ ...prev, error: true }));
      return false;
    }
    setField((prev: any) => ({ ...prev, error: false }));
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const isValid =
      verifyField(name, setName) &&
      verifyField(email, setEmail) &&
      verifyField(terapist, setTerapist) &&
      verifyField(grade, setGrade);

    if (!isValid) {
      showToast({
        message: "Todos os campos obrigatórios devem ser preenchidos.",
        type: "error",
        position: "top-center",
        timeout: 3000,
      });
      return;
    }

    try {
      await emailjs.send(
        process.env.VITE_EMAILJS_SERVICE!,
        process.env.VITE_EMAILJS_TEMPLATE_SATISFACAO!,
        {
          nomeCompleto: name.value,
          email: email.value,
          profissional: terapist.value,
          avaliacao: grade.value,
          comentario: comment.value,
          depoimento: testmonial.value,
        },
        process.env.VITE_EMAILJS_USER!
      );

      showToast({
        message: "Formulário enviado com sucesso!",
        type: "success",
        position: "top-right",
        timeout: 3000,
      });

      // resetar todos os campos
      setName({ value: "", error: false });
      setEmail({ value: "", error: false });
      setTerapist({ value: "", error: false });
      setGrade({ value: "", error: false });
      setComment({ value: "", error: false });
      setTestmonial({ value: "", error: false });
    } catch (error: any) {
      console.error("Erro ao enviar o formulário:", error);
      showToast({
        message: "Erro ao enviar. Tente novamente.",
        type: "error",
        position: "bottom-center",
        timeout: 3000,
      });
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setComment({ ...comment, value: e.target.value });
  };

  const handleTestmonialChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTestmonial({ ...testmonial, value: e.target.value });
  };

  return (
    <div className="flex flex-col w-full h-full gap-4 !px-20 !py-8 md:p-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full h-full"
      >
        <h1>Questionário de Satisfação</h1>
        <div className="flex flex-col w-full">
          <label className="uppercase">
            Nome Completo *
            <input
              type="text"
              value={name.value}
              onChange={(e) => setName({ ...name, value: e.target.value })}
              className={`border-2 border-solid rounded-3xl !px-3 h-10 w-full ${
                name.error ? "border-red-500" : "border-black"
              }`}
            />
          </label>
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="uppercase">
            E-mail *
            <input
              type="email"
              value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
              className={`border-2 border-solid rounded-3xl !px-3 h-10 w-full ${
                email.error ? "border-red-500" : "border-black"
              }`}
            />
          </label>
        </div>

        {/* Terapeuta */}
        <div className="flex flex-col w-full">
          <label className="uppercase w-fit flex gap-4">
            Qual o nome do profissional que te atendeu? *
            <select
              value={terapist.value}
              onChange={(e) =>
                setTerapist({ ...terapist, value: e.target.value })
              }
              className={`${
                terapist.error ? "border-red-500" : "border-black"
              }  flex border-black border-2 border-solid rounded-3xl max-h-full h-full !px-3 max-md:h-16`}
            >
              <option value="">Selecione</option>
              <option value="Dra. Fresia Sá">Dra. Fresia Sá</option>
              <option value="Dr. Sergio Bastos">Dr. Sergio Bastos</option>
            </select>
          </label>
        </div>

        {/* Avaliação */}
        <div className="flex gap-4 w-fullW">
          <label className="uppercase w-fit flex gap-4">
            Qual a sua avaliação do tratamento *
            <select
              value={grade.value}
              onChange={(e) => setGrade({ ...grade, value: e.target.value })}
              className={`${
                grade.error ? "border-red-500" : "border-black"
              }  flex border-black border-2 border-solid rounded-3xl max-h-full h-full !px-3 max-md:h-16`}
            >
              <option className="text-black" value="">
                Selecione
              </option>
              {Array.from({ length: 10 }, (_, i) => (
                <option
                  className="text-black"
                  key={i + 1}
                  value={String(i + 1).padStart(2, "0")}
                >
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Comentário */}
        <div className="flex flex-col gap-4 w-full">
          <label className="uppercase">
            Deixe aqui o seu comentário
            <textarea
              value={comment.value}
              onChange={handleCommentChange}
              className={`resize-none overflow-hidden border-2 border-solid rounded-3xl !px-4 !py-2 h-10 w-full ${
                comment.error ? "border-red-500" : "border-black"
              }`}
            />
          </label>
        </div>

        {/* Depoimento */}
        <div className="flex flex-col w-full">
          <label className="uppercase">
            Gostaria de deixar um depoimento?
            <textarea
              value={testmonial.value}
              onChange={handleTestmonialChange}
              className={`resize-none overflow-hidden border-2 border-solid rounded-3xl !px-4 !py-2 h-10 w-full ${
                testmonial.error ? "border-red-500" : "border-black"
              }`}
            />
          </label>
        </div>

        {/* Botão de envio */}
        <div className="flex items-center justify-center w-full gap-2">
          <Button
            type="submit"
            text="Enviar"
            className="w-full bg-blue hover:text-blue hover:bg-white border-blue"
          />
        </div>
      </form>
    </div>
  );
}
