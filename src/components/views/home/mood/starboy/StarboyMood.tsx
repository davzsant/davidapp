import Image from "next/image";
import MoodImage from "../MoodImage";
import SpaceBackground from "./SpaceBackground";
import StarThemeSong from "./StarThemeSong";


export default function StarboyMood(){
    return(
        <div className="w-[100vw] h-[100vh] relative overflow-hidden">
            <SpaceBackground />
            <div>
                <Image
                    height={500}
                    width={500}
                    alt="Starboy Logo"
                    className="absolute top-[40%] left-[25%] -translate-x-[50%] -translate-y-[50%] z-10"
                    src={'/images/starboy/logo.png'}
                />
                <div className="absolute  top-[45%] left-[80%] font-star -translate-x-[50%] -translate-y-[50%] z-10 text-center text-yellow-400">
                    <h3 className="font-bold text-[50px]">Episodio VIII</h3>
                    <h4 className="font-bold text-[30px]">O Quinto Elemento</h4>
                    <div className="text-[20px] italic">
                        <p className="my-3">&quot;Não se pode imaginar que o problema de toda energia possa ser resolvido sem uma compreensão real do éter como um meio mundial que transmite energia através de distâncias&quot;</p>
                        <p className="my-3">&quot;Uma camada super condutora de matéria, na qual é possível transportar eletricidade sem fio independemente da distância e dos obstaculos&quot;</p>
                        <p className="my-3">&quot;Esconderam tudo sobre a natureza e sobre o corpo humano&quot;</p>
                    </div>
                </div>
            </div>
            <StarThemeSong />
        </div>
    )
}