import React, {ChangeEvent} from "react";
import s from "./Scoreboard.module.css"

type ScoreboardPropsType = {
    counter: number
    maxValue: number
    minValue: number
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    showSettings: boolean
    errorCondition: boolean
}

export const Scoreboard = (props: ScoreboardPropsType) => {
    const classNameInputMax = `${s.input_value} ${props.errorCondition ? s.incorrect_value : ''}`
    const classNameInputMin = `${s.input_value} ${props.errorCondition ? s.incorrect_value : ''}`

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.value)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.value)
    }

    return (
        <div className={s.scoreboard_container}>
            {
                props.showSettings
                &&
                <div>
                    <div className={s.values_position}>
                        <p className={s.title_value}>max value:</p>

                        <input className={classNameInputMax} type={"number"}
                               onChange={changeMaxValue}
                               value={props.maxValue}
                        />
                    </div>
                    <div className={s.values_position}>
                        <p className={s.title_value}>start value:</p>

                        <input className={classNameInputMin}  type={"number"}
                               onChange={changeMinValue}
                               value={props.minValue}
                        />
                    </div>
                </div>
                ||
                <div>
                    <span className={`${s.amount} ${props.counter === props.maxValue ? s.limit : ""}`}>
                      {props.counter}
                    </span>
                </div>
            }


        </div>
    )

}

