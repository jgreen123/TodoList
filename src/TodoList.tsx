import React from 'react';
import {Button, Table, TableHead, TableRow, TableCell, TableBody, Container} from '@mui/material'
import Select, {Options} from 'react-select';

// Since TypeScript is a strong typed language, everything needs to know what it it's receiving
interface todo {
    time: string;
    item: string;
}

// This is a functional component which is used instead of class components in the older version of React
const TodoList = () => {

    // This is similar setting state but it focuses on an individual state rather than multiple states like setState.
    const [todos, setTodos] = React.useState<todo[]>([]);

    // useRef is similar to referencing in class components except this is a hook.
    const inputRef = React.useRef<any>();
    const selectRef = React.useRef<any>();

    // Since the options won't change, the variable is capitalized to show it's final
    const OPTIONS: Options<{value: string, label: string}> = [
        {value: 'morning', label: 'morning'},
        {value:'afternoon', label: 'afternoon'},
        {value: 'evening', label: 'evening'},
        {value: 'night', label: 'night'}
    ];

    //  Instead of a render lifecycle in class components, a return is used to returned the elements
    return (
    <Container fixed>
        {/* by default, the Select value is morning */}
    <Select ref={selectRef} options={OPTIONS}/>
    <input ref={inputRef} type="text"/>

    {/* on click,the button keeps the initial state and adds the new values to it*/}
    <Button onClick={e => {
        
        return setTodos( (initialState: todo[]) => [...initialState, {time: selectRef.current.props.value.label, item: inputRef.current.value}])}}>Add Item</Button>
    
    <span>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Item</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* the todos are listed here in a map */}
            {todos.map((todo: todo) => {
                return(
                <TableRow>
                    {/*the "?" is added just in case the user does not add anything. If it doesn't exist, it returns undefined*/}
                    <TableCell>{todo?.time}</TableCell> 
                    <TableCell>{todo?.item}</TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    </span>
    </Container>);
}

export default TodoList;

