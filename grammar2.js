//2.4 조건문

/*
조건문: 주어진 조건에 따라 코드를 실행하거나 실행하지 않는 문

    if (조건식) 
        실행문;

    if (조건식) {
        실행문1;
        실행문2;
        실행문3;
    }

    if(조건식) { //조건식이 참인 값일 때 실행
        실행문;
    } else { //조건식이 거짓인 값일 때 실행
        실행문;
    }

    
    if(조건식) {
        실행문;
    } else if(조건식) {
        실행문;
    } else {
        실행문;
    }


    if(조건식) {
        실행문;
    } else if (조건식) {
        실행문;
    } else if (조건식) {
        실행문;
    }
----------------------------------
switch문
switch 옆 소괄호 조건식의 값이 case의 비교조건식 값과 일치(===)하면 해당 실행문 실행
보통 조건식에 변수를 넣고, 비교 조건식에는 변수와 비교할 값을 넣음

    switch(조건식) {
        case 비교 조건식:
            실행문;
    }


switch문은 일치하는 case를 발견하면 일치 여부와 상관없이 그 아래 case들의 실행문을 모두 실행함
-> 원하는 결과만 얻으려면 수동으로 case를 빠져나와야 함: break문 사용

    switch(조건식) {
        case 비교 조건식:
            실행문;
            break;
         
        case 비교 조건식:
            실행문;
            break;

        case 비교 조건식:
            실행문;
            break;
    }


어떠한 case도 일치하지 않을 때 실행하는 case: default
default는 어디에나 위치 가능

    switch(조건식) {
        case 비교 조건식:
            실행문;
            break;
         
        case 비교 조건식:
            실행문;
            break;

        case 비교 조건식:
            실행문;
            break;

        default:
            실행문;   
    }


----------------------------------
조건부 연산자

    조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식


-조건에 따라 달라지는 값을 변수에 대입할 때 사용함
-조건문에서 대입하는 부분을 짧게 줄이기 위해 사용
-중첩해서 사용 가능

*/

if(true) {
    console.log('Hello if!');
} //Hello, if!

if(false) {
    console.log('Hello if!');
} //표시되지 않음

let condition = true;
if(condition) {
    console.log('Hello, if!');
} //Hello, if!

if(0) {
    console.log('Hello if!');
} //표시되지 않음

if(true) {
    console.log('Hello, if!');
    console.log('Hello, again!');
} //Hello if! Hello again!

if(false) {
    console.log('Hello, if!');
}
console.log('Bye, if'); //Bye, if

//조건문으로 변수의 값을 바꿀 수도 있음
let value = '사과';
let condition = true;
if(condition) {
    value = '바나나';
}
console.log(value); //바나나


//2.4.1 else를 사용해 두 방향으로 분기하기
if(false) {
    console.log('Hello, if!');
}else {
    console.log('Hello, else!');
} //Hello, else!

//조건식이 거짓일 때 value = 포도
let value = '사과';
let condition = false; //else문이 실행됨
if(condition) {
    value = '바나나';
} else {
    value = '포도';
}
console.log(value); //포도


//2.4.2 else if를 사용해 여러 방향으로 분기하기--------------------------------------------
const score = 90;
if(score >= 90) { //90점 이상
    console.log('A+');
} else if (score < 90 && score >= 80) { //90점 미만 80점 이상
    console.log('A');
} else if (score < 80 && score >= 70) { //80점 미만 70점 이상
    console.log('B+');
} else if (score < 70 && score >= 60) { //70점 미만 60점 이상
    console.log('B');
} else { //60점 미만
    console.log('F');
} //A+

//좀 더 간결하게
const score = 90;
if(score >= 90) { //90점 이상
    console.log('A+');
} else if (score >= 80) { //80점 이상
    console.log('A');
} else if (score >= 70) { //70점 이상
    console.log('B+');
} else if (score >= 60) { //60점 이상
    console.log('B');
} else { //60점 미만
    console.log('F');
} //A+


//2.4.3 중첩 if문 사용하기----------------------------------------------------
let first = true;
let second = false;
if (first) {
    console.log('첫 번째 조건 충족!');
    if(second) {
        console.log('두 번째 조건도 충족!');
    } else {
        console.log('두 번째 조건은 불충족!');
    }
} else {
    console.log('첫 번째 조건 불충족!');
} //첫 번째 조건 충족!  두 번째 조건은 불충족!

//중첩 if문은 피하는 것이 좋음, 중첩 if문은 if - else if - else문으로 변환 가능
let first = true;
let second = false;
if (first && second) { //first와 second 모두 true
    console.log('첫 번째 조건 충족!');
    console.log('두 번째 조건도 충족!');
} else if (first) { //first만 true
    console.log('첫 번째 조건 충족!');
    console.log('두 번째 조건은 불충족!');
} else { //둘 다 false
    console.log('첫 번째 조건 불충족!');
}


//2.4.4 switch문으로 분기하기
//조건식에 변수를 넣고, 비교 조건식에는 변수와 비교할 값을 넣음
let value = 'A';
switch(value) {
    case 'A':
        console.log('A');
} //A

//실행문을 여러개 둘 수 있으며, 중괄호가 없어도 된다(중괄호 있음/없음 차이가 있음)
let value = 'A';
switch(value) {
    case 'A':
        console.log('A');
        console.log('B');
} //A  B

//else if처럼 여러 방향으로 분기 가능 -> case 여러 번 사용
let value = 'B';
switch (value) {
    case 'A':
        console.log('A');
    
    case 'B':
        console.log('B');

    case 'C':
        console.log('C');
} // B  C

//switch문은 일치하는 case를 발견하면 그 아래 case들의 실행문 모두 실행  -> break문으로 원하는 case만 출력
let value = 'B';
switch (value) {
    case 'A':
        console.log('A');
        break;
    
    case 'B':
        console.log('B');
        break;

    case 'C':
        console.log('C');
        break;
} //B

//어떠한 case도 일치하지 않을 때 실행하는 case: default 사용
let value = 'F';
switch(value) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('아무것도 일치하지 않음');
} //"아무것도 일치하지 않음"

//if와 switch문 대체
let fruit = '사과';
if(fruit === '사과') {
    console.log('사과입니다!');
} else if (fruit === '배') {
    console.log('배입니다!');
} else if (fruit ==='포도') {
    console.log('포도입니다!');
} else {
    console.log('뭔지 모르겠습니다!');
}

switch(fruit) {
    default:
        console.log('뭔지 모르겠습니다!');
        break;
    case '사과':
        console.log('사과입니다!');
        break;
    case '배':
        console.log('배입니다!');
        break;
    case '포도':
        console.log('포도입니다!');
        break;
} //사과입니다!  사과입니다!


//2.4.5 조건부 연산자 사용하기---------------------------------------------------------

5 > 0 ? '참입니다' : '거짓입니다'; //"참입니다"

let value = 5 < 0 ? '참입니다' : '거짓입니다'; //undefined
value; //"거짓입니다"
//조건에 따라 달라지는 값을 변수에 대입할 때 사용

//조건부 연산 -> if문
let condition = true;
let value = condition ? '참' : '거짓';
console.log(value);

if(condition) {
    value = '참';
} else {
    value = '거짓';
}
console.log(value); //참 참

//중첩해서 사용 가능
//첫번째 조건이 참인 경우 중첩된 조건부 연산
let condition1 = true;
let condition2 = false;
let value = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1이 거짓';
console.log(value); //condition1만 참

let value = condition1
    ? condition2
        ? '둘 다 참'
        : 'condition1만 참'
    : 'condition1이 거짓';

//첫번째 조건이 거짓인 경우 중첩된 조건부 연산
let condition1 = false;
let condition2 = true;
let value = condition1 ? 'condition1이 참' : (condition2 ? 'condition2가 참' : '둘 다 거짓');
console.log(value); //condition2가 참


//-----------------------------------------------------------------------------
//2.5 반복문

/*
1) while문

    while(조건식)
        실행문;


    while(조건식) {
        실행문1;
        실행문2;
        실행문3;
    }    

-조건식이 참인 동안 반복해서 실행문 실행
실행문이 여러 개라면 중괄호로 묶어도 됨

2) for문

    for (시작; 조건식; 종료식) {
        실행문;
    }

    
-for문의 시작, 조건식, 종료식은 생략 가능

    for (;;) {

    } //무한 반복


*/

//2.5.1 while문으로 Hello, while! 100번 출력하기--------------------------------------
while(true) {
    console.log('Hello, while!');
} //무한 루프

let i = 0;
while(i < 100) {
    console.log('Hello, while!');
    i++;
} //(100) Hello, while!


//2.5.2 for문으로 반복해서 출력하기--------------------------------------------------
for (let i = 0; i < 100; i++) {
    console.log('Hello, for!');
} //(100) Hello, for!

//for문의 시작, 조건식, 종료식은 생략 가능
for(;;) {

} //무한 반복


//2.5.3 1부터 100까지 출력하기------------------------------------------------------
let i = 0;
while (i < 100) {
    console.log(i + 1);
    i++;
}


//2.5.4 break문으로 반복문 멈추기----------------------------------------------------
let i = 0;
while(true) {
    if(i === 5) break;
    i++;
}
console.log(i); //5

//무한 반복문
let i = 0;
while(true) {
    console.log(i);
    i++;
}

for(let i = 0; ; i++) {
    console.log(i);
}


//2.5.5 continue 문으로 코드 실행 건너뛰기-----------------------------------------------
let i = 0;
while (i < 10) {
    i++;
    if(i % 2 === 0) { //짝수일 때만 continue문 실행
        continue;
    }

    console.log(i); //i가 홀수일 때 i를 콘솔에 출력
} //1 3 5 7 9


//2.5.6 중첩 반복문 사용하기---------------------------------------------------------------
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

/*
결과
0 0
0 1
0 2
0 3
...
9 7
9 8
9 9


i가 0       i가 1       i가 2   ...     i가 9
---------------------------------------------------
j가 0       j가 0       j가 0           j가 0
j가 1       j가 1       j가 1           j가 1
j가 2       j가 2       j가 2           j가 2
...         ...         ...             ...
j가 9       j가 9       j가 9           j가 9

*/

//삼중 반복문 - 변수 i, j, k가 홀수일 때만 콘솔에 출력
for (let i = 0; i < 5; i++) {
    if(i % 2 === 0) continue;
    for(let j = 0; j < 5; j++) {
        if(j % 2 === 0) continue;
        for(let k = 0; k < 5; k++) {
            if(k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

/*
1   1   1
1   1   3
1   3   1
1   3   3
3   1   1
3   1   3
3   3   1
3   3   3
*/


//-----------------------------------------------------------------------
//2.6 객체

/*
객체(object): 자료형의 일종 / 다양한 값을 모아 둔 또다른 값
객체의 종류: 배열(array), 함수(function), 배열이나 함수가 아닌 객체

1) 배열
-대괄호([])로 값들을 감싼다
-배열 내부의 값을 개별적으로 불러올 수도 있음, 배열 이름 뒤에 불러오고 싶은 값의 자릿수 적으면 됨
자릿수는 0부터 시작
-자릿수 = 인덱스(index)
-배열 안에 다른 배열이나 변수 넣을 수 있음, 값의 자료형이 모두 같지 않아도 됨
-요소(element): 배열 내부의 값

-배열의 요소 개수를 활용해 원하는 인덱스의 요소 찾을 수 있다
: 배열의 요소 개수에서 1을 빼면 마지막 요소의 인덱스 -> 마지막 요소의 값 찾기 가능
배열의 마지막 요소 인덱스 = 배열.length -1 

-배열 맨 앞에 값 추가: unshift
 배열 맨 뒤에 값 추가: push

-const에는 새로운 값을 대입(=)하지 못하지만,
const에 객체(배열, 함수, 객체 리터럴)가 대입되면 객체 내부의 속성이나 배열의 요소는 수정할 수 있다

-배열 첫번째 요소 제거: shift
    마지막 요소 제거: pop
    중간 요소 제거: splice(시작 인덱스, 제거할 요소의 개수)
                splice(시작 인덱스): 해당 인덱스부터 끝까지 모든 요소 제거
                splice(시작 인덱스, 제거할 요소 개수, '대체값1', '대체값2' ..): 제거한 자리에 다른 값 대입

-배열에서 요소 찾기: includes, indexOf(앞에서 검색), lastIndexOf(뒤에서 검색)
-배열 반복: while문, for문


2) 함수(function)
-함수: 특정한 작업을 수행하는 코드
함수를 미리 만들어두고 원할 때 실행해 정해진 작업을 수행하게 함

-함수를 만들 때는 1) function 예약어 사용, 2) =>(화살표) 기호 사용

    function() {}
 
       또는
 
    () => {}

-화살표 함수(arrow function): =>(화살표) 기호를 사용한 함수
-함수 선언문(function declaration statement): 함수를 상수에 대입하지 않고 
function 키워드 뒤에 함수 이름을 넣는 방식
-함수 표현식(function expression): 함수를 상수나 변수에 대입하는 방식

-함수를 만드는 행위: 선언한다(declare)
-함수를 사용하는 행위: 호출한다(call)

-반환값(return value): 함수 호출하면 나오는 결괏값(기본값: undefined)
반환값 직접 정하기 -> return문 추가
-함수의 반환 값도 값이다
-return문의 또 다른 기능: 함수의 실행을 중간에 멈추기

-인수(argument): 함수를 호출할 때 넣은 argument 같은 값
-매개변수(parameter): 함수를 선언할 때 사용한 parameter 같은 변수

    function a(parameter) { //함수 선언
        console.log(parameter);
    }
    a('argument'); //함수 호출

함수 a를 호출 시 소괄호에 넣은 'argument'문자열은
함수 a를 선언할 때 소괄호에 넣은 parameter와 연결됨
-> parameter는 'argument'의 값을 가짐
parameter = 'argument'와 같고, 실제로 parameter는 변수와 같은 특성 가짐

-함수는 매개변수와 인수를 각각 여러 개 가질 수 있으며, 매개변수와 인수의 개수가 일치하지 않아도 됨
대응되지 않는 매개변수에는 자동으로 undefined값이 대입됨

-화살표 함수 안에서는 arguments를 사용할 수 없음 (function으로 선언한 함수에서만 사용가능)

*/

//2.6.1 배열---------------------------------------------------------------
const apple = '사과';
const orange = '오렌지';
const pear = '배';
const strawberry = '딸기';

//배열로 값들을 하나로 묶는다
const fruits = ['사과', '오렌지', '배', '딸기']; //배열: 대괄호([])로 값들을 감싼다
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); //사과  오렌지  배  딸기

//배열 안에 다른 배열이나 변수 넣을 수 있음, 값의 자료형이 모두 같지 않아도 됨
const arrayOfArray = [[1,2,3], [4,5]]; //배열 안에 배열: 이차원 배열
arrayOfArray[0]; //[1,2,3]
const a = 10;
const b = 20;
const variableArray = [a, b, 30];
variableArray[1]; //20 (b의 값)

//배열 내부의 값(요소)이 중복되어도 되고, 아무 값 없이 만들 수도 있음
const everything = ['사과', 1, undefined, true, '배열', null]; //요소 6개
const duplicated = ['가', '가', '가', '가', '가'];
const empty = []; //요소 0개


//배열의 요소 개수 구하기: length -----------------------------------
const everything = ['사과', 1, undefined, true, '배열', null];
console.log(everything.length); //6

//빈 값도 유효한 값이기 때문에 요소 개수를 셀 때 포함됨
const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue.length); //5

//배열의 요소 개수에서 1을 빼면 마지막 요소의 인덱스 -> 마지막 요소의 값 찾기 가능
const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement[findLastElement - 1]); //e


//배열에 요소 추가하기------------------------------------------
const target = ['a', 'b', 'c', 'd', 'e'];
target[5] = 'f';
console.log(target); //(6) ["a", "b", "c", "d", "e", "f"];

//배열 맨 뒤에 요소 추가: 배열.length에 값 추가 / push 사용
const target = ['가', '나', '다', '라', '마'];
target[target.length] = '바';
console.log(target);  //(6) ["가", "나", "다", "라", "마", "바"]

target.push('바');
console.log(target); //(6) ["가", "나", "다", "라", "마", "바"]

//배열 맨 앞에 값 추가: unshift
const target = ['나', '다', '라', '마', '바'];
target[0] = '가';
console.log(target); //(5) ["가", "다", "라", "마", "바"]

target.unshift('가'); //주어진 값이 배열의 첫번째 요소로 추가되고, 다른 요소들의 인덱스는 하나씩 뒤로 밀림
console.log(target); //(6) ["가", "나", "다", "라", "마", "바"]

//const에는 새로운 값을 대입(=)하지 못하지만 객체가 대입되면 객체 내부의 속성이나 배열 요소는 수정가능
const target2 = ['a', 'b', 'c', 'd', 'e'];
target2 = ['f', 'g']; //불가능
target2[0] = 'h'; //가능


//배열의 요소 수정하기: 원하는 인덱스에 바꿀 값을 넣기------------------------------------
const target = ['가', '나', '다', '라', '마'];
target[3] = '카';
console.log(target); //(5) ["가", "나", "다", "카", "마"];

//배열에서 요소 제거하기-------------------------------------------------
//마지막 요소 제거: pop
const target = ['가', '나', '다', '라', '마'];
target.pop();
console.log(target); //(4) ["가", "나", "다", "라"]

//첫번째 요소 제거: shift
const target = ['가', '나', '다', '라', '마'];
target.shift();
console.log(target); //(4) ["나", "다", "라", "마"]

//중간 요소 제거: splice
const target = ['가', '나', '다', '라', '마'];
target.splice(1, 1);  //인덱스 1부터 1개 제거
console.log(target); //(4) ["가", "다", "라", "마"]

const target = ['가', '나', '다', '라', '마'];
target.splice(2, 2);  //인덱스 2부터 2개 제거
console.log(target); //(3) ["가", "나", "마"]

const target = ['가', '나', '다', '라', '마'];
target.splice(1);  //해당 인덱스부터 끝까지 모든 요소 제거
console.log(target); //["가"]

//splice로 제거한 자리에 다른 값 넣기 가능
const target = ['가', '나', '다', '라', '마'];
target.splice(1, 3, '타', '파');    //세 번째자리부터 바꿀 값 넣음
console.log(target); //(4) ["가", "타", "파", "마"]


//배열에서 요소 찾기(검색)-----------------------------------------------------

//검색: includes (값이 배열에 존재하면 true, 없으면 false)
const target = ['가', '나', '다', '라', '마'];
const result = target.includes('다');
const result2 = target.includes('카');
console.log(result);    //true
console.log(result2);   //false


//검색하고 싶은 값의 인덱스 위치 : indexOf, lastIndexOf
const target = ['라', '나', '다', '라', '다'];
const result = target.indexOf('다');    //indexOf: 앞에서부터 찾음
const result2 = target.lastIndexOf('라');   //lastIndexOf: 뒤에서 부터 찾음
const result3 = target.indexOf('가');   //배열에 존재하지 않는 값: -1로 반환
console.log(result);    //2
console.log(result2);   //3
console.log(result3);   //-1


//배열 반복하기----------------------------------------------------------------
//while문, for문 모두 사용 가능

//배열의 모든 요소 console.log
const target = ['가', '나', '다', '라', '마'];
let i = 0;  //배열의 인덱스
while(i < target.length) {
    console.log(target[i]);
    i++;
} //가 나 다 라 마 4

const target = ['가', '나', '다', '라', '마'];
for(let i = 0; i < target.length; i++) {
    console.log(target[i]);
} //가 나 다 라 마



//2.6.2 함수 -------------------------------------------------------------------
//함수 만들기 1) function 예약어, 2) =>(화살표) 기호
function a() {}  //함수에 이름을 붙이며 다른 곳에서 사용 가능
a();    //함수 실행

//또는
() => {}

function a() {} //함수 선언문(함수를 상수/변수 대입X)
const b = function(){}; //함수 표현식(함수를 상수/변수에 대입)
const c = () => {}; 

//함수 호출(call)
function a() {}
a();

//함수 안에 실행문 넣기
function a() {
    console.log('Hello');
    console.log('Function'); //함수 안에 함수 호출 가능
}
a(); //Hello  Function

//함수 만드는 이유: 재사용하기 쉽기 때문
function a() {
    console.log('Hello');
    console.log('Function');
}
a();
a();
a(); //함수 a를 여러 번 호출하면 호출한 만큼 내부의 실행문이 실행됨
//Hello  Function 3번 반복 호출


//return 이해하기
function a() {} //undefined
a(); //undefined

//함수를 호출하면 항상 결괏값이 나오는데, 기본값으로 undefined 나옴 = 반환값(return value)
//return 문: 반환값 직접 정하기
function a(){
    return 10;
}
a(); //10

//명시적으로 reutnr문 사용X라면 항상 함수 실행문 끝에 return undefined 존재
function a() {}

function a() {
    return undefined;
} //두 코드는 동일함


function a() {
    console.log('a');
}

function a() {
    console.log('a');
    return undefined;
} //두 코드는 동일함

//반환값도 값이므로 다른 식이나 문에 넣어 사용 가능
function a() {
    return 10;
}
console.log(a()); //10 

//함수의 반환값을 상수나 변수에 대입 가능 (함수의 반환값도 값이다)
function a() {
    return 10;
}
const b = a();
console.log(b); //10


//return문의 또 다른 역할: 함수의 실행을 중간에 멈춤
function a() {
    console.log('Hello');
    return;                 //return문이 실행되면 그 아래 코드는 아예 실행되지 않는다
    console.log('Return');
}
a(); //Hello

function a() {
    if(false) {
        return; //if문이 거짓이라 return문 실행X
    }
    console.log('실행됩니다.');
}
a(); //실행됩니다.


//매개변수와 인수 사용하기
function a(parameter) { //함수 선언
    console.log(parameter);
}
a('argument'); //함수 호출

//인수(argument): 함수를 호출할 때 넣은 argument 같은 값
//매개변수(parameter): 함수를 선언할 때 사용한 parameter 같은 변수

//함수는 매개변수와 인수를 각각 여러 개 가질 수 있으며, 매개변수와 인수의 개수가 일치하지 않아도 됨
function a(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
a('Hello', 'Parameter', 'Argument'); //Arguments(3) ['Hello', 'Parameter', 'Argument']
//대응되지 않는 매개변수에는 자동으로 undefined값이 대입됨

//화살표 함수 안에서는 arguments를 사용할 수 없음 (function으로 선언한 함수에서만 사용가능)