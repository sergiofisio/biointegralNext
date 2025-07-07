export function handleInputChange(
  setForm: any,
  step: string,
  field: string,
  value: any,
  subfield?: string
) {
  setForm((prevState: any) => {
    if (subfield) {
      return {
        ...prevState,
        [step]: {
          ...prevState[step],
          [field]: {
            ...prevState[step][field],
            [subfield]: {
              ...prevState[step][field][subfield],
              value,
            },
          },
        },
      };
    }
    return {
      ...prevState,
      [step]: {
        ...prevState[step],
        [field]: {
          ...prevState[step][field],
          value,
        },
      },
    };
  });
  handleChangeError(setForm, field, step, false, subfield);
}

export function handleChangeError(
  setForm: any,
  field: string,
  step: string,
  error: boolean,
  subfield?: string
) {
  console.log({ setForm, field, step, error, subfield });

  setForm((prevState: any) => {
    if (subfield) {
      return {
        ...prevState,
        [step]: {
          ...prevState[step],
          [field]: {
            ...prevState[step][field],
            [subfield]: {
              ...prevState[step][field][subfield],
              error: error,
            },
          },
        },
      };
    }
    return {
      ...prevState,
      [step]: {
        ...prevState[step],
        [field]: {
          ...prevState[step][field],
          error: error,
        },
      },
    };
  });
}
