document.addEventListener('DOMContentLoaded',function(){
    const display=document.getElementById('display');
    const buttons=Array.from(document.getElementsByClassName('btn'));
    let currentInput='';
    let operator='';
    let firstOperand='';
    buttons.forEach(button=>{
        button.addEventListener('click',() => {
            const value=button.getAttribute('data-value');
            
            if(value==='C'){
                currentInput='';
                operator='';
                firstOperand='';
                display.textContent='0';
            }
            else if(value==='='){
                if(operator && firstOperand!==''){
                    try{
                    currentInput=String(eval(`${firstOperand} ${operator} ${currentInput}`));
                    display.textContent=currentInput;
                    firstOperand='';
                    operator='';
                }catch(error){
                    console.error('Error in eval:${error}');
                    display.textContent='Error';
                }
            }    
        }
                else if(['+','-','*','/'].includes(value)){
                    if(currentInput!==''){
                        firstOperand=currentInput;
                        operator= value;
                        currentInput='';
                    }
                }
                else{
                    currentInput +=value;
                    display.textContent=currentInput;
                }
        });
    });
});