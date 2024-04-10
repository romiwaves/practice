//let으로도 변수 설정 가능
// const 변수 = nn 변수 설정, 띄어쓰기 자리에 대문자로 쓰는것이 관례
/*let -> 새로운 것을 생성하기 위해 적음. 추후 변경을 위해서는 let을 적지 않아도 됨
const는 바뀔 수 없음: 바꾸고 싶지 않은 몇몇 변수들에 대해 적용
즉 const -> never ever change
let -> changable
대부분의 경우 const를 사용하고, 때에 따라 let을 이용
개발자의 의도를 담을 수 있는 부분
var을 사용한다면? 사용할 수 있지만 update에 대한 보고를 해주지 않음
always const, sometimes let, never var*/
/* null means nothingness. literally. 
undefined: 값을 주고 있지 않음. 존재하지만 정의되지 않는 것. null과는 다름
null은 자연적으로 발생하지 않음.
type의 종류: true, false, null, undefined*/
// const nn = []로 array 형성

/* 특정 순서의 데이터를 불러오고 싶다면 variable 뒤에 대괄호를 넣어서 순서(0부터 시작) 적기
투두리스트를 작성할 때 array안에 작성
array안에 하나 더 추가하는 것도 가능=push */
//objects
// object 안에서는 =을 쓰지 않음
//같은 결과를 가짐. 업데이트도 가능!
/*const를 수정할 수 없다고 하지 않았나?
object가 const이기 때문에 const 안의 무언가를 업데이트하는 것은 에러가 아님
아래처럼 추가할 수도 있음*/

//Functions part one + two
//어떤 이름에도 hello라고 해주는 함수 만들기
/*데이터를 함수 안에서 받아 출력하려면?
함수 정의 괄호 안에 데이터 variable명을 넣어주기
argument는 여러 개가 될 수 있음 ex. nameOfPerson, age
nameOfPerson과 age는 함수 body block 안에서만 존재*/

//함수를 실행하는 방법 = 괄호 넣기, 괄호 안에는 보내줄 데이터 적기

//argument는 순서를 따름. 아래에선 a=8, b=60. argument로 무슨 문자를 써도 상관 x
//아래는 function이 objects안에 있을때만 가능
//Recap
/* if you want to update variable, use let
always use const, sometimes use let, never use var
boolean -> only two options: true and false
undefined: exists but any value
null
[] 안에 list, array 만들기
toBuy[2]로 데이터 받을 수 있음(3번째 데이터)
push를 통해 데이터 추가 가능 */
//Returns
//그냥 console log 할때와는 다름, return하는 순간 함수는 종료

//conditional
//very nice age calculator
//parseint = 숫자로 데이터 타입을 바꿔줌


//HTML in Js
//addEventListner를 통해 이벤트 들어라! 할 수 있음.
const h1 = document.querySelector(".hello h1");
/*
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

function handleTitleClick() {
    h1.classList.toggle("clicked");
    /*toggle -> classlist에 clicked가 있는지 체크. 있으면 remove, 없으면 add해줌 */
}

h1.addEventListener("click", handleTitleClick);