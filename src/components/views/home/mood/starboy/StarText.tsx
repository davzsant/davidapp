import Image from "next/image";

export default function StarText(){
    return(
        <div className="w-[100vw] h-[100vh] relative overflow-hidden flex flex-row items-center justify-around">
            <div className="text-center font-star relative w-[50vw]">
                <h3 className="font-bold text-[50px]">Microcosmo Pessoal</h3>
                <div className="text-[20px] italic">
                    <p>Para entender a infinitude do universo exterior, é necessário estar em órbita regular com o microcosmo interno que nos habita. É nele em que os mundos mais profundos e diversos existem, as luas diariamente nos perguntam como estão e quem são, por isso digo que é necessario deixar o nosso proprio sol brilhar</p>
                    <p className="my-3 text-yellow-300">- DDAVI, 2025</p>
                </div>
            </div>
            <div className="h-[100%] flex justify-center items-center flex-1">
                <Image src={'/images/starboy/microcosmo.png'} alt="" height={500} width={500} className="h-[60%]" />
            </div>

        </div>
    )
}