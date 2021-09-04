
const countDown = () => {

    const targetDate = new Date("September 2 2024 00:00:00").getTime()    
    const now = new Date().getTime()
    
    const periodBtn = targetDate - now;
    
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
    
    
    const diffDays = Math.floor(periodBtn / day)
    const diffHours = Math.floor((periodBtn % day) / hour )
    const diffMinutes = Math.floor((periodBtn % hour) / minute )
    const diffSeconds = Math.floor((periodBtn % minute) / second )

    

    document.querySelector("#seconds").innerText = diffSeconds;
    document.querySelector("#minutes").innerText = diffMinutes;
    document.querySelector("#hours").innerText = diffHours;
    document.querySelector("#days").innerText = diffDays;

}


setInterval(countDown,1000)