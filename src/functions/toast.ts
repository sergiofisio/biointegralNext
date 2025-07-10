import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

interface CustomToastifyOptions {
  message: string;
  type: "success" | "error" | "info" | "warning";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  timeout?: number;
}

export function showToast(options: CustomToastifyOptions): void {
  const { message, type, position = "top-right", timeout = 3000 } = options;

  const toastifyConfig: ToastOptions = {
    position: position,
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  switch (type) {
    case "success":
      toast.success(message, toastifyConfig);
      break;
    case "error":
      toast.error(message, toastifyConfig);
      break;
    case "info":
      toast.info(message, toastifyConfig);
      break;
    case "warning":
      toast.warn(message, toastifyConfig);
      break;
    default:
      toast(message, toastifyConfig);
  }
}
