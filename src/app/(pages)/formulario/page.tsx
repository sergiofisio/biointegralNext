import PatientForm from "@/app/components/form/patient";
import HeaderForm from "@/app/components/header/form";
import RootLayout from "@/app/components/layout/root";

export default function Formulario() {
  return (
    <RootLayout header={<HeaderForm />}>
      <PatientForm />
    </RootLayout>
  );
}
