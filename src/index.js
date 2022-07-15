import addTodoList from '../modules/addTodoList.js';
import TodoObject from '../modules/todoObject.js';
import { tasks } from '../modules/variables.js';
import './styles/style.css';

const textInput = document.querySelector('input');
const enterIcon = document.querySelector('.input');

textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault();
    const newTodo = new TodoObject();
    newTodo.description = textInput.value;
    newTodo.index = tasks.length + 1;
    addTodoList(newTodo);
    tasks.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textInput.value = null;
  }
});

enterIcon.addEventListener('click', () => {
  if (textInput.value) {
    const newTodo = new TodoObject();
    newTodo.description = textInput.value;
    newTodo.index = tasks.length + 1;
    addTodoList(newTodo);
    tasks.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textInput.value = null;
  }
});

tasks.forEach((element) => {
  addTodoList(element);
});
