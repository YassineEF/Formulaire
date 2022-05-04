const send = document.querySelector("#button");
const FirstName = document.getElementById("fName");
let FirstError = document.getElementById("FirstError")
const LastName = document.getElementById("lName");
let LastError = document.getElementById("LastError")
const Email = document.getElementById("email");
let EmailError = document.getElementById("EmailError")
const Message = document.getElementById("message");
let MessageError = document.getElementById("TextError")
let ResponseMessage = document.getElementById("Response")
//REGEX
let EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let NamePattern = /^[a-zA-Z0-9_-]{3,15}$/;

send.addEventListener("click", async function () {

    FirstError.innerHTML = "";
    LastError.innerHTML = "";
    EmailError.innerHTML = "";
    MessageError.innerHTML = "";
    let error = true;


    if(FirstName.value === ""){
        FirstError.innerHTML = "This field is required, please fill it"
        error = false
    }else if(!NamePattern.test(FirstName.value)){
        FirstError.innerHTML = "Do not use specials character or less than 3 characters";
        error = false;
    } 
    
    if(LastName.value === ""){
        LastError.innerHTML = "This field is required, please fill it"
        error = false
    }else  if(!NamePattern.test(LastName.value)){
        LastError.innerHTML = "Do not use specials character less than 3 characters";
        error = false;
    }
    
    if(Email.value === ""){
        EmailError.innerHTML="This field is required, please fill it"
        error = false
    }else if(!EmailPattern.test(Email.value)){
        EmailError.innerHTML = "Invalid Email Format";
        error = false
    }
    if(Message.value === ""){
        MessageError.innerHTML="This field is required, please fill it"
        error = false 
    }

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
        // console.log(xhttp.status);
    }
});
