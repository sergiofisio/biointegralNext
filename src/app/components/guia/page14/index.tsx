import Image from "next/image";

export default function Page14() {
  return (
    <div className="bg-gradient-to-br from-white to-pink w-full h-full relative flex flex-col items-center gap-4 p-20">
      <h2 className="text-4xl font-bold text-center text-blueDark z-30">
        Perguntas frequentes
      </h2>

      <ul
        className="text-xl flex flex-col justify-evenly text-justify text-black h-full pb-8 stick z-10 gap-4 font-black"
        style={{ listStyleType: "none" }}
      >
        <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
          <span style={{ paddingRight: "10px" }}>➔</span>
          QUANTAS SESÕES SERÃO NECESSÁRIAS?
          <p className="font-bold" style={{ textIndent: "0rem" }}>
            Não existe um número mínimo ou máximo de sessões para este tipo de
            terapia, mas geralmente uma única sessão não é suficiente para o
            trabalho terapêutico direcionado a um sintoma ou doença.
          </p>
        </li>
        <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
          <span style={{ paddingRight: "10px" }}>➔</span>TEM ALGUMA RELAÇÃO COM
          RELIGIÃO?
          <p className="font-bold" style={{ textIndent: "0rem" }}>
            Definitivamente não, todas as ferramentas que utilizamos tem algum
            respaldo científico. Nos baseamos nosso trabalhos na lógica
            biológica em nossos vários anos de experiência clínica
          </p>
        </li>

        <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
          <span style={{ paddingRight: "10px" }}>➔</span>QUAL O INTERVALO ENTRE
          UMA SESSÃO E OUTRA?
          <p className="font-bold" style={{ textIndent: "0rem" }}>
            Deve-se esperar o mínimo de 1 semana, embora sempre a decisão de
            voltar seja sua. Nosso trabalho é acompanha-lo neste processo no seu
            tempo.
          </p>
        </li>
        <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
          <span style={{ paddingRight: "10px" }}>➔</span>EM QUANTO TEMPO EU
          MELHORO?
          <p className="font-bold" style={{ textIndent: "0rem" }}>
            A melhora não depende de mim. O seu corpo criou o caminho do
            problema/ conflito e, portanto, ele sabe o caminho de volta. Então
            cada individuo tem o seu caminho e o seu tempo para reencontrar a
            linha chegada do bem-estar
          </p>
        </li>
      </ul>
      <Image
        src="/assets/site/guia/perguntas.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-80 h-80 absolute top-20 opacity-80 rotate-12"
      ></Image>
    </div>
  );
}
