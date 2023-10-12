let keys = document.querySelector("table");
let input = document.querySelector("#result");
let histor = document.querySelector("#history")
let flag = false;
function clear() {
    input.value = 0;    
    history("")
    flag=false
}
function del(){
    input.value = input.value.slice(0, -1)
}
function history(val) {
    histor.value=val
}
function calc() {
    try {
        history(input.value)
        var expression =eval(input.value.replace(/×/g, '*').replace(/÷/g,'/'));
        input.value = expression 
        flag=true
    }
    catch {
        input.value="no";
    }
}
function display(val) {
    input.value += val;
}

keys.onclick = (e) => {
    if (flag == true) {
        console.log("true");
        clear()
    }
    
    let val =e.target.innerHTML;
    if (val == "C") {
        clear()
    }
    else if (val == "CE") {
        del()
    }
    else if (val == "=") {
        calc()
    }
    else if (e.target.tagName == "TD") {
        display(val)
    }

}
