function fibonacci(num) {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
function hideElem() {
  document.getElementById("test").style.visibility = "hidden";
}
function showElem() {
  document.getElementById("test").style.visibility = "visible";
}
let arraySort = []
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
    for (let i = 0; i < data.results.length; i++) {
      let mill = data.results[i].createdDate
      let date = new Date(mill)
      dateConvvert = date.toString()
      var li = document.createElement('li');
      li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is " + data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
      li.setAttribute('style', 'display: block;');
      ul.appendChild(li);
    }
    cont.appendChild(ul);
  });
function onClickNumberAsc() {
  fetch('http://localhost:5050/getFibonacciResults')
    .then(response => response.json())
    .then(data => {

      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < data.results.length - 1; i++) {
          if (data.results[i].number > data.results[i + 1].number) {
            let tmp = data.results[i];
            data.results[i] = data.results[i + 1];
            data.results[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
      var myobj = document.getElementById("theList");
      myobj.remove();
      var cont = document.getElementById('result-2');
      var ul = document.createElement('ul');
      ul.setAttribute('style', 'padding: 0; margin: 0;');
      ul.setAttribute('id', 'theList');
      var e = "<hr/>";
      for (let i = 0; i < data.results.length; i++) {
        let mill = data.results[i].createdDate
        let date = new Date(mill)
        dateConvvert = date.toString()
        var li = document.createElement('li');
        li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is " + data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');
        ul.appendChild(li);
      }
      cont.appendChild(ul);
    });
}
//---------------------------------------------------------------------------------------
function onClickNumberDeac() {
  fetch('http://localhost:5050/getFibonacciResults')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < (data.results.length - 1); i++) {
        for (let j = 0; j < data.results.length - i - 1; j++) {
          if (data.results[j].number < data.results[j + 1].number) {
            temp = data.results[j];
            data.results[j] = data.results[j + 1];
            data.results[j + 1] = temp;
          }
        }
      }
      var myobj = document.getElementById("theList");
      myobj.remove();
      var cont = document.getElementById('result-2');
      var ul = document.createElement('ul');
      ul.setAttribute('style', 'padding: 0; margin: 0;');
      ul.setAttribute('id', 'theList');
      var e = "<hr/>";
      for (let i = 0; i < data.results.length; i++) {
        let mill = data.results[i].createdDate
        let date = new Date(mill)
        dateConvvert = date.toString()
        var li = document.createElement('li');
        li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is " + data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');
        ul.appendChild(li);
      }
      cont.appendChild(ul);
    });
};
//------------------------------------------------------------------------------
function dateAsc() {
  fetch('http://localhost:5050/getFibonacciResults')
    .then(response => response.json())
    .then(data => {
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < data.results.length - 1; i++) {
          if (data.results[i].createdDate > data.results[i + 1].createdDate) {
            let tmp = data.results[i];
            data.results[i] = data.results[i + 1];
            data.results[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
      var myobj = document.getElementById("theList");
      myobj.remove();
      var cont = document.getElementById('result-2');
      var ul = document.createElement('ul');
      ul.setAttribute('style', 'padding: 0; margin: 0;');
      ul.setAttribute('id', 'theList');
      var e = "<hr/>";
      for (let i = 0; i < data.results.length; i++) {
        let mill = data.results[i].createdDate
        let date = new Date(mill)
        dateConvvert = date.toString()
        var li = document.createElement('li');
        li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is " + data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');
        ul.appendChild(li);
      }
      cont.appendChild(ul)
    });
}
function dateDeac() {
  fetch('http://localhost:5050/getFibonacciResults')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < (data.results.length - 1); i++) {
        for (let j = 0; j < data.results.length - i - 1; j++) {
          if (data.results[j].createdDate < data.results[j + 1].createdDate) {
            temp = data.results[j];
            data.results[j] = data.results[j + 1];
            data.results[j + 1] = temp;
          }
        }
      }
      var myobj = document.getElementById("theList");
      myobj.remove();
      var cont = document.getElementById('result-2');
      var ul = document.createElement('ul');
      ul.setAttribute('style', 'padding: 0; margin: 0;');
      ul.setAttribute('id', 'theList');
      var e = "<hr/>";
      for (let i = 0; i < data.results.length; i++) {
        let mill = data.results[i].createdDate
        let date = new Date(mill)
        dateConvvert = date.toString()
        var li = document.createElement('li');
        li.innerHTML += "The Fibonnaci Of " + data.results[i].number + " is " + data.results[i].result + ". " + "Calculated at: " + dateConvvert + "<hr/>";      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');
        ul.appendChild(li);
      }
      cont.appendChild(ul);
    });
};
function onClickFibonacci() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true) {
    let numInput = document.getElementById("user-input").value;
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
            if (text.includes("42")) {

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
            } else {
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
              }, 1500);
            }
          })
        }
      })
      .then((responseJson) => {
        if (flag === true) {
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
            contant.innerHTML += "NEW: The Fibonnaci Of " + responseJson.number + " is " + responseJson.result + ". " + "Calculated at: " + date + "<hr/>";      // assigning text to li using array value.
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
    let result;
    document.getElementById("result").innerHTML = '';

    if (input > 50 || input < 1) {
      input = '';
      document.getElementById("result").innerHTML = input;

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
    else {
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

      setTimeout(function () {
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
}

