let countDown= new Date("may 5, 2024 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance= countDown-now;

    const days =Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours =Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes =Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds =Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hrs").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;

},1000)