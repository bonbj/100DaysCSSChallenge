let isCardleft = false;


$('.board-header-btn-search').click(() => {
    if(!isCardleft) {
        $('.board-header-search').toggleClass('board-header-search-active');
    }
});


$('.board-header-btn-menu').click(() => {
    if(!isCardleft) {
        $(".index1").animate({left: '190px'});
        isCardleft = true;
    } else {
        $(".index1").animate({left: '50px'});
        isCardleft = false;
    }
})