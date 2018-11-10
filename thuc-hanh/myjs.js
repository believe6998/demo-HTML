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
            msgError.innerHTML = "Ten hop le.";
            msgError.classList.remove("hidden-text");
            msgError.classList.remove("danger-text");
            msgError.classList.add("success-text");
        }
        var txtEmail = document.forms["register-form"]["email"];
        var msgEmail = txtEmail.nextElementSibling;
        var aCong = txtEmail.value.indexOf("@");
        if (txtEmail == null || txtEmail.value.length == 0) {
            msgEmail.innerHTML = "* Vui long nhap email.";
            msgEmail.classList.remove("hidden-text");
        }
        else if (aCong < 1) {
            msgEmail.innerHTML = "* Email phai co @.";
            msgEmail.classList.remove("hidden-text");
        }
        var txtPhone = document.forms["register-form"]["phone"];
        var msgPhone = txtPhone.nextElementSibling;
        if (txtPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
            msgPhone.classList.remove("hidden-text");
        }
        else {
            msgPhone.innerHTML = "Số diện thoại hop le.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.add("success-text");
        }
        var Gender = document.forms["register-form"]["gender"];
        var msgGender = Gender.nextElementSibling;
        if (Gender == null || Gender.value.length == 0) {
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
