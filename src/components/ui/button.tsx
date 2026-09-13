import { Ref } from "react";

type MyProps = {
    className?: string,
    onClick?: () => void;
    children?: string,
    ref?:  Ref<HTMLButtonElement> 
}
export default function Button(props: MyProps){

    return <button 
        className={props.className}
        onClick={props.onClick}
        ref={props.ref}>
        {props.children}
    </button>
}

            