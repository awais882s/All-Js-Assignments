let allTodos = []
document.getElementById("updateBtn").style.display = "none";
function getValue(id) {
    return document.getElementById(id).value;
}

const showToast = (message, type, bg) => {
    Toastify({
        text: message,
        className: type,
        style: {
            background: bg
        }
    }).showToast();
}

const addTodo = () => {
    let title = getValue("title")
    let location = getValue("location")
    let description = getValue("description")
    title = title.trim()
    location = location.trim()
    description = description.trim()

    if (!title) { return showToast("Please enter a title", "error", "red") }
    if (!location) { return showToast("Please enter a location", "error", "red") }
    if (!description) { return showToast("Please enter a description", "error", "red") }
    let newTodo = {
        title,
        location,
        description,
        id: Math.random().toString(10).slice(2)
    }

    let oldTodos = JSON.parse(localStorage.getItem("todos")) || [];
    oldTodos.unshift(newTodo);

    localStorage.setItem("todos", JSON.stringify(oldTodos));
    showTable()
    showToast("Your todo has been successfully added.", "success", "green")
    document.getElementById("title").value = ""

    document.getElementById("location").value = ""

    document.getElementById("description").value = ""

}


const handleDelete = (item) => {
    let newTodos = allTodos.filter((todo) => {
        return item != todo.id
    })
    localStorage.setItem("todos", JSON.stringify(newTodos))
    showTable()
    showToast("Your todo has been successfully deleted.", "success", "green")
}

const handleUpdate = (id) => {

    let getItem = allTodos.filter(todos => todos.id == id)

    document.getElementById("title").value = getItem[0].title

    document.getElementById("location").value = getItem[0].location

    document.getElementById("description").value = getItem[0].description;

    document.getElementById("updateBtn").style.display = "inline-block";
    document.getElementById("addBtn").style.display = "none";

    document.getElementById("updateBtn").onclick = function () {
        let title = getValue("title");

        let description = getValue("description");
        let location = getValue("location");
        title = title.trim()
        location = location.trim()
        description = description.trim()

        if (!title) { return showToast("Please enter a title", "error", "red") }
        if (!location) { return showToast("Please enter a location", "error", "red") }
        if (!description) { return showToast("Please enter a description", "error", "red") }

        let newTodo = { title, location, description, id: id }


        let oldTodo = allTodos.filter((todo) => {
            return todo.id != newTodo.id
        })
        oldTodo.unshift(newTodo);
        localStorage.setItem("todos", JSON.stringify(oldTodo));
        showTable()
        showToast("Your todo has been successfully Updated.", "success", "green")
        document.getElementById("title").value = ""

        document.getElementById("location").value = ""

        document.getElementById("description").value = ""
        document.getElementById("updateBtn").style.display = "none";
        document.getElementById("addBtn").style.display = "inline-block";
    }
}

const showTable = () => {
    let tableHeader = "<table class='table'><thead><tr><th>No #</th><th>Title</th><th>Location</th><th>Description</th><th>Actions</th></tr></thead>"

    let todos = JSON.parse(localStorage.getItem("todos"))

    allTodos = todos;

    // let mainTable = todos.map((item) => {
    //     return 
    // })
    let mainTable = ""
    for (let i = 0; i < todos.length; i++) {
        mainTable += `<tr>
        <td>${todos[i].id}</td>
        <td>${todos[i].title}</td>
        <td>${todos[i].location}</td>
        <td>${todos[i].description}</td>
        <td>
        <button onclick="handleUpdate(${todos[i].id})" class='btn btn-edit me-2'><i style="font-size:20px" class="bi bi-pencil-fill"></i></button>
        <button onclick="handleDelete(${todos[i].id})" class="btn btn-delete"><i class='bi bi-trash-fill' style="font-size:20px"></i></button>
        </td>
        </tr>`
    }

    let tableFooter = "</table>"

    document.getElementById("output").innerHTML = tableHeader + mainTable + tableFooter;
}

showTable()

// setInterval(function () {
//     document.getElementById('text').style.display = "none";
// }, 1000)
document.getElementById('text')