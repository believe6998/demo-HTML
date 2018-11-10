var btnSubmit = document.forms['register-form']['btn-submit'];
    btnSubmit.onclick = function () {
        var txtName = document.forms["register-form"]["name"];
        var msgError = txtName.nextElementSibling;
        if (txtName == null || txtName.value.length == 0) {
            msgError.innerHTML = "* Vui lòng nhập tên.";
            msgError.classList.remove("hidden-text");
        }
        else if (txtName.value.length > 50) {
            msgError.innerHTML = "* Tên bạn quá dài.";
            msgError.classList.remove("hidden-text");
        } else {
            msgError.innerHTML = "* Tên hợp lệ.";
            msgError.classList.remove("hidden-text");
            msgError.classList.remove("danger-text");
            msgError.classList.add("success-text");
        }
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
        var txtPhone = document.forms["register-form"]["phone"];
        var msgPhone = txtPhone.nextElementSibling;
        if (txtPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
            msgPhone.classList.remove("hidden-text");
        }
        else {
            msgPhone.innerHTML = "Số diện thoại hợp lệ.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.add("success-text");
        }
        var Gender = document.forms["register-form"]["gender"];
        var msgGender = Gender.nextElementSibling;
        if (Gender.checked = false) {
            msgGender.innerHTML = "* Vui lòng chọn giới tính.";
            msgGender.classList.remove("hidden-text");
        }
        else {
            msgGender.innerHTML = "Giói tính hợp lệ.";
            msgGender.classList.remove("hidden-text");
            msgGender.classList.remove("danger-text");
            msgGender.classList.add("success-text");
        }
    }
