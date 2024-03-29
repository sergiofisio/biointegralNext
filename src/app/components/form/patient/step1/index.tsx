import Input from "@/app/components/inputs/input";
import InputSelect from "@/app/components/inputs/select";
import { checkForm } from "@/app/functions/check";
import { handleChangeError, handleInputChange } from "@/app/functions/input";
import { toastfy } from "@/app/functions/toast";
import axios from "axios";

export default function Step1({ form, setForm, sethasError, hasError }: any) {
  function calculateAge(e: any) {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (form.step1.birth.value) {
        const today = new Date();
        const birthDate = new Date(form.step1.birth.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        setForm({
          ...form,
          step1: {
            ...form.step1,
            age: { ...form.step1.age, value: age },
          },
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  async function getAdress(cep: string) {
    try {
      if (cep.includes("_")) return;
      cep.replace("-", "");
      console.log(cep);

      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(data);

      if (data.erro) {
        throw new Error("Endereço não encontrado pelo CEP digitado");
      }

      handleInputChange(setForm, "step1", "adress", cep, "zipcode");

      {
        data.logradouro &&
          handleInputChange(
            setForm,
            "step1",
            "adress",
            data.logradouro,
            "street"
          );
      }

      {
        data.bairro &&
          handleInputChange(
            setForm,
            "step1",
            "adress",
            data.bairro,
            "neighborhood"
          );
      }

      {
        data.localidade &&
          handleInputChange(
            setForm,
            "step1",
            "adress",
            data.localidade,
            "city"
          );
      }

      {
        data.uf &&
          handleInputChange(setForm, "step1", "adress", data.uf, "state");
      }
    } catch (error: any) {
      toastfy("error", error.message, 3000, "bg-red-500");
      console.log(error);
    }
  }

  function verifyInputs() {
    if (!hasError) return;
    if (
      !checkForm(form.step1, [
        "name",
        "email",
        "phone",
        "birth",
        "gender",
        "religion",
        "job",
        "knowUs",
        "motive",
        "emotion",
        "emotion.especifique",
        "start",
        "advantage",
        "inconvenient",
        "needs",
        "problemOneWord",
        "adress.street",
        "adress.number",
        "adress.neighborhood",
        "adress.city",
        "adress.state",
        "adress.zipcode",
      ])
    ) {
      sethasError(false);
    }
  }

  return (
    <form className="flex flex-col w-full h-full gap-3">
      <h2 className="text-center text-5xl font-bold">DADOS PESSOAIS</h2>
      <div className="flex w-full gap-4">
        <Input
          className="flex flex-col w-full"
          question={form.step1.name}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "name", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "name", "step1", false), verifyInputs();
          }}
        />
        <InputSelect
          className="flex flex-col w-1/6"
          question={form.step1.gender}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "gender", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "gender", "step1", false),
              verifyInputs();
          }}
        />
      </div>
      <div className="flex w-full gap-4">
        <Input
          className="flex flex-col w-full"
          question={form.step1.email}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "email", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "email", "step1", false), verifyInputs();
          }}
        />
        <Input
          className="flex flex-col w-1/5"
          question={form.step1.birth}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "birth", e.target.value),
              verifyInputs();
          }}
          onBlur={(e) => calculateAge(e)}
          onFocus={() => {
            handleChangeError(setForm, "birth", "step1", false), verifyInputs();
          }}
        />
        <Input
          className="flex flex-col items-center w-1/12"
          question={form.step1.age}
          set={(e: any) =>
            handleInputChange(setForm, "step1", "age", e.target.value)
          }
          disabled
        />
      </div>
      {form.step1.gender.value === "Feminino" && form.step1.age.value >= 10 && (
        <div className="flex w-full gap-4">
          <Input
            className="flex flex-col"
            question={form.step1.ageFirstPeriod}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "ageFirstPeriod",
                e.target.value
              ),
                verifyInputs();
            }}
            onFocus={() => {
              if (!form.step1.ageFirstPeriod.value)
                handleInputChange(setForm, "step1", "ageFirstPeriod", "");
              handleChangeError(setForm, "ageFirstPeriod", "step1", false),
                verifyInputs();
            }}
          />
          {form.step1.age.value >= 35 && (
            <InputSelect
              className="flex flex-col"
              question={form.step1.menopause}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step1",
                  "menopause",
                  e.target.value
                ),
                  verifyInputs();
              }}
              onFocus={() => {
                handleChangeError(setForm, "menopause", "step1", false),
                  verifyInputs();
              }}
            />
          )}
          {form.step1.menopause.value === "Sim" && (
            <Input
              className="flex flex-col"
              question={form.step1.menopause.age}
              set={(e: any) => {
                handleInputChange(
                  setForm,
                  "step1",
                  "menopause",
                  e.target.value,
                  "age"
                ),
                  verifyInputs();
              }}
              onFocus={() => {
                if (!form.step1.ageFirstPeriod.value)
                  handleInputChange(setForm, "step1", "menopause", "", "age");
                handleChangeError(setForm, "menopause", "step1", false, "age"),
                  verifyInputs();
              }}
            />
          )}
        </div>
      )}
      <div className="flex w-full gap-4">
        <Input
          className="flex flex-col"
          question={form.step1.religion}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "religion", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "religion", "step1", false),
              verifyInputs();
          }}
        />
        <Input
          className="flex flex-col"
          question={form.step1.job}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "job", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "job", "step1", false), verifyInputs();
          }}
        />
        <Input
          className="flex flex-col"
          question={form.step1.phone}
          set={(e: any) => {
            handleInputChange(setForm, "step1", "phone", e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "phone", "step1", false), verifyInputs();
          }}
        />
      </div>
      <div className="flex flex-col w-full px-10">
        <h2 className="text-2xl font-bold">Endereço</h2>
        <Input
          className="flex flex-col w-1/12"
          question={form.step1.adress.zipcode}
          set={(e: any) => {
            handleInputChange(
              setForm,
              "step1",
              "adress",
              e.target.value,
              "zipcode"
            ),
              getAdress(e.target.value),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(setForm, "adress", "step1", false, "zipcode"),
              verifyInputs();
          }}
        />
        <div className="flex w-full gap-4">
          <Input
            className="flex flex-col"
            question={form.step1.adress.street}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "street"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              handleChangeError(setForm, "adress", "step1", false, "street"),
                verifyInputs();
            }}
            disabled={form.step1.adress.street.fill}
          />
          <Input
            className="flex flex-col"
            question={form.step1.adress.number}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "number"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              if (!form.step1.adress.number.value)
                handleInputChange(setForm, "step1", "adress", "", "number");

              handleChangeError(setForm, "adress", "step1", false, "number"),
                verifyInputs();
            }}
          />
          <Input
            className="flex flex-col"
            question={form.step1.adress.complement}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "complement"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              handleChangeError(
                setForm,
                "adress",
                "step1",
                false,
                "complement"
              ),
                verifyInputs();
            }}
          />
        </div>
        <div className="flex w-full gap-4">
          <Input
            className="flex flex-col"
            question={form.step1.adress.neighborhood}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "neighborhood"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              handleChangeError(
                setForm,
                "adress",
                "step1",
                false,
                "neighborhood"
              ),
                verifyInputs();
            }}
            disabled={form.step1.adress.street.fill}
          />
          <Input
            className="flex flex-col"
            question={form.step1.adress.city}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "city"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              handleChangeError(setForm, "adress", "step1", false, "city"),
                verifyInputs();
            }}
            disabled={form.step1.adress.street.fill}
          />
          <Input
            className="flex flex-col"
            question={form.step1.adress.state}
            set={(e: any) => {
              handleInputChange(
                setForm,
                "step1",
                "adress",
                e.target.value,
                "state"
              ),
                verifyInputs();
            }}
            onFocus={() => {
              handleChangeError(setForm, "adress", "step1", false, "state"),
                verifyInputs();
            }}
            disabled={form.step1.adress.street.fill}
          />
        </div>
      </div>
      <Input
        className="flex flex-col"
        question={form.step1.knowUs}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "knowUs", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "knowUs", "step1", false), verifyInputs();
        }}
      />
      <Input
        className="flex flex-col"
        question={form.step1.motive}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "motive", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "motive", "step1", false), verifyInputs();
        }}
      />
      <label className="flex flex-col">{form.step1.emotion.question}</label>
      <div
        className={`flex gap-3 capitalize ${
          form.step1.emotion.error
            ? "border-red-500"
            : "border-black border-none"
        }`}
      >
        <div
          className={`flex flex-col justify-evenly min-w-fit border-2 border-solid ${
            form.step1.emotion.error ? "border-red-500" : "border-none"
          }`}
        >
          {form.step1.emotion.options.map((option: string, key: number) => {
            return (
              <div key={key}>
                <label className="capitalize cursor-pointer">
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e: any) => {
                      const selected = form.step1.emotion.value;
                      if (e.target.checked) {
                        selected.push(e.target.value);
                      } else {
                        if (selected.indexOf(e.target.value) > -1)
                          selected.splice(selected.indexOf(e.target.value), 1);
                      }
                      handleInputChange(setForm, "step1", "emotion", selected),
                        verifyInputs();
                    }}
                    onFocus={() => {
                      handleChangeError(setForm, "emotion", "step1", false),
                        verifyInputs();
                    }}
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>
        <Input
          className="flex flex-col w-full"
          question={form.step1.emotion.especifique}
          set={(e: any) => {
            handleInputChange(
              setForm,
              "step1",
              "emotion",
              e.target.value,
              "especifique"
            ),
              verifyInputs();
          }}
          onFocus={() => {
            handleChangeError(
              setForm,
              "emotion",
              "step1",
              false,
              "especifique"
            ),
              verifyInputs();
          }}
        />
      </div>
      <Input
        className="flex flex-col"
        question={form.step1.start}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "start", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "start", "step1", false), verifyInputs();
        }}
      />
      <Input
        className="flex flex-col"
        question={form.step1.advantage}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "advantage", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "advantage", "step1", false),
            verifyInputs();
        }}
      />
      <Input
        className="flex flex-col"
        question={form.step1.inconvenient}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "inconvenient", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "inconvenient", "step1", false),
            verifyInputs();
        }}
      />
      <Input
        className="flex flex-col"
        question={form.step1.needs}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "needs", e.target.value),
            verifyInputs();
        }}
        onFocus={() => {
          handleChangeError(setForm, "needs", "step1", false), verifyInputs();
        }}
      />
      <Input
        className="flex flex-col"
        question={form.step1.problemOneWord}
        set={(e: any) => {
          handleInputChange(setForm, "step1", "problemOneWord", e.target.value),
            verifyInputs();
        }}
        onBlur={() => verifyInputs()}
        onFocus={() => {
          handleChangeError(setForm, "problemOneWord", "step1", false),
            verifyInputs();
        }}
      />
    </form>
  );
}
