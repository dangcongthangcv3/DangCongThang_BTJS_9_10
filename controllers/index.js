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
    

    // Khởi tạo biến lổi của tài khoản
    var loiTK = 0
    //Nếu taiKhoan có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}
    else if(!kiemTra.kiemTraDoDai(taiKhoan, 'tbTKNV','Tài khoản', 4,6 )){loiTK++}
    else if(!kiemTra.kiemTraKhoangCach(taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiTK!=0){
      if(document.querySelector('#tbTKNV').className == 'sp-thongbao'){
        document.querySelector('#tbTKNV').className = 'sp-thongbao-hide'
        aa = (document.querySelector('#tbTKNV').className)
      }
    }
    else{
        if(document.querySelector('#tbTKNV').className = 'sp-thongbao-hide'){
          document.querySelector('#tbTKNV').className = 'sp-thongbao'

          aa = (document.querySelector('#tbTKNV').className)
        }
    }
    // Khởi tạo biến lổi của tên nhân viên
    var loiHoTen = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}
    else if(!kiemTra.kiemTraKyTu(hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}
    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiHoTen!=0){
      if(document.querySelector('#tbTen').className == 'sp-thongbao'){
        document.querySelector('#tbTen').className = 'sp-thongbao-hide'
      }
    }
    else{
      if(document.querySelector('#tbTen').className = 'sp-thongbao-hide'){
        document.querySelector('#tbTen').className = 'sp-thongbao'
    }
  }

    // Khởi tạo biến lổi của Email
    var loiEmail = 0
    //Nếu email có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(email, 'tbEmail','Email')){loiEmail++}
    else if(!kiemTra.kiemTraEmail(email, 'tbEmail','Email')){loiEmail++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiEmail!=0){
      if(document.querySelector('#tbEmail').className == 'sp-thongbao'){
        document.querySelector('#tbEmail').className = 'sp-thongbao-hide'
      }
    }
    else{
      if(document.querySelector('#tbEmail').className = 'sp-thongbao-hide'){
        document.querySelector('#tbEmail').className = 'sp-thongbao'
    }
  }

      // Khởi tạo biến lổi của mật khẩu
      var loiMatKhau = 0
      //Nếu mật khẩu có lổi thì lổi +1
      if(!kiemTra.kiemTraMatKhau(matKhau, 'tbMatKhau','Mật khẩu')){loiMatKhau++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiMatKhau!=0){
        if(document.querySelector('#tbMatKhau').className == 'sp-thongbao'){
          document.querySelector('#tbMatKhau').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbMatKhau').className = 'sp-thongbao-hide'){
          document.querySelector('#tbMatKhau').className = 'sp-thongbao'
      }
    }
      // Khởi tạo biến lổi của ngày vào lám
      var loiNgayLam = 0
      //Nếu ngày vào làm có lổi thì lổi +1
      if(!kiemTra.kiemTraNgayThangNam(ngayLam, 'tbNgay','')){loiNgayLam++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiNgayLam!=0){
        if(document.querySelector('#tbNgay').className == 'sp-thongbao'){
          document.querySelector('#tbNgay').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbNgay').className = 'sp-thongbao-hide'){
          document.querySelector('#tbNgay').className = 'sp-thongbao'
      }
    }
      // Khởi tạo biến lổi của lương cơ bản
      var loiLuongCB = 0
      //Nếu lương cơ bản có lổi thì lổi +1
      if(!kiemTra.kiemTraGiaTri(luongCB,'tbLuongCB','Lương cơ bản',1000000,20000000)){loiLuongCB++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiLuongCB!=0){
        if(document.querySelector('#tbLuongCB').className == 'sp-thongbao'){
          document.querySelector('#tbLuongCB').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbLuongCB').className = 'sp-thongbao-hide'){
          document.querySelector('#tbLuongCB').className = 'sp-thongbao'
      }
    }
      // Khởi tạo biến lổi của Chức vụ
      var loiChucVu = 0
      //Nếu lương cơ bản có lổi thì lổi +1
      if(!kiemTra.kiemTraChucVu(chucVu,'tbChucVu','Chức vụ')){loiChucVu++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiChucVu!=0){
        if(document.querySelector('#tbChucVu').className == 'sp-thongbao'){
          document.querySelector('#tbChucVu').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbChucVu').className = 'sp-thongbao-hide'){
          document.querySelector('#tbChucVu').className = 'sp-thongbao'
      }
    }
    debugger
      // Khởi tạo biến lổi của giờ làm
      var loiGioLam = 0
      //Nếu lương cơ bản có lổi thì lổi +1
      if(!kiemTra.kiemTraGiaTri(gioLamTrongThang,'tbGiolam','Giờ làm',80,200)){loiGioLam++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiGioLam!=0){
        if(document.querySelector('#tbGiolam').className == 'sp-thongbao'){
          document.querySelector('#tbGiolam').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbGiolam').className = 'sp-thongbao-hide'){
          document.querySelector('#tbGiolam').className = 'sp-thongbao'
      }
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