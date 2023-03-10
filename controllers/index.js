   //Tài khoản tối đa 4 - 6 ký số
   //Kiểm tra độ dài
   valid = kiemTra.kiemTraDoDai(nv.tkvn,'error-min-max-length-tKNV','Tài khoản', 4, 6) & kiemTra.kiemTraDoDai(nv.matKhau,'error-min-max-length-matKhau','Tài khoản', 6, 10)
   
   // Tên nhân viên phải là chữ
   valid = valid & kiemTra.kiemTraKyTu(nv.tenSinhVien, 'error-allLetter-tenNhanVien', 'Tên nhân viên')

   //không để trống
   //Tài khoản, tên nhân viên, email, mật khẩu
   valid = valid & kiemTra.kiemTraRong(nv.taiKhoan, 'error-required-taiKhoan','Tài khoản') & kiemTra.kiemTraRong(nv.tenNhanVien,'error-required-tenNhanVien','Tên nhân viên') & kiemTra.kiemTraRong(nv.email,'error-required-email','Email') & kiemTra.kiemTraRong(nv.matKhau,'error-required-matKhau','Mật khẩu')& kiemTra.kiemTraRong(nv.luongCanBan,'error-required-luongCanBan','Lương căn bản')& kiemTra.kiemTraRong(nv.soGioLam,'error-required-soGioLam','Số giờ làm')

   // Email phải đúng định dạng,
   valid = valid & kiemTra.kiemTraEmail(nv.email,'error-email','Email');

   //mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)
   valid = valid & kiemTra.kiemTraInHoa(nv.matKhau,'error-inHoa-matKhau','Mật khẩu') & kiemTra.kiemTraSo(nv.matKhau,'error-so-matKhau','Mật khẩu') & kiemTra.kiemTraDacBiet(nv.matKhau,'error-dacBiet-matKhau','Mật khẩu');

   // Ngày làm không để trống, định dạng mm/dd/yyyy
   
   //Lương cơ bản 1 000 000 - 20 000 000

       // Kiểm tra giá trị
       valid = valid & kiemTra.kiemTraGiaTri(nv.LuongCoBan,'error-min-max-value-luongCoBan','Lương Cơ Bản', 1000000, 20000000)
       if(!valid){
           return;
       }
   // Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
   // Số giờ làm trong tháng 80 - 200 giờ