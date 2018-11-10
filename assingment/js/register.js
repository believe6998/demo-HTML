var REGISTER_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstname = document.forms['register-form']['firstname'];
        var msgFirstname = txtFirstname.nextElementSibling;
        if (txtFirstname == null || txtFirstname.value.length == 0) {
            msgFirstname.innerHTML = "* Vui lòng nhập họ của bạn.";
            msgFirstname.classList.remove("hidden-text");
        }else {
            msgFirstname.innerHTML = "* Họ hợp lệ.";
            msgFirstname.classList.remove("hidden-text");
            msgFirstname.classList.remove("danger-text");
            msgFirstname.classList.add("success-text");
        }
        var txtLastname = document.forms['register-form']['lastname'];
        var msgLastname = txtLastname.nextElementSibling;
        if (txtLastname == null || txtLastname.value.length == 0) {
            msgLastname.innerHTML = "* Vui lòng nhập tên của bạn.";
            msgLastname.classList.remove("hidden-text");
        }else {
            msgLastname.innerHTML = "* Tên hợp lệ.";
            msgLastname.classList.remove("hidden-text");
            msgLastname.classList.remove("danger-text");
            msgLastname.classList.add("success-text");
        }
        var txtPassword = document.forms['register-form']['password'];
        var msgPassword = txtPassword.nextElementSibling;
        if (txtPassword == null || txtPassword.value.length == 0) {
            msgPassword.innerHTML = "* Vui lòng nhập password.";
            msgPassword.classList.remove("hidden-text");
        }else {
            msgPassword.innerHTML = "* Password hợp lệ.";
            msgPassword.classList.remove("hidden-text");
            msgPassword.classList.remove("danger-text");
            msgPassword.classList.add("success-text");
        }
        var txtAddress = document.forms['register-form']['address'];
        var msgAddress = txtAddress.nextElementSibling;
        if (txtAddress == null || txtAddress.value.length == 0) {
            msgAddress.innerHTML = "* Vui lòng nhập địa chỉ.";
            msgAddress.classList.remove("hidden-text");
        }else {
            msgAddress.innerHTML = "* Địa chỉ hợp lệ.";
            msgAddress.classList.remove("hidden-text");
            msgAddress.classList.remove("danger-text");
            msgAddress.classList.add("success-text");
        }
        var txtPhone = document.forms['register-form']['phone'];
        var msgPhone = txtPhone.nextElementSibling;
        if (txtPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
            msgPhone.classList.remove("hidden-text");
        }else {
            msgPhone.innerHTML = "* Số điện thoại hợp lệ.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.add("success-text");
        }
        var txtAvatar = document.forms['register-form']['avatar'];
        var msgAvatar = txtAvatar.nextElementSibling;
        if (txtAvatar == null || txtAvatar.value.length == 0) {
            msgAvatar.innerHTML = "* Vui lòng nhập avatar.";
            msgAvatar.classList.remove("hidden-text");
        }else {
            msgAvatar.innerHTML = "* Avatar hợp lệ.";
            msgAvatar.classList.remove("hidden-text");
            msgAvatar.classList.remove("danger-text");
            msgAvatar.classList.add("success-text");
        }
        var selectgender = document.forms['register-form']['gender'];
        var txtemail = document.forms['register-form']['email'];
        var msgEmail = txtemail.nextElementSibling;
        var aCong=txtemail.value.indexOf("@");
        if (txtemail == null || txtemail.value.length == 0) {
            msgEmail.innerHTML = "* Vui lòng nhập email.";
            msgEmail.classList.remove("hidden-text");
        }
        else if (aCong<1) {
            msgEmail.innerHTML = "* Email phải có @.";
            msgEmail.classList.remove("hidden-text");
        }else {
            msgEmail.innerHTML = "* Email hợp lệ.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
        var dateBirthday = document.forms['register-form']['birthday'];
        var dd = new Date(dateBirthday.value);
        var myDate = dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-'
            + (dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate());
        if (txtFirstname != null && txtLastname != null) {
            var firstName = txtFirstname.value;
            var lastName = txtLastname.value;
            var password = txtPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectgender.value;
            var email = txtemail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert('Đăng ký thành công với email: ' + members.email );
        }
    }
    xmlhttp.open('POST', REGISTER_API, true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}