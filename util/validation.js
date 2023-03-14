//Khai báo 1 prototype chứa các hàm kiểm tra nhập liệu
function Validation () {
    this.kiemTraRong = function (value,idError,name) {
        if(value.trim() === ''){
            document.getElementById(idError).innerHTML = `${name} không được bỏ trống !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;

    }
    this.kiemTraKyTu = function (value,idError,name) {
        var regexLetter = /^[A-Z a-z]+$/
        // Nếu chuỗi định dạng test thành công value là true
        if(regexLetter.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} tất cả phải có ký tự`;
        return false;
    }
    this.kiemTraEmail = function (value,idError,name) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // Nếu chuỗi định dạng test thành công value là true
        if(regexEmail.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} Không hợp lệ`;
        return false;
    }
    this.kiemTraSo = function (value,idError,name) {
        var regexNumber = /^[0-9]+$/;

        // Nếu chuỗi định dạng test thành công value là true
        if(regexNumber.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} Không hợp lệ`;
        return false;
    }
    this.kiemTraDoDai = function (value,idError,name,minLength,maxLength) {
        // tên đăng nhập 6-30 ký tự

        // Nếu chuỗi định dạng test thành công value là true
        if(value.length >maxLength || value.length <minLength){
            document.getElementById(idError).innerHTML =  `${name} từ ${minLength} đến ${maxLength}`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraGiaTri = function (value,idError,name,minValue,maxValue) {
        // tên đăng nhập 6-30 ký tự
        var regexNumber = /^[0-9.]+$/;

        // Kiểm tra giá trị
        if(regexNumber.test(value)){
            if(Number(value)<minValue || Number(value)> maxValue){
                document.getElementById(idError).innerHTML =  `${name} từ ${minValue} đến ${maxValue}`;
                return false;
            }
            document.getElementById(idError).innerHTML =''
            return true
        }
        document.getElementById(idError).innerHTML =  `${name} là số!`;
        return false;
    }
    this.kiemTraMatKhau = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        var regexMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{6,10}$/g;

        // Kiểm tra giá trị
        if(regexMatKhau.test(value)){
            document.getElementById(idError).innerHTML =''
            return true
        }
        document.getElementById(idError).innerHTML =  `${name} từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
        return false;
    }
    this.kiemTraKhoangCach = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        var regexSpace = /[ ]/g;

        // Kiểm tra giá trị
        if(regexSpace.test(value)){
            document.getElementById(idError).innerHTML =  `${name} không dùng khoảng cách!`;
            return false
        }
        document.getElementById(idError).innerHTML =  '';
        return true;
    }
    this.kiemTraNgayThangNam = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        var regexMDY = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/\d\d\d\d$/;
        //Ký tự đặc biệt "^.*[#?!@$%^&*-]+.*$"

        // Kiểm tra giá trị
        if(regexMDY.test(value)){
            return true
        }
        document.getElementById(idError).innerHTML =  `${name} giá trị không hợp lệ!`;
        return false;
    }
    this.kiemTraChucVu = function (value,idError,name) {
        regexChucVu = ''
        // Kiểm tra giá trị
        if(value==0){
            document.getElementById(idError).innerHTML =  `${name} không hợp lệ!`;
            return false
        }
        document.getElementById(idError).innerHTML =  '';
        return true;
    }
}