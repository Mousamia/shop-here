const plusBtn = document.getElementById('iphone-add-btn').addEventListener('click', function(){
    gettingInputValue(true);
})
const minusBtn = document.getElementById('iphone-remove-btn').addEventListener('click', function(){
    gettingInputValue(false);
})

function gettingInputValue(isIncreased){
    // step-1: Get input field
    const inputField = document.getElementById(inputId);
    // step-2: Get input value
    const inputValue = inputField.value;
    // step-3: converting
    let inputValuetoNumber = parseInt(inputValue);
    //step-4: adding +1 with input value everytime clicked
    
    if(isIncrease === true){
        const updatedNumber = inputValuetoNumber + 1;
    }

    else 
        updatedNumber = inputValue - 1;






    console.log(updatedNumber);
    //step-5: setting the updated value into input field 
     inputField.value = updatedNumber;
}












console.log("samiaaaaaaaaaaaaaa");