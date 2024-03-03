const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"   //Upper case used when declaring variables that are a string
const USER_NAME_KEY = "username"
//const loginButton = document.querySelector("#login-form button")


function handleSubmitForm(event){
    event.preventDefault()      //The first variable is an object that gives information about the event that just happened
                                //Stops default behavior of the browser (Stopping the browser from refreshing)
    
    const username = loginInput.value
    localStorage.setItem(USER_NAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    

    sayGreetings(username)

}

function sayGreetings(username){

    greeting.innerText = `Hey there ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)

}


/* Rather than using Javascript, it would be better to use HTML to do the same job
    if(username === ""){
        alert('Please write your name')
   } else if(username.length>15){
        alert('Your name is too long')
    }
}
*/



const savedUsername = localStorage.getItem(USER_NAME_KEY)

if (savedUsername === null){
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",handleSubmitForm)

} else{
    //show greetings
    sayGreetings(savedUsername)
}

/*
loginButton.addEventListener("click", handleBtnClick )
*/
