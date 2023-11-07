import { useCallback } from "react";

const Chiffre = (props : {numberP: number, onClickNumber: (number: number) => void}) => {

const handleClick = useCallback(() => {
    props.onClickNumber(props.numberP)
},[props.onClickNumber,props.numberP])



return (

        <div>
            <button onClick={handleClick} >{props.numberP}</button>
        </div>
    );
}

export default Chiffre