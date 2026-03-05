import SatisfacaoForm from "../../components/form/satisfaction";
import SeoHead from "../../components/seo/SeoHead";

export default function Satisfacao() {
  return (
    <>
      <SeoHead
        title="Pesquisa de Satisfação"
        description="Avalie sua experiência na Biointegral Saúde. Sua opinião nos ajuda a melhorar o atendimento em Microfisioterapia, PSYCH-K® e Biodecodage."
        canonical="/satisfacao"
        noIndex={true}
      />
      <SatisfacaoForm />
    </>
  );
}
