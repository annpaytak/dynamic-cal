const fetchApi = "https://jsonplaceholder.typicode.com/todos";

let todos = { items: null };
let userId;

const root = document.getElementById("root");
const list = document.createElement("ul");

function init() {
    if (!todos.items) {
        root.appendChild(list);
        fetchTodos();
    }
}

//func fetches todos and invokes fillMock...
async function fetchTodos() {
    let response = await fetch(fetchApi);
    let data = await response.json();
    fillMock(data);
    return data;
}

//passes passed todos to table...
function fillMock(data) {
    todos.items = data;
    // userId = data...userId;
    fillTable(todos.items);
}

const setAttributes = (el, attrs) => {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

//func creates todos table and fills it...
const fillTable = (data) => {
    // if(!todos.items) return;
    list.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let todoItem = data[i];
        let listItem = document.createElement("li");
        list.appendChild(listItem);

        let editTodoItemEl = document.createElement("button");
        editTodoItemEl.textContent = "edit";
        editTodoItemEl.addEventListener("click", (e) => {
            console.log(todoItem);
            editTodoItem(e, todoItem);//
        });

        for (const prop in todoItem) {
            if(prop === "id")
                setAttributes(listItem, { key: todoItem[prop] });

            if (prop === "completed") {
                let checkbox = document.createElement("input");
                checkbox.id = "checkbox";
                todoItem[prop]
                    ? setAttributes(checkbox, {
                        type: "checkbox",
                        checked: "checked",
                        class: "checkbox",
                    })
                    : setAttributes(checkbox, { type: "checkbox", class: "checkbox" });
                listItem.appendChild(checkbox);
                checkbox.disabled = true;
            }

            if (prop === "title") {
                let titleEl = document.createElement("label");
                titleEl.textContent = todoItem[prop];
                listItem.appendChild(titleEl);
            }

            listItem.appendChild(editTodoItemEl);
        }
    }
};

const editTodoItem = (e, { id, userId, title, completed }) => {

    console.log(e.target.parentElement);//li
    //title convert to input
    let titleEl = e.target.parentElement.getElementsByTagName('label')[0];
    let titleElInp = document.createElement('input');
    setAttributes(titleElInp, { type: "text" });
    titleEl.parentNode.replaceChild(titleElInp, titleEl);
    titleElInp.value = title;

    //checkbox remove disabled
    let checkbox = e.target.parentElement.getElementsByClassName("checkbox")[0];
    checkbox.removeAttribute("disabled");

    // edit change to save
    e.target.textContent = 'save';
    e.target.addEventListener("click", ()=>{
        //form updated todoitem
        let postData = {
            id: id,
            userId: userId,
            title: titleElInp.value,
            completed: checkbox.checked
        };
        //updated todoitem post to fetchapi
        postUpdatedItem(postData);
    })

}

const postUpdatedItem = async (postData) => {
    //data
    try {
        let putMethod = {
            method: "PUT",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        //data to json
        //put create
        let response = await fetch(`${fetchApi}/${postData.id}`, putMethod);
        let data = await response.json();

        if(response.ok){
            redrawUi(data);
        } else{
            throw Error(response.statusText);
        }

    } catch (e) {
        console.log(e);
    }

}

const redrawUi = ({ id, title, completed }) => {
    console.log(id, title, completed);

    todos.items.map(item => {
        if(item.id === id){
            item.title = title;
            item.completed = completed;
        }
    });

    fillMock(todos.items);
}

init();
