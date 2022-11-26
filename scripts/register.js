//create constructer
function User(fname,lname,age,gender,phone,payment,color){
    //list of attributes
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

function register(){
    let inputfirstName = $("#txtFirstName").val();
    let inputlastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    //validation. if the form is not filled out, exit register. So not to store blank values
    if(!inputFirstName || !inputLastName){
        console.error("Invalid data");
        return;
    }

    let newUser = new User(inputfirstName, inputlastName, inputAge, inputGender, inputPhone, inputPayment, inputColor);

    console.log(newUser);
    saveUser(newUser);
    console.log("User Saved");
    clearForm();
}

function init(){
//html is ready
    

//load data

//assigns events
$("#btnSave").click(register);
//wait for html to be rendered before executing click event on button
}

function clearForm(){
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#txtAge").val("");
    $("#txtGender").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#selColor").val("#000000");
}



window.onload = init;

//javascript
//document.getElementById("txtAge").style.display="none";//hides the element
//jquery
//$("#txtAge").hide();//hides the element
//$("#txtAge").val();  //document.getElementById("txtAge").value;