import scrollIntoView from "smooth-scroll-into-view-if-needed";

const handleClick = (e: React.MouseEvent, href: string, router: any) => {
  e.preventDefault();
  router.push("/");

  if (typeof window !== "undefined") {
    console.log({ href });

    const element = document.querySelector(href);

    if (element) {
      scrollIntoView(element, {
        behavior: "smooth",
      });
    }
  }
};

export { handleClick };
