let result;

function addition() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a + b;
  document.getElementById("result").innerText = result;
}
let subtraction = () => {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a - b;
  document.getElementById("result").innerText = result;
};
const multiple = function () {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a * b;
 
  document.getElementById("result").innerText = result;
};
function Division() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  if (b == 0) {
    alert("Divide by zero is not possible");
  } else {
    result = a / b;
    
    document.getElementById("result").innerText = result;
  }
}
