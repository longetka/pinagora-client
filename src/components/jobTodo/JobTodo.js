import React from 'react';

const JobTodo = ({idRef, data}) => {

   const renderTodo = data.map((todo) => {
       if (idRef == todo.id) {
           return (

            <div id={todo.id}>
                <h3>
                    {todo.name}
                </h3>
                <ul>
                    <li>{todo.todoList}</li>

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
