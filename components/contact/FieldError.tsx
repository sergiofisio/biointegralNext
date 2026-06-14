type FieldErrorProps = {
  id?: string;
  message?: string;
};

export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} className="text-sm text-red-600 mt-1.5" role="alert">
      {message}
    </p>
  );
}
