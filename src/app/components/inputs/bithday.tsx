import { handleChangeError, handleInputChange } from "@/app/functions/input";
import { handleLocalStorage } from "@/app/functions/localstorage";

interface Info {
  question: string;
  value: number | null | string;
  type: string;
  error: boolean;
  required: boolean;
  options: string[];
}

interface BirthProps {
  birth: {
    question: string;
    day: Info;
    month: Info;
    year: Info;
  };
  setForm: (
    formName: string,
    step: string,
    field: string,
    value: any,
    subField?: string
  ) => void;
  verifyInputs: () => void;
}

export default function InputBirthday({
  birth,
  setForm,
  verifyInputs,
}: BirthProps) {
  const handleSelectChange = (
    field: keyof BirthProps["birth"],
    value: string
  ) => {
    handleInputChange(setForm, "step1", "birth", value, field);
    verifyInputs();
    handleLocalStorage(`birth.${field}`, value);
  };

  const handleFocus = (field: keyof BirthProps["birth"]) => {
    handleChangeError(setForm, "birth", "step1", false, field);
    verifyInputs();
  };

  return (
    <div className="flex flex-col w-3/5 max-w-[75%] md:w-full">
      <h2 className="uppercase">{birth.question}</h2>
      <div className="flex justify-between gap-2">
        {(["day", "month"] as const).map((field) => (
          <div key={field} className="flex flex-col w-1/3">
            <label className="uppercase w-full text-center">
              {birth[field].question}
            </label>
            <select
              name={field}
              id={field}
              required={birth[field].required}
              className={`${
                birth[field].error ? "border-red-500" : "border-black"
              } flex border-black border-2 border-solid rounded-3xl max-h-full h-full w-full px-3 md:h-16`}
              onChange={(e) => handleSelectChange(field, e.target.value)}
              onFocus={() => handleFocus(field)}
              value={birth[field].value || ""}
            >
              {birth[field].options.map((option, key) => (
                <option className="text-black" key={key} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="flex flex-col w-1/3">
          <label className="uppercase text-center">Ano</label>
          <input
            className={`${
              birth.year.error ? "border-red-500" : "border-black"
            } flex border-black border-2 border-solid rounded-3xl max-h-full h-full w-full px-3 md:h-16`}
            type="number"
            min="1900"
            max="2099"
            value={birth.year.value || ""}
            onChange={(e) => handleSelectChange("year", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
