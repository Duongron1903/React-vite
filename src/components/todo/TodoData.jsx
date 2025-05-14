//props là một object 
const TodoData = (props) => {
    const { todoList, deleteTodo } = props

    const onClickDelete = (id) => {
        deleteTodo(id);
        // const newTodoList = todoList.filter((item) => item.id !== id);
        // setTodoList(newTodoList);
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log('>>> check map: ', item, index);
                return (
                    <div className={`todo-item`} key={item.id} >
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }} onClick={() => onClickDelete(item.id)}> Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;