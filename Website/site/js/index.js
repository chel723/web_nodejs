// This is your JS Entry point... You can add as many as JS files you want if you think it is better!
  
import axios from 'axios';
//window.axios = axios;

window.onload = function(){
    document.getElementById('checkButton').onclick = function(){
        var formulaInput = document.getElementById('formula').value;
        var responseMessage = document.getElementById('message');
        //var axios = require('axios');

        axios.post('http://localhost:8081/', {formula:formulaInput})
        .then((response) => {
            //manage ok response
            responseMessage.innerHTML = "Syntax Correct";
        })
        .catch((error) => {
            //manage error...
            responseMessage.innerHTML = "Syntax Error"; 
        })
    }
}

function operation(numb1, numb2, operator) {
    
            var numb1 = parseInt(numb1);
            var numb2 = parseInt(numb2);
            var result;
            // Perform operation
            switch (operator) {
              case "+":
                result = oldNum + theNum;
                break;
        
              case "-":
                result = oldNum - theNum;
                break;
        
              case "*":
                result = oldNum * theNum;
                break;
        
              case "/":
                result = oldNum / theNum;
                break;
            }
            return result;
     }
             
document.getElementById('evalButton').onclick = function(){
        var formulaInput = document.getElementById('formula').value;
        var responseMessage = document.getElementById('message');
        var arithmetic = formulaInput.replace(/[^0-9+---*-\/]/g, "");
        //var axios = require('axios');

        axios.post('http://localhost:8081/', {formula:arithmetic})
        .then((response) => {
            //manage ok response
            if (eval(arithmetic) === Infinity) {
                responseMessage.innerHTML = "Math Error";
            }else{
            var numb = arithmetic.split(/(?=[-+*\/])/);
            var operator = arithmetic.replace(/[^0-9+---*-\/]/g, "").split("");
            var i; 
            var j=0;
            var result=0;
            for(i=1;i<numb.length;i++){
                result = operation(0,numb[i],operator[j]);
                j++;
            }
            responseMessage.innerHTML = result;
            }
        })
        .catch((error) => {
            //manage error...
            responseMessage.innerHTML = "Syntax Error"; 
        })
}


 