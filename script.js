let form = document.querySelector("form");
let input = document.querySelector(".age");
let result = document.querySelector(".result");

function byYear(userYear){
    let TheYear = new Date().getFullYear();
    return (TheYear - userYear);
}
function byDate(userDate){
    return userDate * 365;
}
function byHour(userHour){
    return userHour * 24;
}
function byMinute(userMinute){
    return userMinute * 60;
}
function bySecond(userSecond){
    return userSecond * 60;
}


form.addEventListener("submit" , e=>{
    e.preventDefault();
    let year = byYear(input.value);
    let day = byDate(year);
    let hour = byHour(day);
    let minute = byMinute(hour);
    let second = bySecond(minute);  

    if(input.value == ''){ 
        alert("pleaze enter your year of birth")
    }else{
    result.innerHTML = 
    `
    <p>By years:  ${year} year </p>
    <p>By days:  ${day} day  </p>
    <p>By hours:   ${hour} hour </p>
    <p>By minutes: ${minute} minute</p>
    <p>By seconds: ${second} second</p>
    `
   input.value = '';
    }
    
})
