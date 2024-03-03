const link = document.querySelector("a")

function handleLink(event){
    event.preventDefault()
    console.log(event)
    

}

link.addEventListener('click', handleLink)

