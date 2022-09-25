console.log("this is calci");

let calci = document.getElementById("calci");
let calciValue = "";
let btn = document.querySelectorAll("button");
let inpt = document.querySelector("input");

for (num of btn) {
  num.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == "X") {
      btnText = "*";
      calciValue += btnText;
      calci.value = calciValue;
    } else if (btnText == "%") {
      calciValue += btnText;
      calci.value = calciValue;
    } else if (btnText == "DEL") {
      calci.value = calciValue.slice(0, -1);
      calciValue = calci.value;
    } else if (btnText == "AC") {
      calciValue = "";
      calci.value = calciValue;
    } else if (btnText == "=") {
      calci.value = eval(calciValue);
      calciValue = calci.value;
    } else {
      calciValue += btnText;
      calci.value = calciValue;
    }
  });
}
