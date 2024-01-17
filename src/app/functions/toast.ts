import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning" | "loading";

export function toastfy(
  type: ToastType,
  msg: string,
  time: number,
  classname?: string
) {
  toast[type](msg, {
    duration: time,
    unstyled: true,
    className: `flex !relative items-center p-4 w-full text-white font-bold h-14 rounded-3xl ${classname}`,
  });
}
