const clock = document.querySelector("#clock")
const calendar = document.querySelector("#date")
const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

function getClock(){
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")

    calendar.innerText =`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}[${day[date.getDay()]}]`
    clock.innerText = `${hours}:${minutes}:${seconds}`

}

//Setting the function and the interval between the function, so that a certain function is repeated 
//setTimeout(sayHi, 4000)

getClock()
setInterval(getClock, 1000)
