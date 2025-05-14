//props là một object 
const TodoData = (props) => {
    const { name, age, date } = props
    console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning react</div>
            <div>Learning vite</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;