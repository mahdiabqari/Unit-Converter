import Link from "next/link";


export default function Home() {
  return (
    <main className="app flex flex-col items-center justify-center h-screen">
      <div className="container-app flex md:flex-col justify-center items-center w-[93%] md:px-1">
        <div className="left w-[50%] md:w-full md:items-center flex justify-center items-start flex-col">
          <h1 className="text-gray-200 px-1 text-[55px] md:text-[45px] font-bold">Unit Conversion</h1>
          <h2 className="text-gray-900 bg-gray-200 md:text-[25px] rounded-xl mt-2 px-4 text-[32px]">The most famous units</h2>
          <p className="p md:mx-2 text-white text-[19px] p-4 md:text-center rounded-xl mt-5 leading-8">You can use this program to convert the desired unit. It app supports temperature, mass and length units.</p>
        </div>
        <div className="right w-[50%] md:w-full flex flex-wrap justify-center items-center gap-12 md:gap-2 md:mt-5">
          <Link href='./Temperature'><button className="btn w-[18rem] h-[5rem] md:w-[11.5rem] md:h-[3.20rem] rounded-2xl md:rounded-xl text-[30px] md:text-[22px] font-bold text-white">Temperature <img className="w-10 md:w-7 rounded-full" src="https://tiktarh.com/wp-content/uploads/2022/10/Icn1004268www.tiktarh.com_.jpg" alt="png" /></button></Link>
          <Link href='./Length'><button className="btn w-[18rem] h-[5rem] md:w-[11.5rem] md:h-[3.20rem] rounded-2xl md:rounded-xl text-[30px] md:text-[22px] font-bold text-white">Length <img className="w-9 md:w-6 rounded-full" src="https://imgurl.ir/uploads/r76599_Icn1003277www_tiktarh_com_-480x300.jpg" alt="png" /></button></Link>
          <Link href='./Crime'><button className="btn w-[18rem] h-[5rem] md:w-[11.5rem] md:h-[3.20rem] rounded-2xl md:rounded-xl text-[30px] md:text-[22px] font-bold text-white">Crime <img className="w-9 md:w-6 rounded-full" src="https://imgurl.ir/uploads/l650210_Screenshot_148.png" alt="png" /></button></Link>
        </div>
      </div>
    </main>
  );
}
