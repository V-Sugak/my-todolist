import React from "react";
import {filterType} from "../Todolist";

type ButtonPropsType = {
    value: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return <button onClick={onClickHandler}>{props.value}</button>
}
