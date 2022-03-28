import { useEffect, useState } from "react";

const conversionChart = {
    meter: 1,
    inch: 39.37,
    centimeter: 100,
    mile: 1 / 1609,
    yard: 1.0936132983,
};

function convert(value, unit, targetUnit) {
    const conversion = conversionChart[targetUnit] / conversionChart[unit];

    return value * conversion;
}

function UnitSelector({ ...props }) {
    return (
        <select {...props}>
            <option value="centimeter">cm</option>
            <option value="meter">Meter</option>
            <option value="inch">Inch</option>
            <option value="yard">Yard</option>
            <option value="mile">Mile</option>
        </select>
    );
}

function LengthCalculator() {
    const [inputUnit, setInputUnit] = useState("meter");
    const [input, setInput] = useState(0);
    const [targetUnit, setTargetUnit] = useState("inch");
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(convert(input, inputUnit, targetUnit));
    }, [input, inputUnit, targetUnit]);
    return (
        <div>
            <UnitSelector
                value={inputUnit}
                onChange={({ target }) => setInputUnit(target.value)}
            />

            <input
                id="meter"
                type="number"
                value={input}
                onChange={({ target }) => {
                    setInput(target.value);
                }}
                placeholder="Meter"
            />
            {"=>"}
            <UnitSelector
                value={targetUnit}
                onChange={({ target }) => setTargetUnit(target.value)}
            />

            <label htmlFor="inch">Inch</label>
            <input
                id="inch"
                type="number"
                value={result}
                disabled
                placeholder="Inch"
            />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span>{count}</span>

            <button
                onClick={() => {
                    setCount((current) => current + 1);
                }}
            >
                Count
            </button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Inch Calculator</h1>
            <Counter />
            <LengthCalculator />
        </div>
    );
}

export default App;
