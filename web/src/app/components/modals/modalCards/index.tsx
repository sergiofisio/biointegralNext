export default function ModalService({
    name,
    img,
    description,
    setShowModal,
  }: {
    name: string;
    img: string;
    description: { paragrafo: string };
    setShowModal: (modal:string) => void;
  }){
    return(
        <div className="fixed right-0 top-0 z-10 overflow-y-auto w-full h-full flex items-center justify-center bg-blue bg-opacity-50">
  <div
    className="bg-white w-[95%] h-[95%] rounded-lg text-left overflow-hidden shadow-xl transform transition-all relative">
    <div className="bg-white px-4 pt-5 w-11/12 h-[90%] pb-4 ">
      <div className="flex flex-col items-center justify-center">
        <img className="md:w-32 w-56" src={img} alt=""/>
        <h3 className="text-4xl leading-6 font-medium text-gray-900 text-center uppercase">
          {name}
        </h3>
      </div>
      <div className="overflow-y-auto h-4/6 flex flex-col gap-3 p-4">
        <p *ngFor="let paragraph of serviceInfo.modal" className="text-xl text-justify">
          {{paragraph.paragrafo}}
        </p>
      </div>
    </div>
    <button type="button" (click)="handleModal($event)"
      className="w-11 h-11 text-3xl justify-center rounded-[100%] border border-transparent shadow-sm p-1 bg-blue font-medium text-white hover:bg-white hover:text-blue transition-all duration-500 ease-in-out absolute right-2 top-2 ">
      X
    </button>
  </div>
</div>
    )
}