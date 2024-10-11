let cntdown = document.querySelector(".countdown");
let resetvalue = document.querySelector(".resetValue");
let startbtn = document.querySelector(".startbtn");
let resetbtn = document.querySelector(".resetbtn");
let stopbtn = document.querySelector(".stopbtn");
let timebtn = document.querySelector(".timebtn");
let clearbtn = document.querySelector(".Clearbtn");

let stopId;
let start = 1;

// start function
startbtn.addEventListener('click', () =>{

    stopId = setInterval( () =>{
        cntdown.innerHTML = start++;
    }, 1000);
})

// stop btn function
stopbtn.addEventListener("click", () =>{
    clearInterval(stopId);
});

// reset btn function
resetbtn.addEventListener("click", () =>{
    clearInterval(stopId);
    start = 0;
    cntdown.innerHTML = "0";  // Reset the display
})

// getTime btn function
timebtn.addEventListener("click", () =>{
    const li = document.createElement("li");
    li.innerText = `The stop time is ${start-1}`;
    resetvalue.appendChild(li);
})

// clearbtn function
clearbtn.addEventListener("click", () =>{
    resetvalue.innerHTML = "";
})