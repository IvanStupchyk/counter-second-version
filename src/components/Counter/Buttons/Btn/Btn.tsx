import React from "react";
import s from "./Btn.module.css"

type BtnPropsType = {
    increaseCounter?: () => void
    setValues?: () => void
    resetCounter?: () => void
    counter?: number
    btn: 'inc' | 'reset' | 'set'
    maxValue: number
    minValue: number
    showSettings: boolean
    changeSettingsScreen?: (value: boolean) => void
    errorCondition?: boolean
}

export const Btn = (props: BtnPropsType) => {
    const disabledBtn = props.btn === 'inc' && props.counter === props.maxValue || props.errorCondition

    const increaseCounter = () => props.increaseCounter && props.increaseCounter()

    const resetCounter = () => props.resetCounter && props.resetCounter()

    const setValues = () => {
        props.changeSettingsScreen && props.changeSettingsScreen(!props.showSettings)
        props.setValues && props.setValues()

        localStorage.setItem('Counter Values',
            JSON.stringify({
                minValue: props.minValue,
                maxValue: props.maxValue
            }))
    }

    const kindBtn = () => {
        switch (props.btn) {
            case 'inc':
                increaseCounter()
                break
            case 'reset':
                resetCounter()
                break
            case 'set':
                setValues()
                break
        }
    }

    return (
        <div className={s.btn_container}>
            <button className={`${s.btn} ${disabledBtn ? s.btn_disabled : ''}`}
                    disabled={disabledBtn}
                    onClick={kindBtn}>
                {props.btn}
            </button>
        </div>
    )
}


