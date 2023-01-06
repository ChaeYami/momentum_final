const todoForm = document.getElementById("todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo_list"); //ul
const needLogIn = document.getElementById("needLogIn");

const TODOS_KEY = "todos";

let savedTodoList = [];

// 리스트에 저장된 입력값들을 로컬에 string으로 저장합시다
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(savedTodoList));
}

function deletTodo(event){
    
                    // 이벤트를 받은 버튼의 parent = 클릭된 li
    const clickedDelLi = event.target.parentElement;
    clickedDelLi.remove();

    // function myfilter(todo) { return todo.id !== clickedDelLi.id }
    // savedTodoList = savedTodoList.filter(myfilter);
    savedTodoList = savedTodoList.filter((todo)=>todo.id !== parseInt(clickedDelLi.id)); //String->number
    saveTodos(); // 업데이트
}


function finishedTodo(event){
    const span = event.target;
    span.classList.toggle("strikethrough");
}

function paintTodo(todoElement){
    const listTag = document.createElement("li"); // create li tag in HTML
    listTag.id = todoElement.id; // 객체에서 받아온 id를 html 속 li 에도 저장
    const spanTag = document.createElement("span"); // create span in li
    spanTag.innerText = todoElement.text; // span에 input 넣기
    spanTag.addEventListener("click",finishedTodo);

    const delButton = document.createElement("button");
    delButton.innerText = "X";
    delButton.addEventListener("click",deletTodo)   
    listTag.appendChild(spanTag);   // li에 span 넣기
    listTag.appendChild(delButton); // li에 button 넣기
    todoList.appendChild(listTag);  // ul에 li 넣기
    
}

function todoSubmit(event){
    event.preventDefault(); //prevent refresh
    const newTodo = todoInput.value;  // 입력값 새 변수에 저장하고
    todoInput.value = "";             //입력창은 비워주기
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    savedTodoList.push(newTodoObj); // 새 todo 배열에 저장
    paintTodo(newTodoObj);  // todoElement = newTodoObj
    saveTodos()
}


// ============== 화면실행(새로고침) ================ 

todoForm.addEventListener("submit",todoSubmit);

// 새로고침 전에 저장된 거 불러오고
const getSavedTodos = localStorage.getItem(TODOS_KEY);

// 이미 로컬에 저장된 todo들이 있다면!
if(getSavedTodos !== null){
    // string으로 저장된 애들을 array로 바꿔주고
    const parsedTodos = JSON.parse(getSavedTodos); 
    // 리스트에 저장된걸로(array) 채워주고 
    savedTodoList = parsedTodos; 
    // 채운 리스트를 화면에 출력하고 시작해라
    parsedTodos.forEach(paintTodo);
}

if (savedUserName !== null) {
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    needLogIn.classList.add(HIDDEN_CLASSNAME);
    } 

