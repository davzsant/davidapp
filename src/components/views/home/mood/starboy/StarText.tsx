import Image from "next/image";

export default function StarText(){
    return(
        <div className="w-[100vw] h-[100vh] relative overflow-hidden flex flex-row items-center justify-around">
            <div className="text-center font-star relative">
                <h3 className="font-bold text-[50px]">Tudo, Tanto e Tampouco</h3>
                <h4 className="font-bold text-[40px]">Botarão eu e um universo infinito sem que eles soubessem</h4>
                <div className="text-[20px] italic">
                    <p>Sabe, para entender a infinitude do universo exterior, é necessário estar em órbita regular com o microcosmo interno que nos habita. É nele em que os mundos mais profundos e diversos habitam, em que as luas diariamente nos perguntam como estão e quem são, é necessario deixar o nosso proprio sol brilhar</p>
                    <p className="my-3">- Santiago, David, 2025</p>
                </div>
            </div>
            <div className="h-[100%] flex justify-center items-center">
                <Image src={'/images/starboy/white_diamond_wall.png'} alt="" height={800} width={800} className="h-[60%]" />
            </div>

        </div>
    )
}