const val=document.querySelector('#counter');

let decrement=()=>{
    //get value from ui
    let value = parseInt(val.innerText);
    //update value
    value = value - 1;
    //set value to ui
    val.innerText = value;
}

let increment=()=>{
    let value = parseInt(val.innerText);
    value = value + 1;
    val.innerText = value;
}