   //Tài khoản tối đa 4 - 6 ký số
   //Kiểm tra độ dài
   
   
   var DSNV = []
  document.getElementById('btnThem').onclick = function(){
    document.getElementById('tknv').disabled = false
    document.getElementById('btnThemNV').disabled = false
    document.getElementById('btnCapNhat').disabled = true
  }
  document.getElementById('btnThemNV').onclick = function(){
    
    //input: nv: NhanVien
    var nv = new NhanVien();
    //Lấy dữ liệu từ người dùng\
   //Lấy dữ liệu từ người dùng\
   nv.taiKhoan = document.querySelector('#tknv').value;
   nv.hoTen = document.querySelector('#name').value;
   nv.email = document.querySelector('#email').value;
   nv.matKhau = document.querySelector('#password').value;
   nv.ngayLam = document.querySelector('#datepicker').value;
   nv.luongCB = Number(document.querySelector('#luongCB').value);
   nv.chucVu = document.querySelector('#chucvu').value;
   nv.gioLamTrongThang = Number(document.querySelector('#gioLam').value);
    //Tính tổng lương
    
    var tongLuong = 0
    
 
    if(nv.chucVu ==1){
        tongLuong = +nv.luongCB * 3
    }
    else if(nv.chucVu ==2){
        tongLuong = +nv.luongCB * 2
    }
    else if(nv.chucVu ==3){
        tongLuong = +nv.luongCB
    }
    else{
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
    else if(nv.gioLamTrongThang >=176 && nv.gioLamTrongThang <192){
      xepLoai = 'nhân viên giỏi'
    }
    else if(nv.gioLamTrongThang >=192 && nv.gioLamTrongThang<=200){
      xepLoai = 'nhân viên xuất sắc'
    }
    nv.xepLoai = xepLoai
    
    //Chưa láp Validation vào
    
      var kiemTra = new Validation()
        // Khởi tạo biến lổi của tài khoản
        var loiTK = 0
        debugger
        //Nếu taiKhoan có lổi thì lổi +1
      
        if(!kiemTra.kiemTraRong(nv.taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}
        else if(!kiemTra.kiemTraDoDai(nv.taiKhoan, 'tbTKNV','Tài khoản', 4,6 )){loiTK++}
        else if(!kiemTra.kiemTraKhoangCach(nv.taiKhoan, 'tbTKNV','Tài khoản')){loiTK++}
    
        // Nếu có lổi thì hiện class='sp-thongbao-hide'
        if(loiTK!=0){
          if(document.querySelector('#tbTKNV').className == 'sp-thongbao'){
            document.querySelector('#tbTKNV').className = 'sp-thongbao-hide'
            
          }
        }
        else{
            if(document.querySelector('#tbTKNV').className = 'sp-thongbao-hide'){
              document.querySelector('#tbTKNV').className = 'sp-thongbao'
            }
        }
        // Khởi tạo biến lổi của tên nhân viên
        var loiHoTen = 0
        //Nếu họ tên có lổi thì lổi +1
        if(!kiemTra.kiemTraRong(nv.hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}
        else if(!kiemTra.kiemTraKyTu(nv.hoTen, 'tbTen','Tên nhân viên')){loiHoTen++}
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
        if(!kiemTra.kiemTraRong(nv.email, 'tbEmail','Email')){loiEmail++}
        else if(!kiemTra.kiemTraEmail(nv.email, 'tbEmail','Email')){loiEmail++}
    
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
          if(!kiemTra.kiemTraMatKhau(nv.matKhau, 'tbMatKhau','Mật khẩu')){loiMatKhau++}
      
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
          if(!kiemTra.kiemTraNgayThangNam(nv.ngayLam, 'tbNgay','')){loiNgayLam++}
      
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
          if(!kiemTra.kiemTraGiaTri(nv.luongCB,'tbLuongCB','Lương cơ bản',1000000,20000000)){loiLuongCB++}
      
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
          
          if(!kiemTra.kiemTraChucVu(nv.chucVu,'tbChucVu','Chức vụ')){loiChucVu++}
      
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
        
          // Khởi tạo biến lổi của giờ làm
          var loiGioLam = 0
          //Nếu lương cơ bản có lổi thì lổi +1
          if(!kiemTra.kiemTraGiaTri(nv.gioLamTrongThang,'tbGiolam','Giờ làm',80,200)){loiGioLam++}
      
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
        
    if(loiTK!=0 || loiChucVu!=0 || loiEmail!=0 || loiGioLam!=0 || loiHoTen!=0 || loiLuongCB!=0 || loiMatKhau!=0 || loiNgayLam!=0){
      return
    }
    //Thêm nhân viên
    DSNV.push(nv)
    console.log(DSNV)
    //Từ mảng tạo ra giao diện
    // Hiện ra bảng giao diện
    renderTableNhanVien(DSNV);
    // console.log(nv)
    luuLocalStorage()
    reset()
   }
function reset(){
  document.querySelector('#tknv').value ='';
  document.querySelector('#name').value='';
  document.querySelector('#email').value='';
  document.querySelector('#password').value='';
  document.querySelector('#luongCB').value=0;
  document.querySelector('#chucvu').value=0;
  document.querySelector('#gioLam').value=0;
}




function renderTableNhanVien(arrNhanVien) {
  var htmlString = '';
  var chucaa
  for(var index = 0 ; index < arrNhanVien.length; index++) {
      var nv = arrNhanVien[index];
      if(nv.chucVu==1){
        chucaa='Sếp'
      }
      else if(nv.chucVu==2){
        chucaa ='Trưởng phòng'
      }
      else if(nv.chucVu==3){
        chucaa='Nhân viên'
      }
      htmlString += `
          <tr>
              <td>${nv.taiKhoan}</td>
              <td>${nv.hoTen}</td>
              <td>${nv.email}</td>
              <td>${nv.ngayLam}</td>
              <td>${chucaa}</td>
              <td>${nv.tongLuong}</td>
              <td>${nv.xepLoai}</td>
              <td>
                  <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
                  <button class="btn btn-danger mx-2" data-toggle="modal" data-target="#myModal" onclick="layThongTin('${nv.taiKhoan}')">Chỉnh sửa </button>
              </td>
          </tr>
      `
  }
  
  document.querySelector('tbody').innerHTML = htmlString;
  return htmlString; ///'<tr>.....</tr>'
  
}
//lấy item từ LS
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    let nhanVien = localStorage.getItem("DSNV");
    var listnew = JSON.parse(nhanVien);
    for (let i = 0; i < listnew.length; i++) {
      var nv = new Nhanvien();
      nv.user = listnew[i].user;
      nv.name = listnew[i].name;
      nv.email = listnew[i].email;
      nv.password = listnew[i].password;
      nv.date = listnew[i].date;
      nv.salary = listnew[i].salary;
      nv.position = listnew[i].position;
      nv.workTime = listnew[i].workTime;
      listNV.push(nv);
    }
    renderTable(listNV);
  }
}
getLS();
function xoaNhanVien(taiKhoan) {
  let maXoaNV = -1;
  for (var i = 0; i < DSNV.length; i++) {
    if (DSNV[i].taiKhoan === taiKhoan) {
      maXoaNV = i;
      break;
    }
  }
  DSNV.splice(maXoaNV, 1);
  renderTable(listNV);
  luuLocalStorage();
}

function layThongTin(maNhanVienClick){
  
  document.getElementById('btnCapNhat').disabled = false
  document.getElementById('tknv').disabled = true
  document.getElementById('btnThemNV').disabled = true
  for(var index = 0; index<=DSNV.length; index++){
      // in thông tin sinh viên tìm thấy lên giao diện
      if(DSNV[index].taiKhoan === maNhanVienClick){
        document.querySelector('#tknv').value = DSNV[index].taiKhoan
        document.querySelector('#name').value = DSNV[index].hoTen
        document.querySelector('#email').value = DSNV[index].email
        document.querySelector('#password').value = DSNV[index].matKhau
        document.querySelector('#datepicker').value = DSNV[index].ngayLam
        document.querySelector('#luongCB').value = DSNV[index].luongCB
        document.querySelector('#chucvu').value = DSNV[index].chucVu
        document.querySelector('#gioLam').value = DSNV[index].gioLamTrongThang
          break
      }
  }

}

document.getElementById('btnCapNhat').onclick = function(){
  // Input: Lấy thông tin người dùng từ giao diện đã thay đổi vào object
  var nhanVienEdit = new NhanVien()
  
  nhanVienEdit.taiKhoan = document.querySelector('#tknv').value
  nhanVienEdit.hoTen = document.querySelector('#name').value
  nhanVienEdit.email = document.querySelector('#email').value
  nhanVienEdit.matKhau = document.querySelector('#password').value
  nhanVienEdit.ngayLam = document.querySelector('#datepicker').value
  nhanVienEdit.luongCB = document.querySelector('#luongCB').value
  nhanVienEdit.chucVu = document.querySelector('#chucvu').value
  nhanVienEdit.gioLamTrongThang = document.querySelector('#gioLam').value
  


  for(var index = 0; index < DSNV.length; index++){
      if(DSNV[index].taiKhoan === nhanVienEdit.taiKhoan){
          DSNV[index].hoTen = nhanVienEdit.hoTen
          DSNV[index].email = nhanVienEdit.email
          DSNV[index].matKhau = nhanVienEdit.matKhau
          DSNV[index].ngayLam = nhanVienEdit.ngayLam
          DSNV[index].luongCB = nhanVienEdit.luongCB
          DSNV[index].chucVu = nhanVienEdit.chucVu
          DSNV[index].gioLamTrongThang = nhanVienEdit.gioLamTrongThang
          break
      }
  }
    // Gọi hàm render sinh viên dựa trên mảng có phần tử đã thay đổi
    renderTableNhanVien(DSNV)
    // Lưu store sau khi thay đổi
    // Lưu xong mới bật 2 nút button#btnThemSinhVien và input#maSinhVien
    
}


//Viết hàm để lưu trử vào localStorage
function luuLocalStorage(){
  // Lưu mangSinhVien Vào localstorage
  //B1: Biến đổi mangSinhVien Thành string 
  var stringMangNhanVien = JSON.stringify(DSNV)
  // B2 lưu vào localStorage
  localStorage.setItem('DSNV', stringMangNhanVien)
}

function layStore(){
  //Truethy: trong if(value), value là true, ([]),if (42), if ("0"), if ("false"), if (new Date()), if (-42), if (12n), if (3.14), if (-3.14), if (Infinity), if (-Infinity)
  // falsthy: trong if(value),value là false, -0, 0n,"", '', ``, null, undefined, NaN, document.all
  if(localStorage.getItem('DSNV'))
  var stringMangNhanVien = localStorage.getItem('DSNV')
  DSNV = JSON.parse(stringMangNhanVien)
  console.log(DSNV)

  renderTableNhanVien(DSNV)
  
}

document.getElementById('searchName').oninput = function(){
  var mangNhanVienTimKiem = []
  var tuKhoa = document.getElementById('searchName').value
  //toLowerCase: Biến đổi tất cả chữ HOA thành chữ thường
  // Trim(): Hàm xóa khoảng trắng trong text

  //ToLowerCase()
  tuKhoa = stringToSlug(tuKhoa)
  for(var i = 0; i <DSNV.length;i++){
      var nv = DSNV[i]
      var loaiNV = stringToSlug(nv.xepLoai)
      if(loaiNV.search(tuKhoa) !== -1){
          //tìm thấy
          mangNhanVienTimKiem.push(nv)
      }
  }
  renderTableNhanVien(mangNhanVienTimKiem)
}

function stringToSlug(title) { 
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  //Xóa các ký tự đặt biệt
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
}

