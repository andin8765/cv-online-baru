import foto from "../foto.jpg";

export default function Hero(){
return(
    <div className="container mx-auto p-4 text-center">
    <h1 className="text-grey-400 font-bold">CV Online</h1>
    <h1 className="text-Grey mb-4">Triandini Dimasputri</h1>
    <Profile />
    <p className="mt-4 mb-8 text-Grey">
      Saya adalah individu yang ambisius dan teliti dengan ketertarikan besar dalam analisis data. 
      Dengan pengalaman dalam pemahaman numerik serta kemampuan dalam menggunakan fungsi spreadsheet, 
      saya bersemangat untuk memperdalam pengetahuan di bidang data analytics.
    </p>
</div>
);

}
function Profile() {
    return <img src={foto.src} alt="CV Andin" className="fotoku w-32 h-32 mx-auto rounded-full"/>;
  }