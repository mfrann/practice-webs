import '../styles/types.css'

export function Button({text, style}){
    return(
        <button className= {style} >{text}</button>
    );
}