// Counter.tsx

import React, { useState } from 'react';

interface CounterProps {
    initialValue: number;
}

const Counter: React.FC<CounterProps> = (props) => {
    const [count, setCount] = useState(props.initialValue);
    const [list, setList] = useState([{ id: 1, text: 'one' }, { id: 2, text: 'two' }]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const updateCount = () => {
        const newValue = Number(inputValue);
        if (!isNaN(newValue)) {
            setCount(newValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <h2>Counter 컴포넌트</h2>
            <p>props 값으로 전달된 처음 값: {props.initialValue}</p>
            <p>props 값을 받아와 값을 수정하는 state 값: {count}</p>수정할숫자
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button onClick={updateCount}>값 수정</button>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{`${item.id}: ${item.text}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Counter;
