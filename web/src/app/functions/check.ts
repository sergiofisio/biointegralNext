export function checkForm(form: any, keys: string[]) {
  return keys.reduce((hasError, key) => {
    const [firstKey, secondKey] = key.split(".");
    const target = secondKey ? form[firstKey][secondKey] : form[firstKey];

    target.error = !target.value || !target.value.length;
    return hasError || target.error;
  }, false);
}
