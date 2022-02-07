import React from 'react';

const JobTodo = ({idRef, data}) => {

   const renderTodo = data.map((todo) => {
       if (+idRef === +todo.id) {
           let todos = todo.todoList.map((value, index) => {
               return <li key={index}>{value}</li>
           })
           return (
                <div id={todo.id}>
                    <h3>
                        {todo.name}
                    </h3>
                    <ul>
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
