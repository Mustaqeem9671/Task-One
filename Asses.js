
// Function to handle range input and update card styles
function range() {
  let x = document.querySelector(".range").value;
  console.log(x);
  if (x == 0) {
    document.getElementById("Mfree").style.cssText =
      "background-color: none;  ";
    document.querySelector(".Mpro").style.cssText =
      "background-color: none;   ";
    document.getElementById("Menter").style.cssText =
      "background-color: none;  ";
  }
  if (x >= 1 && x <= 10) {
    document.getElementById("Mfree").style.cssText =
      "background-color: #DED0B6; border-radius: 30px;  border: 3px solid #007bff; ";
    document.querySelector(".Mpro").style.cssText =
      "background-color: none; border-radius: 30px;  ";
    document.getElementById("Menter").style.cssText =
      "background-color: none; border-radius: 30px; ";
  }

  if (x >= 11 && x <= 20) {
    document.querySelector(".Mpro").style.cssText =
      "background-color: #F2F1EB; border-radius: 30px; border: 3px solid #007bff;";
    document.getElementById("Menter").style.cssText =
      "background-color: none; border-radius: 30px; ";
    document.getElementById("Mfree").style.cssText =
      "background-color: none; border-radius: 30px; ";
  }
  if (x >= 21 && x <= 30) {
    document.getElementById("Menter").style.cssText =
      "background-color: #C1F2B0; border-radius: 30px; border: 3px solid #007bff;";
    document.getElementById("Mfree").style.cssText =
      "background-color: none; border-radius: 30px; ";
    document.querySelector(".Mpro").style.cssText =
      "background-color: none; border-radius: 30px; ";
  }
}

 // Function to update user details in the card
function f1() {
  console.log("f1() called");
  let name = document.getElementById("naame").value;
  let email = document.getElementById("maiil").value;
  let content = document.getElementById("texxt").value;
  document.getElementById("namee").innerHTML = name;
  document.getElementById("emaill").innerHTML = email;
  document.getElementById("contentt").innerHTML = content;
}