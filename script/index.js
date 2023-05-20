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
    // console.log(typeof num)
    let displayArray = yourview.value.split('')
    // console.log(displayArray)
    if(num != '.'){
        // console.log('reached')
        displayArray.push(num)
        return yourview.value = displayArray.join('');
    }
    else if(num === '.' && displayArray.includes('.')){
        // console.log('second reach')
        return yourview.value = displayArray.join('');

    } else {
        displayArray.push('.')
        // console.log('third reach')
        yourview.value = displayArray.join('');
    }
}

function del() {
    yourview.value = yourview.value.slice(0,-1);
}

