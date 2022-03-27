import { useEffect, useState } from "react";

const conversionData = {
    meter: 1,
    inch: 39.37,
    centimeter: 100,
};

function convert(input, unit, targetUnit) {
    const conversion = conversionData[targetUnit] / conversionData[unit];

    return input * conversion;
}

function App() {
    const [inputUnit, setInputUnit] = useState("meter");
    const [input, setInput] = useState(0);
    const [targetUnit, setTargetUnit] = useState("inch");
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(convert(input, inputUnit, targetUnit));
    }, [input, inputUnit, targetUnit]);

    return (
        <div>
            <select
                value={inputUnit}
                onChange={({ target }) => setInputUnit(target.value)}
            >
                <option value="meter">Meter</option>
                <option value="inch">Inch</option>
            </select>
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
            <select
                value={targetUnit}
                onChange={({ target }) => setTargetUnit(target.value)}
            >
                <option value="meter">Meter</option>
                <option value="inch">Inch</option>
            </select>
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

export default App;
