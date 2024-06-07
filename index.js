let bracketCount=0;

        //This is function for keeping track of the brackets

        //This increments the bracketCount when we click '('
        function increamentBracket(){
            bracketCount++;
            let display = document.getElementById('display');
            display.value += '(';
            console.log(bracketCount)
        }
        //This decrement the bracketCount when we click ')' and if its 0 no closing bracket will be added
        function checkBracket(){
            if(bracketCount!==0){
                let display = document.getElementById('display');
                bracketCount--;
                console.log(bracketCount)
                display.value += ')';
            }
            
        }

        //function to restrict operator and point to be typed after each other
        function checkOperator(op){
            let display = document.getElementById('display');
            let value = display.value;
            console.log(op)
            let lastChar = value.charAt(value.length -1)
            if(lastChar !== '/' && lastChar !== 'x' && lastChar !== '+' && lastChar !== '-' && lastChar !== '.'){
                display.value += op;

            }

            

            
        }
        
        //formating
        function calc(){
            let display = document.getElementById('display');
            let answer = display.value;
            result = answer.replace('x','*')
            result=eval(result)
            if (result >= 999999999) {
                display.value = result.toExponential(1); 
            } else {
                 display.value = result;
            }
        }


        