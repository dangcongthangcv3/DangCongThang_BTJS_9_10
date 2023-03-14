   //Tài khoản tối đa 4 - 6 ký số
   //Kiểm tra độ dài
   
   var validate = new Validation()
   var DSNV = []
   
  document.getElementById('btnThemNV').onclick = function(){
    //input: nv: NhanVien
    var nv = new NhanVien();
    //Lấy dữ liệu từ người dùng\
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCB = Number(document.querySelector('#luongCB').value);
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLamTrongThang = Number(document.querySelector('#gioLam').value);
    debugger
    //Tính tổng lương
    var tongLuong = 0
    if(nv.chucVu =='Sếp'){
        tongLuong = +nv.luongCB * 3
    }
    else if(nv.chucVu =='Trưởng phòng'){
        tongLuong = +nv.luongCB * 2
    }
    else if(nv.chucVu =='Nhân viên'){
        tongLuong = +nv.luongCB
    }
    nv.tongLuong = tongLuong
    
    var xepLoai = ''
    if(nv.gioLamTrongThang >=80 && nv.gioLamTrongThang <160){
      xepLoai = 'nhân viên trung bình'
    }
    else if(nv.gioLamTrongThang >=160 && nv.gioLamTrongThang <176){
      xepLoai = 'nhân viên khá'
    }
    else if(nv.gioLamTrongThang >=176 && nv.gioLamTrongThang >=192){
      xepLoai = 'nhân viên giỏi'
    }
    else if(nv.gioLamTrongThang >=192 && nv.gioLamTrongThang<=200){
      xepLoai = 'nhân viên xuất sắc'
    }
    nv.xepLoai = xepLoai

    var kiemTra = new Validation()
    //Chưa láp Validation vào
    //Đợi Them vào mảng oke đã





    //Thêm nhân viên
    DSNV.push(nv)
    console.log(DSNV)
    //Từ mảng tạo ra giao diện
    // Hiện ra bảng giao diện
    renderTableNhanVien(DSNV);
    // console.log(nv)
    
       
   }

   
function renderTableNhanVien(arrNhanVien) {
  var htmlString = '';
  for(var index = 0 ; index < arrNhanVien.length; index++) {
      var nv = arrNhanVien[index];
      htmlString += `
          <tr>
              <td>${nv.taiKhoan}</td>
              <td>${nv.hoTen}</td>
              <td>${nv.email}</td>
              <td>${nv.ngayLam}</td>
              <td>${nv.chucVu}</td>
              <td>${nv.tongLuong}</td>
              <td>${nv.xepLoai}</td>
              <td>
                  <button class="btn btn-danger" onclick="xoaSinhVienTheoMa('${nv.taiKhoan}')">Xoá Mã</button>
              </td>
          </tr>
      `
  }
  
  document.querySelector('tbody').innerHTML = htmlString;
  return htmlString; ///'<tr>.....</tr>'
  
}
function layThongTin(maNhanVienClick){
  for(var index = 0; index<=DSNV.length; index++){
      // in thông tin sinh viên tìm thấy lên giao diện
      if(DSNV[index].maSinhVien === maNhanVienClick){
        // ,,,,,,,gioLamTrongThang
          document.getElementById('taiKhoan').value = DSNV[index].taiKhoan
          document.getElementById('hoTen').value = DSNV[index].hoTen
          document.getElementById('email').value = DSNV[index].email
          document.getElementById('matKhau').value = DSNV[index].matKhau
          document.getElementById('ngayLam').value = DSNV[index].ngayLam
          document.getElementById('luongCB').value = DSNV[index].luongCB
          document.getElementById('chucVu').value = DSNV[index].chucVu
          document.getElementById('gioLamTrongThang').value = DSNV[index].gioLamTrongThang
          break
      }
  }
}

document.getElementById('btnLuuThongTin').onclick = function(){
  // Input: Lấy thông tin người dùng từ giao diện đã thay đổi vào object

  var nhanVienEdit = new NhanVien()
  sinhVienEdit.maSinhVien = document.getElementById('maSinhVien').value
  sinhVienEdit.tenSinhVien = document.getElementById('tenSinhVien').value
  sinhVienEdit.email = document.getElementById('email').value
  sinhVienEdit.soDienThoai = document.getElementById('soDienThoai').value
  sinhVienEdit.loaiSinhVien = document.getElementById('loaiSinhVien').value
  sinhVienEdit.diemRenLuyen = document.getElementById('diemRenLuyen').value
  sinhVienEdit.diemToan = document.getElementById('diemToan').value
  sinhVienEdit.diemLy = document.getElementById('diemLy').value
  sinhVienEdit.diemHoa = document.getElementById('diemHoa').value

  for(var index = 0; index < mangSinhVien.length; index++){
      if(mangSinhVien[index].maSinhVien === sinhVienEdit.maSinhVien){
          mangSinhVien[index].tenSinhVien = sinhVienEdit.tenSinhVien
          mangSinhVien[index].email = sinhVienEdit.email
          mangSinhVien[index].soDienThoai = sinhVienEdit.soDienThoai
          mangSinhVien[index].loaiSinhVien = sinhVienEdit.loaiSinhVien
          mangSinhVien[index].diemRenLuyen = sinhVienEdit.diemRenLuyen
          mangSinhVien[index].diemToan = sinhVienEdit.diemToan
          mangSinhVien[index].diemLy = sinhVienEdit.diemLy
          mangSinhVien[index].diemHoa = sinhVienEdit.diemHoa
          break
      }
  }
}