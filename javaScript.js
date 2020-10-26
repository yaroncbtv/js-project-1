function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
    
} 
function hideElem() {
    document.getElementById("test").style.visibility = "hidden";
  }
  
  function showElem() {
    document.getElementById("test").style.visibility = "visible";
  }



function onClickFibonacci(){
    
    let input = document.getElementById("user-input").value;
    let result ;
    document.getElementById("result").innerHTML = '';
    
    if(input > 50){
        input = '';
        document.getElementById("result").innerHTML = input;
        targList = document.getElementsByClassName("alert");
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "visible";
            }
        }
    }

    else{
        
        targList = document.getElementsByClassName("alert");
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "hidden";
            }
        }
        targList = document.getElementsByClassName("spinner-border");
        if (targList) {
            for (var x = 0; x < targList.length; x++) {
                targList[x].style.visibility = "visible";
            }
        }
        
        input = input - 1;
        
        setTimeout(function(){ 
            targList = document.getElementsByClassName("spinner-border");
            if (targList) {
                for (var x = 0; x < targList.length; x++) {
                    targList[x].style.visibility = "hidden";
                }
            }
            result = fibonacci(input);
            console.log(result);
            document.getElementById("result").innerHTML = result;
        }, 2000);
        
    }

}



