const send = document.querySelector("#button");
const FirstName = document.getElementById("fName");
const LastName = document.getElementById("lName");
const Email = document.getElementById("email");
const Message = document.getElementById("message");
const ErrorMessage = document.getElementById("error");
//REGEX
let EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let NamePattern = /^[a-zA-Z0-9_-]{3,15}$/;

send.addEventListener("click", function () {
  ErrorMessage.innerHTML = "";

  if (
    FirstName.value === "" ||
    LastName.value === "" ||
    Email.value === "" ||
    Message.value === ""
  ) {
    ErrorMessage.innerHTML = "Fill in all  fields";
  } else if (!EmailPattern.test(Email.value)) {
    ErrorMessage.innerHTML = "Invalid Email Format";
  } else if (
    !NamePattern.test(FirstName.value) ||
    !NamePattern.test(LastName.value)
  ) {
    ErrorMessage.innerHTML =
      "Do not use specials character or less than 3 characters";
  } else {
    // let data = {firstName:FirstName.value, lastName:LastName.value, email:Email.value, message:Message.value};
    // console.log(data);
    // let xhttp = new XMLHttpRequest();

    // xhttp.onload = function(){
    //     const serverResponse = this.responseText
    //     console.log(serverResponse);
    // }

    // xhttp.open("POST", "./php/email.php")
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(data))

    let xhttp = new XMLHttpRequest();
    let data = `firstName=${FirstName.value}&lastName=${LastName.value}&email=${Email.value}&message=${Message.value}`;
    xhttp.onload = function () {
      const serverResponse = this.responseText;
      //   console.log(serverResponse);
    };
    console.log(data);
    xhttp.open("POST", "./php/email.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
    console.log(xhttp);
  }
});
