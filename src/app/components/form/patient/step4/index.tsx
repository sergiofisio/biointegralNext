import InputSelect from "@/app/components/inputs/select";
import { handleInputChange } from "../../../../functions/input";
import Input from "@/app/components/inputs/input";
import { checkForm } from "@/app/functions/check";

export default function Step4({ form, setForm, sethasError, hasError }: any) {
  function verifyInputs() {
    if (!hasError) return;
    if (
      !checkForm(form.step4, [
        "parentsAlive",
        "haveSiblings",
        "relationship",
        "haveKids",
        "moreInfo",
      ])
    ) {
      sethasError(false);
    }
  }
  return (
    <form className="flex flex-col w-full h-full gap-3">
      <h2 className="text-center text-5xl font-bold">
        Sobre os seus relacionamentos
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <InputSelect
            className="flex w-1/4 h-full items-center gap-4"
            question={form.step4.parentsAlive}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step4",
                "parentsAlive",
                e.target.value
              ),
                verifyInputs();
            }}
          />
          {form.step4.parentsAlive.value && (
            <InputSelect
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.parentsAlive.relationship}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "parentsAlive",
                  e.target.value,
                  "relationship"
                ),
                  verifyInputs();
              }}
            />
          )}
        </div>
        {form.step4.parentsAlive.value && (
          <Input
            className="flex w-1/4 h-full items-center gap-4"
            question={form.step4.parentsAlive.description}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step4",
                "parentsAlive",
                e.target.value,
                "description"
              ),
                verifyInputs();
            }}
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <InputSelect
          className="flex w-1/4 h-full items-center gap-4"
          question={form.step4.haveSiblings}
          set={(e: any) => {
            handleInputChange(setForm, "step4", "haveSiblings", e.target.value),
              verifyInputs();
          }}
        />
        {form.step4.haveSiblings.value === "Sim" && (
          <>
            <Input
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.haveSiblings.many}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "haveSiblings",
                  e.target.value,
                  "many"
                ),
                  verifyInputs();
              }}
            />
            <InputSelect
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.haveSiblings.relationship}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "haveSiblings",
                  e.target.value,
                  "relationship"
                ),
                  verifyInputs();
              }}
            />
            <Input
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.haveSiblings.description}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "haveSiblings",
                  e.target.value,
                  "description"
                ),
                  verifyInputs();
              }}
            />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <InputSelect
          className="flex w-1/4 h-full items-center gap-4"
          question={form.step4.relationship}
          set={(e: any) => {
            handleInputChange(setForm, "step4", "relationship", e.target.value),
              verifyInputs();
          }}
        />
        {form.step4.relationship.value && (
          <>
            <Input
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.relationship.description}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "relationship",
                  e.target.value,
                  "description"
                ),
                  verifyInputs();
              }}
            />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <InputSelect
          className="flex w-1/4 h-full items-center gap-4"
          question={form.step4.haveKids}
          set={(e: any) => {
            handleInputChange(setForm, "step4", "haveKids", e.target.value),
              verifyInputs();
          }}
        />
        {form.step4.haveKids.value === "Sim" && (
          <>
            <Input
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.haveKids.many}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "haveKids",
                  e.target.value,
                  "many"
                ),
                  verifyInputs();
              }}
            />
            <InputSelect
              className="flex w-1/4 h-full items-center gap-4"
              question={form.step4.haveKids.abortion}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step4",
                  "haveKids",
                  e.target.value,
                  "abortion"
                ),
                  verifyInputs();
              }}
            />
            {form.step4.haveKids.abortion.value === "Sim" && (
              <Input
                className="flex w-1/4 h-full items-center gap-4"
                question={form.step4.haveKids.abortion.many}
                set={(e: any) => {
                  setForm({
                    ...form,
                    step4: {
                      ...form.step4,
                      haveKids: {
                        ...form.step4.haveKids,
                        abortion: {
                          ...form.step4.haveKids.abortion,
                          many: {
                            ...form.step4.haveKids.abortion.many,
                            value: e.target.value,
                          },
                        },
                      },
                    },
                  });
                }}
              />
            )}
          </>
        )}
        {form.step4.haveKids.value && (
          <Input
            className="flex w-1/4 h-full items-center gap-4"
            question={form.step4.haveKids.description}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step4",
                "haveKids",
                e.target.value,
                "description"
              ),
                verifyInputs();
            }}
          />
        )}
      </div>
      <Input
        className=""
        question={form.step4.moreInfo}
        set={(e: any) => {
          handleInputChange(setForm, "step4", "moreInfo", e.target.value),
            verifyInputs();
        }}
      />
    </form>
  );
}
