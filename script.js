// Sample holiday list
const holidays = [
"2026-01-01",
"2026-01-26",
"2026-08-15",
"2026-10-02",
"2026-12-25"
];

let evenPhase = false;

function resetLights(){

for(let i=1;i<=7;i++){
document.getElementById("l"+i).className="light off";
}

}

function turnOn(arr){

arr.forEach(x=>{
document.getElementById("l"+x).className="light on";
});

}

function checkLights(){

resetLights();

const date=document.getElementById("date").value;

if(date==""){
alert("Select Date");
return;
}

const holiday=holidays.includes(date);

let useEven=evenPhase;

if(holiday){

useEven=!useEven;

document.getElementById("holidayStatus").innerHTML="Holiday : YES";

}else{

document.getElementById("holidayStatus").innerHTML="Holiday : NO";

}

if(useEven){

turnOn([2,4,6]);

document.getElementById("phase").innerHTML="Phase : Even";

}else{

turnOn([1,3,5,7]);

document.getElementById("phase").innerHTML="Phase : Odd";

}

// Next day's phase
evenPhase=!evenPhase;

if(holiday){
evenPhase=!evenPhase;
}

}