import React from 'react';
import JobTodoItem from './JobTodoItem';

const JobTodo = ({idRef, data}) => {

   const renderTodo = data.map((todo) => {
       if (+idRef === +todo.id) {
           let todos = todo.todoList.map((value, index) => {
               return <JobTodoItem name={value} elemKey={index} />
           })
           return (
                <div id={todo.id}>
                    <h3 className="jobTodo__title jobTodo__title--isComplete">
                        {todo.name}
                    </h3>
                    <ul className="jobTodo__list">
                        {todos}
                    </ul>
                </div>
               )
           }
       });
    
    return (
        <div className="jobTodo">
            {renderTodo}
        </div>
    );
};

export default JobTodo;
