$(document).ready(function () {
    $('#showRegisterForm').on('click', function (e) {
        e.preventDefault();
        $('#loginForm').addClass('d-none');
        $('#registerForm').removeClass('d-none');
    });

    // Hiển thị form đăng nhập
    $('#showLoginForm').on('click', function (e) {
        e.preventDefault();
        $('#registerForm').addClass('d-none');
        $('#loginForm').removeClass('d-none');
    });
    
});