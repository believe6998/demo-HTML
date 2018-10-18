// var btn = document.getElementById("btnSubmit");
// btn.onclick = function () {
//     var txtUserName=document.getElementById("txtUsername");
//     var msgError =document.getElementById("msg-error");
//     if(txtUserName.value.length < 5){
//         msgError.innerHTML ="* Ten cua ban qua ngan.";
//         msgError.classList.remove("hidden-text");
//     }
//     else if(txtUserName.value.length > 20){
//         msgError.innerHTML ="* Ten cua ban qua ngan.";
//         msgError.classList.remove("hidden-text");
//     }else {
//         msgError.innerHTML= "Ten hop le.";
//         msgError.classList.remove("hidden-text");
//         msgError.classList.remove("danger-text");
//         msgError.classList.add("success-text");
//     }
// }


var btn = document.forms["register-form"]["btn-submit"];
btn.onclick = function () {
    var txtUserName = document.forms["register-form"]["username"];
    var msgError = txtUserName.nextElementSibling;
    if (txtUserName == null || txtUserName.value.length == 0) {
        msgError.innerHTML = "* Vui long nhap ten.";
        msgError.classList.remove("hidden-text");
    }
    else if (txtUserName.value.length < 5) {
        msgError.innerHTML = "* Ten cua ban qua ngan.";
        msgError.classList.remove("hidden-text");
    }
    else if (txtUserName.value.length > 20) {
        msgError.innerHTML = "* Ten cua ban qua ngan.";
        msgError.classList.remove("hidden-text");
    } else {
        msgError.innerHTML = "Ten hop le.";
        msgError.classList.remove("hidden-text");
        msgError.classList.remove("danger-text");
        msgError.classList.add("success-text");
    }
    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui long nhap password.";
        msgPassword.classList.remove("hidden-text");
    }
    var txtFullname = document.forms["register-form"]["fullName"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname == null || txtFullname.value.length == 0) {
        msgFullname.innerHTML = "* Vui long nhap ten day du.";
        msgFullname.classList.remove("hidden-text");
    }
    else if (txtFullname.value.length < 5) {
        msgFullname.innerHTML = "* Ten cua ban qua ngan.";
        msgFullname.classList.remove("hidden-text");
    }
    else if (txtUserName.value.length > 30) {
        msgError.innerHTML = "* Ten cua ban qua ngan.";
        msgError.classList.remove("hidden-text");
    } else {
        msgFullname.innerHTML = "Ten hop le.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var aCong=txtEmail.value.indexOf("@");
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui long nhap email.";
        msgEmail.classList.remove("hidden-text");
    }
    else if (aCong<1) {
        msgEmail.innerHTML = "* Email phai co @.";
        msgEmail.classList.remove("hidden-text");
    }


}
