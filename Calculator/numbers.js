const display=document.getElementById('display');

function appendToDisplay(num){
    display.value+=num;
}
function calculate(){
    display.value=eval(display.value);
}
function clearDisplay(){

    try{

        display.value="";
    }
    catch(error){
        display.value="Error";

    }
}  
  

 