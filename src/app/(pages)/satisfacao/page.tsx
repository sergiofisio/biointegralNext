import SatisfacaoForm from "@/app/components/form/satisfaction";
import HeaderForm from "@/app/components/header/form";
import RootLayout from "@/app/components/layout/root";

export default function Satisfacao() {
  return (
    <RootLayout header={<HeaderForm />}>
      <SatisfacaoForm />
    </RootLayout>
  );
}
