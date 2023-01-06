const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`
}
getClock() // setInterval에선 새로고침 하고 1초를 기다려야 하기 때문에 바로 실행한번 해줌
setInterval(getClock, 1000); //매초 실행(새로고침)

