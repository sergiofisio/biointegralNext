import scrollIntoView from "smooth-scroll-into-view-if-needed";

const handleClick = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  e.stopPropagation();

  if (typeof window !== "undefined") {
    const element = document.querySelector(href);

    if (element) {
      scrollIntoView(element, {
        behavior: "smooth",
      });
    }
  }
};

function checkForm(form: any, keys: string[]) {
  return keys.reduce((hasError, key) => {
    const [firstKey, secondKey] = key.split(".");
    console.log({ firstKey, secondKey });

    const target = secondKey ? form[firstKey][secondKey] : form[firstKey];

    target.error = !target.value || !target.value.length;

    return hasError || target.error;
  }, false);
}

export { handleClick, checkForm };
