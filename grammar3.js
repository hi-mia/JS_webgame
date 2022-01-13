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

---------------------------------------------------------------------
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

-함수 안에 변수나 상수 선언 가능 + 함수 바깥에 위치한 변수나 상수 사용 가능
-순수함수: 자신의 매개변수나 내부 변수(또는 상수)만 사용하는 함수
외부 변수(또는 상수)에 접근하면 순수함수X

------------------------------------------------------------------------
3) 객체 리터럴
-객체: 여러 개의 변수를 하나의 변수로 묶을 때 사용

    const zerocho = {
        name: '조현영',
        year: 1994,
        month: 8,
        date: 12,
        gender: 'M',
    };

-zerocho라는 변수 선언 뒤 그 안에 정보를 모음(정보는 {} 안에 묶여있음)
-속성(property): 객체 내부에 사용되는 name, year, month, date, gender 같은 정보들
  속성 이름 / 속성 값 으로 구분
    name  / '조현영'

-객체 리터럴: {}를 사용해 객체를 표현
-객체를 표현하는 방식: 객체 리터럴 방식, 클래스 (이외에도 많이 있음)

-객체 형식

    const 객체 = {
        속성이름: 속성값,
    }

    
    const 객체 = {
        속성1이름: 속성1값,
        속성2이름: 속성2값,
        속성3이름, 속성3값,

    }

-속성 이름: 문자열 / 속성 값: 자바스크립트의 모든 값 가능
-변수를 통해 객체의 속성에 접근 가능 / 정확히는 객체의 속성 이름을 통해 속성값 접근

-속성에 접근하는 방법
1) 온점(.)을 통해 접근(변수.속성)
2) []을 사용, 변수[속성] ([] 내부에 문자열 사용)    ex) zerocho[name] (X), zerocho['name']

객체 내부에 존재하지 않는 속성에 접근하면 undefined

대부분은 온점(.)을 쓰지만, 속성 이름에 띄어쓰기나 온점이 들어있을 때 [] 사용
    변수['속성 이름'] / 변수['속성.이름']


-객체 속성 수정하기: [변수.속성 = 값;]

-객체 속성 제거하기: [delete 변수.속성;]
제거된 속성값은 undefined

-배열과 함수가 객체인 이유
객체의 성질을 모두 사용 가능하기 때문(속성 추가, 수정, 제거 가능)
객체는 함수와 배열을 포함하는 개념이라서 {}을 이용해 만든 객체를 객체 리터럴이라 따로 부르는 것
함수와 배열은 주로 객체 리터럴과 다른 목적으로 사용해서 함수와 배열에 임의 속성 넣는 경우가 드뭄

-메서드(method): 객체 속성 값으로 함수가 들어감
속성 값으로 자바스크립트의 모든 값 넣을 수 있는데, 그 중 함수가 들어가면 이 속성을 메서드라고 부름

-객체간 비교하기
객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성됨
-> 같은 객체인지 비교하려면 기존 객체를 변수에 저장해두어야 함

-참조(reference)
    const a = {name : 'zerocho'};
    const b = a;
    a.name = 'hero';
    console.log(b.name); //hero

변수 b에 a를 대입
a 변수의 name 속성 값을 변경했는데, b변수도 같이 변경
객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 것
a와 b 변수 모두 같은 객체를 저장하고 있음 -> 객체의 속성 값을 바꾸면 변수 a와 b 모두 바뀌는 것처럼 보임
-> a와 b가 같은 객체를 참조함
  'a와 b 객체 간에 참조 관계가 있다' 표현
"객체를 변수에 담으면 참조관계 발생"

-복사(copy) - 객체가 아닌 값(문자열, 숫자, 불 값, null, defined)의 경우
    let a = 'zerocho';
    let b = a;
    a = 'hero';
    console.log(b); //zerocho
    
변수 b에 a 대입 but a 바꿔도 b는 영향X
-> 객체가 아닌 값을 변수에 저장한 경우에는 참조 관계가 생기지X
복사: 참조가 생기지 않는 상황

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

function a(w, x) { //인수는 같지만 매개변수의 개수를 인수보다 적게 만들 때
    console.log(w, x);
}
a('Hello', 'Parameter', 'Argument');    //Hello Parameter / Argument 사용X

function add(x,y) {
    return x + y;
}
console.log(add(3,5)); //8
console.log(add(8, 7)); //15


//다른 변수 사용하기
//1) 함수 안에 변수나 상수 선언 가능(순수함수)
function minus1(x, y) {
    const a = 100;
    return (x - y) * a;
}
console.log(minus1(5,3)); //200

//2) 함수 바깥에 위치한 변수와 상수 사용 가능: 스코프에 따라 접근 가능 여부 달라짐
const a = 100;
function minus2(x, y) {
    return (x - y) * a;
}
console.log(minus2(5, 3)); //200


//2.6.3 객체 리터럴-----------------------------------------------------------------
//객체: 여러 개의 변수를 하나의 변수로 묶을 때 사용

const name = '조현영';
const year = 1994;
const month = 8;
const date = 12;
const gender = 'M'; //다른 사람을 표현할 떄 이 변수들 사용 불가

//객체 사용(여러 변수 하나로 묶음)
const zerocho = {
    name: '조현영',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M',
}; //zerocho라는 변수 선언 뒤 그 안에 정보를 모음(정보는 {} 안에 묶여있음)

//속성에 접근하는 방법: 1) 온점(.)을 통해 접근(변수.속성) / 2) []을 사용, 변수[속성] ([] 내부에 문자열 사용)
const zerocho = {
    name: '조현영',
    year: 1994,
    month: 8,
    date: 12,
    gender: 'M',
}; 
//zerocho의 name 속성과 date 속성에 접근
console.log(zerocho.name); //조현영
console.log(zerocho['name']); //조현영
console.log(zerocho.date); //12
console.log(zerocho['date']); //12

//zerocho 객체 내부에 존재하지 않는 속성에 접근하면 undefined
const name = 'date';
console.log(zerocho['name']); //조현영
console.log(zerocho[name]); //zerocho['date']와 같음 / 12
console.log(zerocho.hello);  //undefined


//객체 속성 수정하기: [변수.속성 = 값;]
zerocho.gender = 'F';
console.log(zerocho.gender); //F

//객체 속성 제거하기: [delete 변수.속성;] / 제거된 속성값은 undefined
delete zerocho.gender;
console.log(zerocho.gender); //undefined

//배열과 함수가 객체인 이유: 객체의 성질을 모두 사용 가능하기 때문(속성 추가, 수정, 제거 가능)
function hello(){}
hello.a = 'really?';
const array = [];
array.b = 'wow';
console.log(hello.a);   //really?
console.log(array.b);   //wow!


//메서드 이해하기
//메서드(method): 객체 속성 값으로 함수가 들어감
const debug = {
    log: function(value) {
        console.log(value);      
    },
};
debug.log('Hello, Method');

//객체 간 비교하기
//{} === {} //false
'str' === 'str';
123 === 123;
false === false;
null === null;
undefined === undefined; //객체가 아닌 값들은 다 true 반환

//객체는 모양이 같아도 생성할 때마다 새로운 객체 생성 -> 비교하려면 기존 객체를 변수에 저장해 둬야 함
const a = {name : 'zerocho'};
const array = [1, 2, a];
console.log(a === array[2]); //true


//참조(reference) - '객체' 간에 참조 관계 
const a = {name : 'zerocho'};
const b = a;
a.name = 'hero';
console.log(b.name); //hero   / a와 b는 같은 객체를 참조(객체의 속성 값 바꾸면 a, b 값 모두 변화)
//객체를 변수에 담으면 참조관계 발생

//복사(copy) - 객체가 아닌 값 / 참조가 생기지 않는 상황
let a = 'zerocho';
let b = a;
a = 'hero';
console.log(b); //zerocho
