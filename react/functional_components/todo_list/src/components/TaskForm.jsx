import React, { useReducer } from 'react';

const initialState = { 
    task: {
        content: '',
        checked: false
    }
}

function reducer(state,action) {
    return {
        ...state,
        [action.type]: {
            content: action.content,
            checked: action.checked
        }
    };
}

const TaskForm = props => {
    const [state,dispatch] = useReducer(reducer, initialState);

    function onChangeHandler(e){
        const {name, value} = e.target;
        dispatch({
            type: name,
            content: value,
            checked: false
        });
    }

    function onSubmitHandler(e){
        e.preventDefault();
        let newTask = state.task;
        if(newTask.length === 0){
            return;
        }

        props.onNewTask(newTask);

        dispatch({
            type: 'task',
            content: '',
            checked: false
        });
    }


    return (
        <div>
            <form className="row g-3" onSubmit={ onSubmitHandler }>
                <div className="col-auto">
                    <input type="text" className="form-control" name="task" value={ state.task.content } onChange={ onChangeHandler } />
                </div>
                <div className="col-auto">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default TaskForm;