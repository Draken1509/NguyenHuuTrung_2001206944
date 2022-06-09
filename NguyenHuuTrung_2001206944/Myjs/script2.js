$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navar').addClass("sticky");
        }
        else{
            $('.navar').removeClass("sticky");
        }
    });

    // toggle menu
    $('.menu-btn').click(function(){
        $('.navar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }) ;

    // chữ chuyển đổi :v
    var typed = new Typed(".typing-2" , {
        strings: ["Nếu bạn không định đưa tiền vào bất động sản, thì chẳng có nơi nào khác để bạn đầu tư - Tamir Sapi"],
        typeSpeed: 35,
        backSpeed: 35,
        loop: true,
    });

});



