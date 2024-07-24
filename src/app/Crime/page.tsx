'use client'
import { useState } from "react"

export default function Crime() {

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
        <div className="container-crime h-screen md:h-full flex justify-center items-center">
            <div className="contain w-[95%] flex justify-center items-center flex-col">
                <div className="top-container bg-[#2c514f72] w-full h-[5rem] mx-auto rounded-2xl mt-2 flex justify-center items-center">
                    <h1 className="text-white text-[30px] font-bold">Crime Converter</h1>
                </div>
                <div className="bottom gap-4 flex md:flex-col justify-center items-center w-full">
                    <div className="left w-[33%] md:w-full flex justify-center items-center flex-col">
                        <div className="top-card bg-[#2c514f72] py-12 md:py-7 w-full  mt-5 flex justify-center items-center flex-col rounded-t-xl">
                            <h1 className="text-white mb-6 text-[40px]">From</h1>
                            <form className="w-full flex justify-center items-center">
                                <input 
                                    type="number" 
                                    className="w-[86%] h-[2.7rem] rounded-[20px] px-2 text-xl"
                                    placeholder="Your number ..."
                                    onChange={(e) => setNum(Number(e.target.value))}
                                />
                            </form>
                            <div className="flex flex-wrap mt-10 justify-center items-center gap-3 w-full">
                                <button onClick={() => setInput({title: 'mg', num: 0.001})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">mg</button>
                                <button onClick={() => setInput({title: 'cg', num: 0.01})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">cg</button>
                                <button onClick={() => setInput({title: 'g', num: 1})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">g</button>
                                <button onClick={() => setInput({title: 'kg', num: 1000})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">kg</button>
                                <button onClick={() => setInput({title: 'Tg', num: 1000000000000})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">Tg</button>
                            </div>
                        </div>
                        <div className="top-card bg-[#2c514f72] py-10 md:py-7 gap-10 mt-2 rounded-b-xl w-full flex flex-col justify-center items-center">
                            <h1 className="text-white text-[40px]">To</h1>
                            <div className="flex flex-wrap justify-center items-center gap-3 w-full">
                                <button onClick={() => setOutput({title: 'mg', num: 0.001})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">mg</button>
                                <button onClick={() => setOutput({title: 'cg', num: 0.01})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">cg</button>
                                <button onClick={() => setOutput({title: 'g', num: 1})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">g</button>
                                <button onClick={() => setOutput({title: 'kg', num: 1000})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">kg</button>
                                <button onClick={() => setOutput({title: 'Tg', num: 1000000000000})} className="v w-12 h-10 font-bold rounded-[7px] text-xl bg-white text-black">Tg</button>
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

                    <div className="w-[33%] flex justify-center items-center flex-col">
                        <div className="end-card md:h-[10rem] md:rounded-none md:mb-14 bg-[#2c514f72v ] w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
                            <h1 className="re text-white text-[50px] md:text-[30px] md:font-bold md:text-center"> {calculat?.num} {calculat?.title} </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}