import Image from "next/image";
import { ComponentType } from "react";
interface Props extends React.ComponentProps<typeof Image> {

}

export default function MoodImage({...props}: Props) {
    return (
        <div>
            <Image {...props} />
        </div>
    );
}