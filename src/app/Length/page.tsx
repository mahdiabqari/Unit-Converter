'use client'

import { useState } from "react"

export default function Length() {

    interface Output{
        title:string,
        num:number
    }

    interface Input{
        title:string,
        num:number
    }

    interface Calculat{
        num: number,
        title: string
    }

    const [num, setNum] = useState<number | undefined>(undefined);

    const [calculat, setCalculat] = useState<Calculat | undefined>(undefined);


    // show
    const [input , setInput] = useState<Input | undefined>(undefined)
    const [output , setOutput] = useState<Output | undefined>(undefined)

    const Clickhander = () => {
        if( input && output && num ){
            setCalculat({
                num: input.num * num / output.num,
                title: output.title
            });
        }
    }


    return(
        <div className="container-length h-screen md:h-full flex justify-center items-center">
            <div className="contain w-[95%] flex justify-center items-center flex-col">
                <div className="top-container bg-[#2e354f5b] w-full h-[5rem] mx-auto rounded-2xl mt-2 flex justify-center items-center">
                    <h1 className="text-white text-[30px] font-bold">Length Converter</h1>
                </div>
                <div className="bottom gap-4 flex justify-center items-center w-full md:flex-col">
                    <div className="left w-[33%] md:w-full flex justify-center items-center flex-col">
                        <div className="top-card bg-[#262e525b] py-12 md:py-7 w-full  mt-5 flex justify-center items-center flex-col rounded-t-xl">
                            <h1 className="text-white mb-6 text-[40px]">From</h1>
                            <form className="w-full flex justify-center items-center">
                                <input 
                                    type="number" 
                                    className="w-[85%] h-[2.7rem] rounded-[20px] px-2 text-xl"
                                    placeholder="Your number ..."
                                    onChange={(e) => setNum(Number(e.target.value))}
                                />
                            </form>
                            <div className="flex flex-wrap mt-10 justify-center items-center gap-3 w-full">
                                <button onClick={() => {setInput({title: 'mm' , num:0.001})}} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">mm</button>
                                <button onClick={() => {setInput({title: 'cm' , num:0.01})}} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">cm</button>
                                <button onClick={() => {setInput({title: 'm' , num:1})}} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">m</button>
                                <button onClick={() => {setInput({title: 'km' , num:1000})}} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">km</button>
                                <button onClick={() => {setInput({title: 'Tm' , num:1000000000000})}} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">Tm</button>
                            </div>
                        </div>
                        <div className="top-card bg-[#262e525b] py-10 md:py-7 gap-10 mt-2 rounded-b-xl w-full flex flex-col justify-center items-center">
                            <h1 className="text-white text-[40px]">To</h1>
                            <div className="flex flex-wrap justify-center items-center gap-3 w-full">
                            <button onClick={() => setOutput({title: 'mm' , num:0.001})} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">cm</button>
                                <button onClick={() => setOutput({title: 'cm' , num:0.01})} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">mm</button>
                                <button onClick={() => setOutput({title: 'm' , num:1})} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">m</button>
                                <button onClick={() => setOutput({title: 'km' , num:1000})} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">km</button>
                                <button onClick={() => setOutput({title: 'Tm' , num:1000000000000})} className="v w-14 h-10 font-bold rounded-[7px] text-xl bg-white text-black">Tm</button>
                            </div>
                            <div className="result">
                                <h1 className="text-blue-300 text-2xl">{num} {input?.title} = ? {output?.title}</h1>
                            </div>
                        </div>
                    </div>
                      
                    <div className="center w-[33%] md:w-full md:gap-7 gap-40 flex justify-center items-center flex-col">
                        <div className="w-full h-[15px] rounded-[10px] bg-black"></div>
                        <button onClick={Clickhander} className="text-white bg-black px-7 py-4 text-2xl rounded-xl hover:bg-gray-900 transition-all">Calculat :</button>
                        <div className="w-full h-[15px] rounded-[10px] bg-black"></div>
                    </div>

                    <div className="w-[33%] md:w-full md:mb-14 flex justify-center items-center flex-col">
                        <div className="end-card bg-[#262e525b] w-[25rem] h-[25rem] md:h-[10rem] md:rounded-none rounded-full flex justify-center items-center">
                            <h1 className="re text-white text-[50px] md:text-[30px] md:font-bold md:text-center"> {calculat?.num} {calculat?.title} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}