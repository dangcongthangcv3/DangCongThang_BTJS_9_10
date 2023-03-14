   //Tài khoản tối đa 4 - 6 ký số
   //Kiểm tra độ dài
   

   var danhSachNhanVien = new DanhSachNhanVien()
   var validate = new Validation()
   
  document.getElementById('btnThemNV').onclick = function(){
    //Lấy dữ liệu từ người dùng
    var taiKhoan = document.querySelector('#tknv').value;
    var hoTen = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var matKhau = document.querySelector('#password').value;
    var ngayLam = document.querySelector('#datepicker').value;
    var luongCB = Number(document.querySelector('#luongCB').value);
    var chucVu = document.querySelector('#chucvu').value;
    var gioLamTrongThang = Number(document.querySelector('#gioLam').value);
    //Tính tổng lương
    var tongLuong = 0
    // if(nv.chucVu =='Sếp'){
    //     tongLuong = +nv.luongCB * 3
    // }
    // else if(nv.chucVu =='Trưởng phòng'){
    //     tongLuong = +nv.luongCB * 2
    // }
    // else if(nv.chucVu =='Nhân viên'){
    //     tongLuong = +nv.luongCB
    // }
    // nv.tongLuong = tongLuong
    
    var kiemTra = new Validation()
    debugger

    // Khởi tạo biến lổi của tài khoản
    var loiTK = 0
    var aa = ''
    //Nếu taiKhoan có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}
    else if(!kiemTra.kiemTraDoDai(taiKhoan, 'tbTKNV','Tài khoản', 4,6 )){loiTK++}
    else if(!kiemTra.kiemTraKhoangCach(taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiTK!=0){
      if(document.querySelector('#tbTKNV').className == 'sp-thongbao'){
        document.querySelector('#tbTKNV.sp-thongbao').className = 'sp-thongbao-hide'
        aa = (document.querySelector('#tbTKNV').className)
      }
    }
    else{
        document.querySelector('#tbTKNV.sp-thongbao-hide').className = 'sp-thongbao'
        aa = (document.querySelector('#tbTKNV').className)
    }

    // Khởi tạo biến lổi của tên nhân viên
    var loiHoTen = 0
    //Nếu taiKhoan có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}
    else if(!kiemTra.kiemTraKyTu(hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiHoTen!=0){
      if(document.querySelector('#tbTen').className == 'sp-thongbao'){
        document.querySelector('#tbTen.sp-thongbao').className = 'sp-thongbao-hide'
      }
    }
    else{
        document.querySelector('#tbTen.sp-thongbao-hide').className = 'sp-thongbao'
    }
    // mangNhanVien.push(nv)
    //Từ mảng tạo ra giao diện
    // Hiện ra bảng giao diện
    // renderTableNhanVien(mangNhanVien);
    // console.log(nv)
    
       
   }
   function renderTableNhanVien(arrNhanVien) { //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]
    var htmlString = '';
    
    
    for(var index = 0 ; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];

        htmlString += `
            <tr>
                    <td>${nv.taiKhoan}</td>
                    <td>${nv.tenNhanVien}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngayLam}</td>
                    <td>${nv.chucVu}</td>
                    <td>${nv.tongLuong}</td>
                    <td>${nv.xepLoai}</td>
                  </tr>
        `
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlString;
    return htmlString; ///'<tr>.....</tr>'
    
}