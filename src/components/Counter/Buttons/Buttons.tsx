import React from "react";
import s from "./Buttons.module.css"
import {Btn} from "./Btn/Btn";

export type ButtonsPropsType = {
    increaseCounter: () => void
    resetCounter: () => void
    counter: number
    maxValue: number
    minValue: number
    showSettings: boolean
    changeSettingsScreen: (value: boolean) => void
    errorCondition: boolean
    setValues: () => void
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.btn_container}>
            {
                !props.showSettings
                &&
                <Btn increaseCounter={props.increaseCounter}
                     resetCounter={props.resetCounter}
                     counter={props.counter}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     btn={"inc"}
                     showSettings={props.showSettings}
                />
            }
            {
                !props.showSettings
                &&
                <Btn increaseCounter={props.increaseCounter}
                     resetCounter={props.resetCounter}
                     counter={props.counter}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     btn={"reset"}
                     showSettings={props.showSettings}
                />
            }
            <Btn
                btn={"set"}
                maxValue={props.maxValue}
                minValue={props.minValue}
                showSettings={props.showSettings}
                changeSettingsScreen={props.changeSettingsScreen}
                errorCondition={props.errorCondition}
                setValues={props.setValues}
            />
        </div>
    )
}
