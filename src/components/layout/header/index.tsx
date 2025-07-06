import Link from "next/link";

export default function Header(){
    return(
        <header>
            <div className="w-full h-[5vh] font-star backdrop-blur-md flex justify-between items-center px-4 fixed text-white z-10">
                <h1 className="text-2xl opacity-60">David ✩</h1>
                <nav >
                    <ul className="flex justify-around items-center gap-4">
                        <li className="hover:opacity-90 transition-opacity duration-300 opacity-40">
                            <Link href={'/'}>Inicio</Link>
                        </li>
                        <li  className="hover:opacity-90 transition-opacity duration-300 opacity-40">
                            <Link href={'/projetos'}>Projetos</Link>
                        </li>
                        <li  className="hover:opacity-90 transition-opacity duration-300 opacity-40">
                            <Link href={'/ep'}>Concepts</Link>
                        </li>
                        <li  className="hover:opacity-90 transition-opacity duration-300 opacity-40">
                            <Link href={'/perfil'}>Perfil</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}