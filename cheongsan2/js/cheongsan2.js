$(document).ready(function(){
/***************************** 
헤더에 
아래로 스크롤 중이면 헤더에 하이드가 클래그가 추가됨
 위로 스코롤 되면 하이드 클레스가 삭제
 이전 스크롤 값에서 현재의 스크롤 차이
 0보다 크면 아래로 내려가는 중이고 0보다 작으면 위로 올라가는 중

*/
let scrolling //현재 스크롤 된 값
let prev_scroll = 0 // 이전에 스크롤 한 값
let move_scroll //얼마나 스크롤 되엇는지 변화값
function header_fixed(){
    scrolling = $(window).scrollTop()
    console.log(scrolling, prev_scroll, prev_scroll-scrolling)
    if(scrolling > 0){
        $('.header').addClass('fixed')
        move_scroll = prev_scroll-scrolling
        if(move_scroll > 0){
            $('.header').removeClass('hide')
        }else{
            $('.header').addClass('hide')
        }
    }else{
        $('.header').removeClass('fixed')
    }
    prev_scroll = scrolling//이전 스크롤 값에 현재 스크롤 값을 계산
}
header_fixed()
$(window).scroll(function(){
    header_fixed()
})


/***********************************************************************************
 * tour에 li에 마우스를 올리면 마우스를 올린 li에만 active 클래스 추가
 * 1. 무조건 하나의 li dpsms active가 잇는 상태(맨 청음에는html에 active가 써 있음)
 * 2. 이전에 오버햇던 li의 
 */
    
$('.tour .list ul li').on('mouseenter',function(){
    //console.log('오버했니??')
    $('.tour .list ul li').removeClass('')
    $(this).addClass('active')
})
})