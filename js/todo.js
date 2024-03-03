const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")
const toDoDB = []
const TODODB_KEY = "toDoDB"

function createToDo(newToDos){
    const li = document.createElement("li")
    const span= document.createElement("span")
    li.appendChild(span)
    span.innerText = newToDos
    toDoList.append(li)

    const button =  document.createElement("button")
    button.innerText = "❌"
    li.appendChild(button)

    button.addEventListener("click", deleteToDo )

}


function deleteToDo(){
    this.parentNode.remove()
    /*
    console.log(event.target.parentElement)
    console.log(event.composedPath())
    */

}

function saveToDo(){
    localStorage.setItem(TODODB_KEY, JSON.stringify(toDoDB))  //Making the strings into an array, so that I can load the data from the array later on 

    
}



function handleToDoList(event){
    event.preventDefault()
    const newToDos = toDoInput.value
    toDoInput.value = ""
    createToDo(newToDos)

    toDoDB.push(newToDos)
    saveToDo()


}

toDoForm.addEventListener("submit", handleToDoList)







const savedToDos = localStorage.getItem(TODODB_KEY)     //Currently the data in the local Storage is just a string
console.log("Code block reached"); // Add this line to verify if the code block is reached

function sayHi(){
    console.log("Hi!")
}



if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)          //So we use parse in order to make it into an array
    
    console.log(savedToDos)
    console.log(parsedToDos)
    //parsedToDos.forEach(sayHi)

    }


