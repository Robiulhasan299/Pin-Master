function getPIn(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin ;
    }else{
        return getPIn();
    }
}

function generatePin(){
    const randoms = Math.round(Math.random()* 10000);
    return randoms;
}

document.getElementById('generatePin').addEventListener('click',function(){
   const pin =   getPIn();
   const displayPinField = document.getElementById('displayPin');
   const displayPinShow = displayPinField.value;
   displayPinField.value = pin;
});


document.getElementById('calcuretor').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumbersFields = document.getElementById('typeNumbers');
    const previusTypeNumber = typeNumbersFields.value;
    if(isNaN(number)){
         if(number === 'C'){
            typeNumbersFields.value = '';
         }else if(number === '<'){
            const digits  = previusTypeNumber.split('');
            digits.pop();
            const remeningdigits = digits.join('');
            typeNumbersFields.value = remeningdigits;
         }
    }else{
    
      
        const newTypeNumber = previusTypeNumber + number;
        typeNumbersFields.value = newTypeNumber 
    }
    // typeNumbersFields.value ='';
});


document.getElementById('submitBtn').addEventListener('click',function(){
  const displayPin = document.getElementById('displayPin');
  const currentPin  = displayPin.value;

  const typeNumbersFields = document.getElementById('typeNumbers');
  const typeNumbers = typeNumbersFields.value;

  const pinSuccesMessage = document.getElementById('success');
  const wrongPin = document.getElementById('wrong');
  if(currentPin === typeNumbers){
     pinSuccesMessage.style.display = 'block';
     wrongPin.style.display = 'none';
  }else{
      wrongPin.style.display = 'block';
      pinSuccesMessage.style.display = ' none';
  }
});