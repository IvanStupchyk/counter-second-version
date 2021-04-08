import React from "react";
import s from "./Counter.module.css"
import {Scoreboard} from "./Scoreboard/Scoreboard";
import {Buttons} from "./Buttons/Buttons";

type CounterPropsType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
    maxValue: number
    minValue: number
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    showSettings: boolean
    changeSettingsScreen: (value: boolean) => void
    errorCondition: boolean
    setValues: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counter_container}>
            <Scoreboard counter={props.counter}
                        minValue={props.minValue}
                        maxValue={props.maxValue}
                        changeMaxValue={props.changeMaxValue}
                        changeMinValue={props.changeMinValue}
                        showSettings={props.showSettings}
                        errorCondition={props.errorCondition}
            />
            <Buttons increaseCounter={props.increaseCounter}
                     resetCounter={props.resetCounter}
                     counter={props.counter}
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
