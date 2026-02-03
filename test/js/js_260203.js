
$(document).ready(function(){
    console.log('준비')
    /*
        li가 4개..
        오버한 li 한개에만 active  클래스를 주야함..$(thix)
        이전에 active가 잇었던 li의 active클래스를 삭제...?
        ---->모든 li의 active를 삭제함...단순하고 명료
        ---->원래 active 클래스 없는 li는 반응 업슴
        ---->그리고  나서 오버한 li만 active 클래스를 줌
    */ 
    $('.tour .list ul li').on('mouseenter', function(){
    console.log('오버했어요!!!')
    //모든 li의 active 클래스 삭제
     $('.tour .list ul li').removeClass('active')
    //오버한 li에만 active 클래스 추가
    $(this).addClass('active')
        })
    
    $('.culture .list ul li').on('mouseenter', function(){
    $('.culture .list ul li').removeClass('active')
    $(this).addClass('active')
})

/*
    브라우저가 스크롤 되는 걸 체크해야 함
*/
var abc = '123'
var bcd = 56
var bcd = 11
var sum = abc + bcd
//console.log('sum')
//console.log(sum)

let aaa = 11
// let aaa = 22 에러, 같은 값 두번 사용
//aaa = 22
//console.log(aaa)/* 예전 값 상관 없이 현재값 넣음, 그래서 '대입연산자라'함 */
/*
 브라우저가 스크롤 되는 걸 체크해야함
 만약에 스크롤 값이 0보다 크다면 header에 fixed 클래스를 주고
 스크롤 값이 0이거나 0보다 작으면 
*/ 



//맨 처음 html이 로딩된 후 단 1번 실행
let scrolling 
header_fixed()//함수를 실행

function header_fixed(){
    scrolling = $(window).scrollTop()//스크롤 할 때 마다 스크롤 값을 다시 물음
    console.log(scrolling)

    if(scrolling > 0){//만약에 스크롤값이 0보다 크다면, 1 이상
        $('.header').addClass('fixed')
    }else{//0이거나 0보다 작거나
        $('.header').removeClass('fixed')
    }
}

$(window).scroll(function(){
   // console.log('스크롤 됨!!')
    header_fixed()//함수를 실행

    
})

})//$(document).read
//console.log('완료')


