$(document).ready(function(){
   const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 1000,
        //     disableOnInteraction: true,
        // }, 선택 다음 컨트롤 물음표 누르면 동시에 주석 처리됨
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
    });//visual_swiper
    /***************************************************************************
     * header에 마우스를 올리면 (오버하면) over 클래스를 추가
     *          마우스를 내리면(아웃하면) over클래스 삭제
     * 브라우저의 스크롤을 내리면
    *****************************************************************************/
   $('.header').on('mouseenter', function(){
        //console.log('마우스 올렸다!!!!')
        $(this).addClass('over')
   })
   $('.header').on('mouseleave', function(){
        //console.log('마우스를 올렸다 내렸다!!!!')
        $(this).removeClass('over')
   })

   let scrolling //브라우저가 스크롤 된 값
   function header_fixed(){
        scrolling = $(window).scrollTop()
        console.log(scorlling)
        if(scrolling > 0){
            console.log('0보다 크다')
            $('.header').addClass('fixed')
        }else{
               // console.log('0이거나 0보다 작다.')
               $('.header').removeClass('fixed')
            }
        }
   //맨 처음 html이 로딩된 이후 단 한번 실행
   header_fixed() 
   $(window).scroll(function(){//브라우저가 실행될 때 마다 실행
        header_fixed() 
   })
})//$(document).ready 