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







  fetch('http://localhost:5050/getFibonacciResults')
  .then(response => 
    response.json()
    )
  .then(data => {
    
    var cont = document.getElementById('result-2');
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');
    
    
    
    var e = "<hr/>"; 
    for(let i = 0 ; i < data.results.length ; i++){
      let date = Date(data.results[i].createdDate)
      dateConvvert = date.toString()
      // e += "The Fibonnaci Of " + data.results[i].number + " is "+ data.results[i].result + ". " + dateConvvert +"<br/>" 
      var li = document.createElement('li');     // create li element.
        li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is "+ data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');    // remove the bullets.

        ul.appendChild(li);     // append li to ul.
    }
    cont.appendChild(ul);
 

    // document.getElementById("result-2").innerHTML = e;
  });







 
    // create ul element and set the attributes.
    
    

    




  // function display_array()
  // {
  //    var e = "<hr/>";   
      
  //    for (var y=0; y<array.length; y++)
  //    {
  //      e += "Element " + y + " = " + array[y] + "<br/>";
  //    }
  //    document.getElementById("Result").innerHTML = e;
  // }

function onClickFibonacci() {
  

  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    

    let numInput = document.getElementById("user-input").value;
  // let numInput = '42';
  let URL = 'http://localhost:5050/fibonacci/'
  URL = URL + numInput
  let flag = false
  let result = document.getElementById("result");
  
  document.getElementById("user-input").style.color = "black";
  document.getElementById("user-input").style.borderColor = "#CCCCCC";
 
            result.innerHTML = '';
            result.style.color = "#373A3C"
            result.style.textDecoration = "underline"
            result.style.fontSize = "24px"
            result.style.fontWeight = "bold"

  targListAlert = document.getElementsByClassName("alert");
  if (targListAlert) {
    for (var x = 0; x < targListAlert.length; x++) {
      targListAlert[x].style.visibility = "hidden";
    }
  }          

  result.innerHTML = ''
  result.style.visibility = "hidden"

  
  

  fetch(URL)
  .then((response) => {
    if (response.ok) {
      flag = true
      return response.json();
    } else {

      response.text().then(text => {
        if(text.includes("42")){
          
          targListSpin = document.getElementsByClassName("spinner-border");
          if (targListSpin) {
            for (var x = 0; x < targListSpin.length; x++) {
              targListSpin[x].style.visibility = "visible";
            }
          }
          setTimeout(function () {
            targListSpin = document.getElementsByClassName("spinner-border");
            if (targListSpin) {
              for (var x = 0; x < targListSpin.length; x++) {
                targListSpin[x].style.visibility = "hidden";
              }
            }
            
            result.style.visibility = "visible"
            result.innerHTML = "Server Error: " + text;
            result.style.color = "red"
            result.style.textDecoration = "none"
            result.style.fontSize = "15px"
            result.style.fontWeight = "normal"
          }, 1500); 
          
          



        }else{
          targListSpin = document.getElementsByClassName("spinner-border");
          if (targListSpin) {
            for (var x = 0; x < targListSpin.length; x++) {
              targListSpin[x].style.visibility = "visible";
            }
          }
          setTimeout(function () {
            targListSpin = document.getElementsByClassName("spinner-border");
            if (targListSpin) {
              for (var x = 0; x < targListSpin.length; x++) {
                targListSpin[x].style.visibility = "hidden";
              }
            }
            targListAlert = document.getElementsByClassName("alert");
            if (targListAlert) {
              for (var x = 0; x < targListAlert.length; x++) {
                targListAlert[x].style.visibility = "visible";
                targListAlert[x].innerHTML = text
              }
            }
           
            document.getElementById("user-input").style.color = "#D9534F";
            document.getElementById("user-input").style.borderColor = "#D9534F";
            // result = fibonacci(input);
            // console.log(result);
            // document.getElementById("result").innerHTML = result;
          }, 1500);  

        }
        
      
        
      })
      

      // document.body.style.backgroundColor = "red";

    }
  })
  
    .then((responseJson) => {
     if(flag === true){
      
     
      targList = document.getElementsByClassName("spinner-border");
      if (targList) {
        for (var x = 0; x < targList.length; x++) {
          targList[x].style.visibility = "visible";
        }
      }
      setTimeout(function () {
        targList = document.getElementsByClassName("spinner-border");
        if (targList) {
          for (var x = 0; x < targList.length; x++) {
            targList[x].style.visibility = "hidden";
          }
        }
        
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").innerHTML = responseJson.result;






      var contant = document.getElementById('result-2');
      let date = Date(responseJson.createdDate)
      contant.innerHTML += "The Fibonnaci Of " + responseJson.number + " is "+ responseJson.result + ". " + "Calculated at: " + date + "<hr/>";      // assigning text to li using array value.
        






      }, 1500);

     }
    })

    
    
    .catch((error) => {
      console.log(error)
    });



  } 
  
  //----------------------------------------------------------------------------------
  else {
    let result_h = document.getElementById("result");
     document.getElementById("user-input").style.color = "black";
  document.getElementById("user-input").style.borderColor = "#CCCCCC";
 
      result_h.innerHTML = '';
      result_h.style.color = "#373A3C"
      result_h.style.textDecoration = "underline"
      result_h.style.fontSize = "24px"
      result_h.style.fontWeight = "bold"
    
    let input = document.getElementById("user-input").value;
      let result ;
      document.getElementById("result").innerHTML = '';

      if(input > 50 || input < 1){
          input = '';
          document.getElementById("result").innerHTML = input;
          
          targList = document.getElementsByClassName("spinner-border");
          if (targList) {
              for (var x = 0; x < targList.length; x++) {
                  targList[x].style.visibility = "visible";
              }
          }
          
          
          
          setTimeout(function(){ 
            targList = document.getElementsByClassName("spinner-border");
            if (targList) {
                for (var x = 0; x < targList.length; x++) {
                    targList[x].style.visibility = "hidden";
                }
            }
            targList = document.getElementsByClassName("alert");
          if (targList) {
              for (var x = 0; x < targList.length; x++) {
                document.getElementById("user-input").style.color = "#D9534F";
                document.getElementById("user-input").style.borderColor = "#D9534F";
                  targList[x].innerHTML = "Can't be larger than 50"
                  targList[x].style.visibility = "visible";
              }
          }
        }, 1500);







          
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
              document.getElementById("result").style.visibility = "visible";
              document.getElementById("result").innerHTML = result;
          }, 1500);

      }
  }



  
    
    

  // fetch('http://localhost:5050/fibonacci/51')
  //   .then(response => {
  //     if(!response.ok) {

  //       let input = '';
  //       document.getElementById("result").innerHTML = input;

  //       response.text().then(text => {

  //         throw Error(text)


  //       })

  //     }
  //     else {
  //      return response.json();
  //    }    
  //   })

  //   .catch(err => {
  //     console.log('caught it!',err);
  //   })


  //   .then(data => {
  //     console.log(data)

  //   })






  



}


// ------------------------------------------------------------------------------------
// let numInput = '51';
  // let URL = 'http://localhost:5050/fibonacci/'
  // URL = URL + numInput
  // fetch(URL)

  // .then(response => response.json())
  // .then(data => 

  //   console.log(data)

  // )