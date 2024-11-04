export default function MyApp() {
  return (
        <div className="container mx-auto p-2 text-center pt-10">
          <h2 className="text-grey font-bold">RIWAYAT PEKERJAAN</h2>
         <RowRiwayatKerja tahun="2019" instansi="PT. Pergadaian" bekerja="Staff Administrasi" />
         <RowRiwayatKerja tahun="2021" instansi="Indihome" bekerja="Call Center" />
         <RowRiwayatKerja tahun="2022" instansi="PT. Nusantara" bekerja="HR SDM" />
         <RowRiwayatKerja tahun="2024" instansi="PT. Gacoan Indonesia" bekerja="Manager" />
        </div>
  );
}
interface RowRiwayatKerjaProps {
  tahun: string;
  instansi: string;
  bekerja: string;
}

function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-indigo-400 text-black p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.bekerja}</div>
        </div>
      </div>
    </div>
  )
}