import Input from "@/app/components/inputs/input";
import InputSelect from "@/app/components/inputs/select";
import { checkForm } from "@/app/functions/check";
import { handleInputChange } from "@/app/functions/input";

export default function Step2({ form, setForm, sethasError, hasError }: any) {
  function verifyInputs() {
    if (!hasError) return;
    if (
      !checkForm(form.step2, [
        "physic",
        "infection",
        "pain",
        "autoimune",
        "simptomes",
      ])
    ) {
      sethasError(false);
    }
  }

  return (
    <form className="flex flex-col w-full h-full gap-3">
      <h2 className="text-center text-5xl font-bold">SOBRE SUA SAÚDE FÍSICA</h2>
      <section className="flex w-1/2 gap-4">
        <InputSelect
          question={form.step2.physic}
          className="flex w-full h-full items-center gap-4"
          set={(e: any) => {
            handleInputChange(setForm, "step2", "physic", e.target.value),
              verifyInputs();
          }}
        />
      </section>
      <section className="flex gap-4">
        <InputSelect
          question={form.step2.infection}
          className="flex w-1/4 h-full items-center gap-4"
          set={(e: any) => {
            handleInputChange(setForm, "step2", "infection", e.target.value),
              verifyInputs();
          }}
        />
        {form.step2.infection.value === "Sim" && (
          <InputSelect
            question={form.step2.infection.typeOf}
            className="flex w-1/4 h-full items-center gap-4"
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step2",
                "infection",
                e.target.value,
                "typeOf"
              ),
                verifyInputs();
            }}
          />
        )}
      </section>
      <section className="flex gap-4">
        <InputSelect
          question={form.step2.pain}
          className={`flex h-full items-center gap-4 ${
            form.step2.pain.value === "Sim" ? "w-1/3" : "w-1/4"
          }`}
          set={(e: any) => {
            handleInputChange(setForm, "step2", "pain", e.target.value),
              verifyInputs();
          }}
        />
        {form.step2.pain.value === "Sim" && (
          <div className="w-full">
            <Input
              className="flex w-1/4 items-center gap-4"
              question={form.step2.pain.cause}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "cause"
                ),
                  verifyInputs();
              }}
            />
            <InputSelect
              className="flex w-1/4 items-center gap-4"
              question={form.step2.pain.dayTime}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "dayTime"
                ),
                  verifyInputs();
              }}
            />
            <InputSelect
              className="flex w-1/4 items-center gap-4"
              question={form.step2.pain.edema}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "edema"
                ),
                  verifyInputs();
              }}
            />
          </div>
        )}
      </section>
      <InputSelect
        className="flex w-1/4 h-full items-center gap-4"
        question={form.step2.autoimune}
        set={(e) => {
          handleInputChange(setForm, "step2", "autoimune", e.target.value),
            verifyInputs();
        }}
      />
      <section className="flex gap-3">
        <label className="flex flex-col">{form.step2.simptomes.question}</label>
        <div
          className={`flex flex-col justify-evenly min-w-fit border-2 border-solid ${
            form.step2.simptomes.error
              ? "border-red-500 rounded-xl"
              : "border-none"
          }`}
        >
          {form.step2.simptomes.options.map((option: string, key: number) => {
            return (
              <label key={key} className="capitalize cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e: any) => {
                    const selected = form.step2.simptomes.value;
                    if (e.target.checked) {
                      selected.push(e.target.value);
                    } else {
                      if (selected.indexOf(e.target.value) > -1)
                        selected.splice(selected.indexOf(e.target.value), 1);
                    }
                    {
                      handleInputChange(
                        setForm,
                        "step2",
                        "simptomes",
                        selected
                      ),
                        verifyInputs();
                    }
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>
      </section>
    </form>
  );
}
