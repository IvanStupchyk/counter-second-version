import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    const JsonValues = localStorage.getItem('Counter Values')
    const CounterValues = JsonValues && JSON.parse(JsonValues)

    const [minValue, setMinValue] = useState<number>(CounterValues ? CounterValues.minValue : 0)
    const [maxValue, setMaxValue] = useState<number>(CounterValues ? CounterValues.maxValue : 0)

    const [showSettings, setShowSettings] = useState(false)

    const [counter, setCounter] = useState<number>(minValue)

    const increaseCounter = () => {
        counter < maxValue && setCounter(prev => prev + 1)
    }

    const errorCondition = (minValue >= maxValue) || minValue < 0 || maxValue < 0

    const resetCounter = () => {
        setCounter(minValue)
    }

    const changeMaxValue = (value: string) => {
        setMaxValue(+value)
    }

    const changeMinValue = (value: string) => {
        setMinValue(+value)
    }

    const setValues = () => {
        setCounter(minValue)
    }

    const changeSettingsScreen = (value: boolean) => {
        setShowSettings(value)
    }

    return (
        <div className="App">
            <Counter counter={counter}
                     increaseCounter={increaseCounter}
                     resetCounter={resetCounter}
                     maxValue={maxValue}
                     minValue={minValue}
                     changeMaxValue={changeMaxValue}
                     changeMinValue={changeMinValue}
                     showSettings={showSettings}
                     changeSettingsScreen={changeSettingsScreen}
                     errorCondition={errorCondition}
                     setValues={setValues}
            />
        </div>
    );
}

export default App;
