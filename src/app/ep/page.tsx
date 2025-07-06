import Link from "next/link";

export default function Ep(){
    return(
        <div className="w-[100vw] h-[100vh] relative overflow-hidden flex flex-col items-center justify-center">

            <Link href={'/ep/star'}>Star</Link>
        </div>
    )
}