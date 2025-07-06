import Image from "next/image";

export default function WhiteDiamond(){
    return(
        <div className="w-[98vw] h-[100vh] relative overflow-hidden flex flex-row items-center justify-around">
            <div className="h-[100%] flex justify-center items-center">
                <Image src={'/images/starboy/white_diamond_wall.png'} alt="" height={800} width={800} className="h-[60%]" />
            </div>
            <div className="text-center font-star relative">
                <h3 className="font-bold text-[50px]">White Diamond</h3>
                <h4 className="font-bold text-[40px]">Imperio Perfeito</h4>
                <div className="text-[20px] italic relative">
                    <Image
                        src={'/images/starboy/diamond.png'}
                        alt="White Diamond" height={500} width={500}
                        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 opacity-10"
                    />
                    <p className="my-3">&quot;Eu sei que não preciso de você, afinal , eu sou todas as cores da luz&quot;</p>
                    
                </div>
            </div>

        </div>
    )
}