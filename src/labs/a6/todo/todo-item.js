/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

const TodoItem = ({
    todo
}) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={todo.done} />
            {todo.title} ({todo.status})
        </li>
    );
}

export default TodoItem;

/*
    //Note are passing in a JSON Object as the argument
    {
        todo = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }
*/
