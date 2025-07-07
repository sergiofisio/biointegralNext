import Input from "@/app/components/inputs/input";
import InputSelect from "@/app/components/inputs/select";
import { checkForm } from "@/app/functions/check";
import { handleInputChange } from "@/app/functions/input";
import { handleLocalStorage } from "@/app/functions/localstorage";

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
      <section className="flex w-1/2 gap-4 md:w-full">
        <InputSelect
          question={form.step2.physic}
          className="flex w-full h-full items-center gap-4"
          set={(e: any) => {
            handleInputChange(setForm, "step2", "physic", e.target.value),
              verifyInputs(),
              handleLocalStorage("physic", e.target.value);
          }}
        />
      </section>
      <section className="flex gap-4 md:flex-col">
        <InputSelect
          question={form.step2.infection}
          className="flex w-1/4 h-full items-center gap-4 md:w-full"
          set={(e: any) => {
            handleInputChange(setForm, "step2", "infection", e.target.value),
              verifyInputs(),
              handleLocalStorage("infection", e.target.value);
          }}
        />
        {form.step2.infection.value === "Sim" && (
          <InputSelect
            question={form.step2.infection.typeOf}
            className="flex w-1/4 h-full items-center gap-4 md:w-full"
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step2",
                "infection",
                e.target.value,
                "typeOf"
              ),
                verifyInputs(),
                handleLocalStorage("infection.type", e.target.value);
            }}
          />
        )}
      </section>
      <section className="flex gap-4 md:flex-col">
        <InputSelect
          question={form.step2.pain}
          className={`flex h-full items-center gap-4 md:w-full ${
            form.step2.pain.value === "Sim" ? "w-1/3" : "w-1/4"
          }`}
          set={(e: any) => {
            handleInputChange(setForm, "step2", "pain", e.target.value),
              verifyInputs(),
              handleLocalStorage("pain", e.target.value);
          }}
        />
        {form.step2.pain.value === "Sim" && (
          <div className="w-full">
            <Input
              className="flex w-1/4 items-center gap-4 md:w-full"
              question={form.step2.pain.cause}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "cause"
                ),
                  verifyInputs(),
                  handleLocalStorage("pain.cause", e.target.value);
              }}
            />
            <InputSelect
              className="flex w-1/4 items-center gap-4 md:w-full"
              question={form.step2.pain.dayTime}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "dayTime"
                ),
                  verifyInputs(),
                  handleLocalStorage("pain.dayTime", e.target.value);
              }}
            />
            <InputSelect
              className="flex w-1/4 items-center gap-4 md:w-full"
              question={form.step2.pain.edema}
              set={(e) => {
                handleInputChange(
                  setForm,
                  "step2",
                  "pain",
                  e.target.value,
                  "edema"
                ),
                  verifyInputs(),
                  handleLocalStorage("pain.edema", e.target.value);
              }}
            />
          </div>
        )}
      </section>
      <InputSelect
        className="flex w-1/4 h-full items-center gap-4 md:w-full"
        question={form.step2.autoimune}
        set={(e) => {
          handleInputChange(setForm, "step2", "autoimune", e.target.value),
            verifyInputs(),
            handleLocalStorage("autoimune", e.target.value);
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
            const selected: string[] = form.step2.simptomes.value as string[];
            return (
              <label key={key} className="capitalize cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e: any) => {
                    const value = e.target.value;
                    const newSelected = e.target.checked
                      ? [...selected, value]
                      : selected.filter((item) => item !== value);
                    handleInputChange(
                      setForm,
                      "step2",
                      "simptomes",
                      newSelected
                    ),
                      verifyInputs(),
                      handleLocalStorage(
                        "simptomes",
                        JSON.stringify(newSelected)
                      );
                  }}
                  checked={selected.includes(option)}
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
