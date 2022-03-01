// alert('Hello World!');
$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
    </div>
`);
// Note that we are using back ticks ( ` ) inside the append function, not single quotes ( ' )
import TodoList from "./TodoList.js";

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
