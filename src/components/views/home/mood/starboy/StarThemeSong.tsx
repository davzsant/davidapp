'use client'

import React, { useRef, useState } from "react";

export default function StarThemeSong(){
    const [visible, setVisible] = useState(true)
    const audioRef = useRef<HTMLAudioElement>(null);
    const handleStartExperience = () => {
        audioRef.current?.play();
        setVisible(false)
    }

    return(
        <div 
        className={`
        w-[80vw] h-[5vh] absolute top-[4%] left-[50%] -translate-x-[50%] 
        flex justify-around items-center bg-white/5 backdrop-blur-md rounded-lg p-1
        ${visible ? 'opacity-100 z-20' : 'opacity-0 z-0'} transition-opacity duration-500
        `}>
            <audio ref={audioRef} src="/sound/theme/white_diamond.mp3" />

            <p>Deseja Iniciar a Experiencia de Audio?</p>
            <div className="flex justify-around items-center gap-2">
                <button onClick={handleStartExperience}>
                    Sim
                </button>
                <button onClick={()=>setVisible(false)}>
                    Não
                </button>
            </div>
        </div>
    )
}