const fetchApi = "https://jsonplaceholder.typicode.com/todos";

let todos = { items: null };

const root = document.getElementById("root");
const list = document.createElement("ul");

function init() {
    if (!todos.items) {
        root.appendChild(list);
        fetchTodos();
    }
}

//passes passed todos to table...
function fillMock(data) {
    todos.items = data;
    fillTable(todos.items);
    console.log(todos);
}

const setAttributes = (el, attrs) => {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

//func creates todos table and fills it...
const fillTable = (data) => {
    list.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let todoItem = data[i];
        let listItem = document.createElement("li");
        list.appendChild(listItem);

        let editTodoItem = document.createElement("button");
        editTodoItem.textContent = "edit";
        editTodoItem.addEventListener("click", (e) => {
            console.log(todoItem);
            redirectToNewTab(e, todoItem);
        });

        for (const prop in todoItem) {
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

            listItem.appendChild(editTodoItem);
        }
    }
};

//func fetches todos and invokes fillMock...
async function fetchTodos() {
    let response = await fetch(fetchApi);
    let data = await response.json();
    fillMock(data);
    return data;
}

init();
