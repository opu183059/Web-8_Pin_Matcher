function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';

    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const input = document.getElementById('typedNumbers');

    if(isNaN(number)){
        if(number =='C'){
            input.value = '';
        }
        else{
            var inputResult = document.getElementById('typedNumbers').value;
            var removeValue = inputResult.slice(0, inputResult.length - 1);
            document.getElementById('typedNumbers').value = removeValue;
        }
    }
    else{
        const previousNumber = input.value;
        const currentNumber = previousNumber + number;
        input.value = currentNumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const input = document.getElementById('typedNumbers').value;
    const successMessage = document.getElementById('notifySuccess');
    const failError = document.getElementById('notifyFail');
    if (pin == input) {
        console.log("Success");
        // successMessage.style.display = 'block';
        // failError.style.display = 'none';
    }
    else {
        console.log("Not matched")
        // successMessage.style.display = 'none';
        // failError.style.display = 'block';
    }
}
