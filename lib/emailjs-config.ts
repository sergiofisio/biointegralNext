export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export function isEmailJsConfigured(): boolean {
  return (
    EMAILJS_SERVICE_ID.length > 0 &&
    EMAILJS_TEMPLATE_ID.length > 0 &&
    EMAILJS_PUBLIC_KEY.length > 0
  );
}
