//Lấy url => kiểm tra xem đang ở trang nào
const pathname = location.pathname;

//[HOME]----------------------------------------------------------
if (
  pathname.includes("index.html") ||
  pathname.charAt(pathname.length - 1) == "/"
) {
    // Kiểm tra nếu chưa login => chuyển sang trang login
  if (
    !localStorage.getItem("currentUser") //Ko phải user được lưu trong localStorage thì sang trang login
  ) {
    
    location.href = "./html/login.html";
  }
}

//Kiểm tra thông tin đăng nhập

// Kiểm tra thông tin đăng ký

//Lưu dữ liệu cho đăng ký

//Bắt sự kiện cho button đăng nhập

//Bắt sự kiện cho button đăng ký
