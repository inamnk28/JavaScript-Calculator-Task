let yourview = document.getElementById("space")

//const view = (number) => {
    //yourview.value += number ;
//}
let answer = () => {
  yourview.value = eval(yourview.value)
}
function nothing() {
    yourview.value = '';
}

function view(num) {
    yourview.value += num;
}

function del() {
    yourview.value = yourview.value.slice(0,-1);
}
