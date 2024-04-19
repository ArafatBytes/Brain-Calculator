let firstNumber='';
let secondNumber='';
let operator='';
let number='';
let result='';

const display=document.querySelector('.display');
const buttons=document.querySelectorAll('button');
const audio=document.querySelector('audio');

display.textContent='0';

buttons.forEach((button)=>{
     button.addEventListener('click',function(e){
          play();
          if(this.classList.contains('operand')){
               if(!operator){
                    updateDisplay(updateFirstNumber(this.value));
               }
               if(operator){
                    updateDisplay(updateSecondNumber(this.value));
               }
          }
          if(this.classList.contains('operator')){
               if(firstNumber && secondNumber && operator){
                    updateDisplay(operate(firstNumber,operator,secondNumber));
                    clear();
                    firstNumber=display.textContent;
               }
               updateOperator(this.value);
          }
          if(this.id=='clear'){
               clear();
               display.textContent='0';
          }
          if(this.id=='cancel'){
               let str=display.textContent.slice(0,-1)
               updateDisplay(str);
               if(!operator){
                    firstNumber=str;
               }
               if(operator){
                    secondNumber=str;
               }
          }
          if(this.id=='PM'){
               let str=display.textContent;
               let n=Number(str);
               n=-n;
               updateDisplay(n);
               firstNumber=display.textContent;
          }
          if(this.id=='equal'){
               updateDisplay(operate(firstNumber,operator,secondNumber));
               clear();
               firstNumber=display.textContent;
          }
          if(this.id=='percent'){
               let str=display.textContent;
               let n=Number(str);
               n/=100;
               updateDisplay(n);
               clear();
               firstNumber=display.textContent;
          }
     });
});

function updateFirstNumber(input){
     number+=input;
     firstNumber=number;
     return number;
}

function updateSecondNumber(input){
     number+=input;
     secondNumber=number;
     return number;
}

function updateDisplay(input){
     display.textContent=input;
}

function updateOperator(input){
     operator=input;
     number='';
     return operator;
}

function operate(numb1,op,numb2){
     let num1=Number(numb1);
     let num2=Number(numb2);
     switch(op){
          case '+':
               return num1+num2;
          case '-':
               return num1-num2;
          case 'x':
               return num1*num2;
          case '÷':
               return num1/num2;
     }
}

function clear(){
     firstNumber='';
     secondNumber='';
     operator='';
     number='';
     result='';
}

function play(){
     audio.play();
}
