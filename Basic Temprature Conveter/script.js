const celciusinput = document.getElementById("celcius");
const farhenheitinput = document.getElementById("farhenheit");
const kelvininput = document.getElementById("kelvin");
const rankineinput = document.getElementById("rankine");
const newtoninput = document.getElementById("newton");
const romerinput = document.getElementById("romer");
const reaumurinput = document.getElementById("reaumur");
const delisleinput = document.getElementById("delisle");

let celciusval = 0;
const inputs = document.getElementsByClassName("input");
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    switch (e.target.name) {
      case "celcius":
        farhenheitinput.value = value * 1.8 + 32;
        kelvininput.value = value + 273.15;
        rankineinput.value = ((value + 273.15) * 9) / 5;
        newtoninput.value = (value * 33) / 100;
        romerinput.value = (value * 21) / 40 + 7.5;
        reaumurinput.value = (value * 4) / 5;
        delisleinput.value = ((100 - value) * 3) / 2;
        break;
      case "farhenheit":
        celciusval = (value - 32) / 1.8;
        celciusinput.value = celciusval;
        kelvininput.value = celciusval + 273.15;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        newtoninput.value = (celciusval * 33) / 100;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        reaumurinput.value = (celciusval * 4) / 5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;
      case "kelvin":
        celciusval = value + 273.15;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        newtoninput.value = (celciusval * 33) / 100;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        reaumurinput.value = (celciusval * 4) / 5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;
      case "rankine":
        celciusval = ((value + 273.15) * 9) / 5;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        kelvininput.value = celciusval + 273.15;
        newtoninput.value = (celciusval * 33) / 100;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        reaumurinput.value = (celciusval * 4) / 5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;
      case "newton":
        celciusval = (value * 33) / 100;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        kelvininput.value = celciusval + 273.15;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        reaumurinput.value = (celciusval * 4) / 5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;
      case "romer":
        celciusval = (value * 21) / 40 + 7.5;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        kelvininput.value = celciusval + 273.15;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        newtoninput.value = (celciusval * 33) / 100;
        reaumurinput.value = (celciusval * 4) / 5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;

      case "reaumer":
        celciusval = (value * 4) / 5;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        kelvininput.value = celciusval + 273.15;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        newtoninput.value = (celciusval * 33) / 100;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        delisleinput.value = ((100 - celciusval) * 3) / 2;
        break;
      case "delisle":
        celciusval = ((100 - value) * 3) / 2;
        celciusinput.value = celciusval;
        farhenheitinput.value = celciusval * 1.8 + 32;
        kelvininput.value = celciusval + 273.15;
        rankineinput.value = ((celciusval + 273.15) * 9) / 5;
        newtoninput.value = (celciusval * 33) / 100;
        romerinput.value = (celciusval * 21) / 40 + 7.5;
        reaumurinput.value = (celciusval * 4) / 5;
        break;
    }
  });
}
