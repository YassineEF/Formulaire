//Form Fields
const send = document.querySelector("#button");
const FirstName = document.getElementById("fName");
const LastName = document.getElementById("lName");
const Email = document.getElementById("email");
const Message = document.getElementById("message");
//Error & Message Fields
let FirstError = document.getElementById("FirstError")
let LastError = document.getElementById("LastError")
let EmailError = document.getElementById("EmailError")
let MessageError = document.getElementById("TextError")
let ResponseMessage = document.getElementById("Response")
//REGEX
let EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let NamePattern = /^[a-zA-Z0-9 _-]{3,15}$/;
let TextPattern = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

send.addEventListener("click", async function () {

    FirstError.innerHTML = "";
    LastError.innerHTML = "";
    EmailError.innerHTML = "";
    MessageError.innerHTML = "";
    let error = true;

    //Check the FirstName field
    if(FirstName.value === ""){
        FirstError.innerHTML = "This field is required, please fill it"
        error = false
    }else if(!NamePattern.test(FirstName.value)){
        FirstError.innerHTML = "Do not use specials character or less than 3 characters";
        error = false;
    }
    
    //Check the LastName field
    if(LastName.value === ""){
        LastError.innerHTML = "This field is required, please fill it"
        error = false
    }else  if(!NamePattern.test(LastName.value)){
        LastError.innerHTML = "Do not use specials character or less than 3 characters";
        error = false;
    }
    
    //Check the Email field
    if(Email.value === ""){
        EmailError.innerHTML="This field is required, please fill it"
        error = false
    }else if(!EmailPattern.test(Email.value)){
        EmailError.innerHTML = "Invalid Email Format";
        error = false
    }
    //Check the Message field
    if(Message.value === ""){
        MessageError.innerHTML="This field is required, please fill it"
        error = false 
    }else if(!TextPattern.test(Message.value)){
        MessageError.innerHTML="Please do not use special charcter"
        error = false 
    }
    //send Data AJAX
    if(error){

        let xhttp = new XMLHttpRequest();
        let data = `firstName=${FirstName.value}&lastName=${LastName.value}&email=${Email.value}&messageText=${Message.value}`;
        xhttp.onload = function () {
          const serverResponse = this.responseText;
        };
        xhttp.open("POST", "./php/email.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp.send(data);
        xhttp.onreadystatechange = function () {
            if(xhttp.readyState === 4 && xhttp.status === 200) {
              ResponseMessage.innerHTML = xhttp.responseText;
              FirstName.value= "";
              LastName.value="";
              Email.value="";
              Message.value="";
            }
          };
    }
});
