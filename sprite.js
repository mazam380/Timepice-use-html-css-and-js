let hr = document.getElementById('hour');
let mints = document.getElementById('mints'); 
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date(); 
    // Getting hours, minutes, and seconds
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

   
    hr.style.transform = `rotate(${hRotation}deg)`;
    mints.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}


setInterval(displayTime, 1000);


displayTime();
