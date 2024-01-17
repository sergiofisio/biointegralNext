export default function Step3({ form, setForm, sethasError, hasError }: any) {
  function verifyInputs(key: number, value: string) {
    if (!hasError) return;

    if (value) {
      form.step3[key].error = false;
    }

    form.step3.forEach((question: any) => {
      if (question.error) {
        sethasError(true);
        return;
      }
      sethasError(false);
    });
  }
  return (
    <form className="flex flex-col w-full h-full gap-3">
      <h2 className="text-center text-5xl font-bold">Sobre sua saúde mental</h2>
      {form.step3.map((question: any, key: number) => {
        return (
          <div key={key}>
            <label className="uppercase w-full">{question.question}</label>
            <select
              name="question"
              id="question"
              required={question.required}
              className={`${
                question.error ? "border-red-500" : "border-black"
              } w-fit flex border-black border-2 border-solid rounded-3xl`}
              onChange={(e: any) => {
                setForm((prevForm: any) => ({
                  ...prevForm,
                  step3: [
                    ...prevForm.step3.slice(0, key),
                    {
                      ...prevForm.step3[key],
                      value: e.target.value,
                    },
                    ...prevForm.step3.slice(key + 1),
                  ],
                }));
                verifyInputs(key, e.target.value);
              }}
            >
              {question.options.map((option: any, key: number) => {
                return (
                  <option className="text-black" key={key} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </form>
  );
}
