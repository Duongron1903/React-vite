import { useState } from "react";

const TodoNew = (props) => {

    //use State hook
    //const valueInput = "Duong";
    const [valueInput, setValueInput] = useState("Duong");
    const [clickCount, setClickCount] = useState(0);
    const { addNewTodo } = props;
    // addNewTodo('Duong');

    const handleClick = () => {
        console.log(">>> check value input: ", valueInput);
        setClickCount(prev => prev + 1);
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}>Add</button>
            <div> Số lần bấm nút = {clickCount}</div>
            <div> My tech input is = {valueInput} </div>
        </div>
    )
}

export default TodoNew;