let yourview = document.getElementById("space")

const view = (number) => {
    yourview.value += number ;
}
let answer = () => {
    yourview.value = eval(yourview.value)
}
function nothing() {
    yourview.value = '';
}


