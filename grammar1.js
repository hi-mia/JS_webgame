/*
2.2 자료형

값(value): 프로그램이 조작할 수 있는 데이터
자료형(data type): 값의 종류

1) 문자열(string): 문자들이 하나 이상 나열됨
-문자열 표현: 1) 작은 따옴표, 큰 따옴표 / 2) 백틱(`, backtick 또는 backquote)
-템플릿 리터럴: 백틱으로 감싸진 문자열
-식/표현식(expression): 결괏값이 나오는 명령

-연산자(operator): 어떠한 값에 특정 작업을 수행하라는 기호
ex) typeof / + 

-이스케이핑(escaping): 문자가 다르게 해석되게 하는 행위


2) 숫자형(number): 따옴표로 감싸지 않고 그대로 적기
-지수표기법(exponential notation): 매우 큰 숫자나 소수점 아래 자릿수가 많을 때 숫자 표현
e 뒤에 나오는 숫자만큼 10의 거듭제곱하면 원래 숫자가 됨

-prompt(): 직접 값 입력 가능

-NaN: Not a Number (but 숫자형)
-산술 연산자: +, -, *, /, %(나머지), **(거듭제곱)

-형 변환(type casting): 값의 자료형이 바뀌는 현상 또는 바꾸는 행위


3) 불 값(boolean)
1: true / 0: false

거짓인 값(falsy value): 형 변환 후 false가 되는 값 (false, '', 0, NaN, undefined, null)
참인 값(truthy value): 형 변환 후 true가 되는 값
*/

//2.2.1 문자열(string)--------------------------------------------------------
'Hello world!'
"Hello wolrd!" //문자열: 작은 따옴표 or 큰 따옴표로 감쌈

//현재 값이 문자열인지 확인: typeof 
typeof "Hello, world!";     // 결과: "string"
typeof '';                  // 결과: "string"

//비교 연산자(==)
'' == ' ';          // 결과: false


//문자열 안에서 따옴표 사용하기
"문자열 안에 작은따옴표(')가 있어요";
'문자열 안에 큰따옴표(")가 있어요'; // 다른 종류의 따옴표로 감싸기

"문자열 안에 큰따옴표(\")가 있어요"; 
'문자열 안에 작은따옴표(\')가 있어요';  // 따옴표 앞에 \붙이기
//결과: "문자열 안에 작은따옴표(')가 있어요"

/*
백슬래시(\)를 붙이면 그 다음에 나오는 문자를 기존과는 다르게 처리하라고 엔진에게 알리는 역할
\가 붙은 따옴표는 보통의 문자로 해석됨 = 따옴표를 이스케이핑한다

이스케이핑(escaping): 문자가 다르게 해석되게 하는 행위
*/

'문자열 안에 백슬래시(\\)가 있어요';   // 백슬래시 이스케이핑
//결과: '문자열 안에 백슬래시(\)가 있어요'


//문자열 여러 줄로 나타내기: \n
'여러 줄에 걸쳐\n표시됩니다.'; // \n 문자를 사용하지 않고 줄바꿈하면 에러 발생
'여러 줄에 걸쳐\n표시됩니다. \n\n줄을 더 늘려볼까요.'; //여러 줄


//템플릿 리터럴 사용하기
`저도 문자열입니다.`;   //문자열 표현: 백틱(`) 사용, 템플릿 리터럴: 백틱으로 감싸진 문자열
``;     //결과: "" (빈 문자열)
`문자열 안에 백틱(\`)이 있어요`     //결과: "문자열 안에 백틱(`)이 있어요"  (이스케이핑)

`여러 줄에 걸쳐
표시됩니다.

줄을 더 늘려볼까요`;    // 백틱 문자열 사용하면 \n 문자를 사용하지 않아도 줄바꿈 가능


//문자열 합치기: '+' 기호 사용
'문자열이 긴 경우에는 문자열을 ' + '나눈 뒤에 다시 합칩니다.'; // '+'기호도 연산자이다
'문자열이 긴 경우에는 ' + '문자열을 ' + '나눈 뒤 ' + '다시 합칩니다.'; //여러 번 사용 가능

'문자열이 긴 경우에는 문자열을 '
+ '나눈 뒤 다시 합칩니다.';

'문자열이 긴 경우에는 문자열을 ' +
'나눈 뒤에 다시 합칩니다.';  //위와 같은 결과


//2.2.2 숫자(number)--------------------------------------------------------
5;
5.04;
-5;   //음수

//지수표기법
5e4;    // 5*10000 = 50000
5e+4;   // 5*10000 = 50000
5e-3;   // 5*(1/1000) = 0.005

typeof 5;       //결과: number
typeof '5';     //결과: "string"

//2진법(0b), 8진법(0o), 16진법(0x)
0b11;   //결과: 3 (1 x 2 + 1)
0o15;   // 13 (1 x 8 + 5)
0x1c;   // 28 (1 x 16 + c(12)) / 1~9는 숫자, 10~15는 a~f


//문자열을 숫자로 바꾸기: parseInt, parseFloat
parseInt('5');      // 5
typeof parseInt('5');   //"number"

//parseInt는 문자열을 정수로만 바꾼다, 정수 부분만 추출해 표시
parseInt('3.14');   //3

//parseFloat: 실수형
parseFloat('3.14');   //3.14

typeof parseInt(prompt());  // "number"

//다른 기수법 적용하기 - 해석하려는 값 뒤에 적용하려는 기수법 숫자를 콤마로 구분해 적기
parseInt(111, 2);   // 7  (111이라는 숫자를 2진법으로 해석: 1 x 4 + 1 x 2 + 1)

parseInt(111, 7);   // 57 (111이라는 숫자를 7진법으로 해석: 1 x 49 + 1 x 7 + 1)

parseInt(111, 10); // 111, parseInt(111)과 동일 (10진법은 기수 생략 가능)


//NaN 알아보기: Not a Number
parseInt(prompt()); //abc 입력 -> 결과: NaN
typeof NaN;     //결과: "number" (이름과 다르게 NaN은 숫자이다!)


//산술 연산자 사용하기
1 + 2;      // 3
6 - 10;     // -4
3 * 4;      // 12
6 / 4;      // 1.5
6 % 4;      // 2
2 ** 4;     // 16


//무한 값 알아보기
2 / 0;              //결과: Infinity
typeof Infinity;    // "number"
-2 / 0;              // -Infinity (Infinity값은 음수도 있다)
Infinity - 100;      // Infinity (무한을 나타내는 값이므로 사칙연산 하더라도 결과는 Infinity이다)
Infinity - Infinity;    // NaN (무한-무한 성립(X))
0 / 0; // NaN


//문자와 숫자 더하기
'문자열' + 0;   // "문자열0"
'1' + 0;        // "10"

'문자열' - 0;   // NaN
'9' - 5;        // 4 ('9'가 숫자형 9로 변환됨)

/* 
형 변환(type casting): 값의 자료형이 바뀌는 현상 또는 바꾸는 행위

+: 문자열과 다른 자료형을 더하면 다른 자료형이 문자열로 바뀐 후 문자열과 더해짐
-: 다른 자료형이 먼저 숫자로 형 변환된 후 빼기를 함('문자열'을 숫자로 바꾸면 NaN이 됨)
*/


//연산자 우선순위 이해하기
2 + 3 * 4;      // 14
(2 + 3) * 4;    // 20

/*
()(그룹화) > ., [], new, ()(함수호출) > new(인수 없이) 
    > ++(후위), --(후위) > !, ~, +(단항), -(단항), ++(전위), --(전위), typeof, void, delete, await
    > ** > *, /, % > +(다항), -(다항) >  <<, >>, >>>
    > <, <=, >, >=, in, instanceof > ==, !=, ===, !== > & > ^ > | > && > || > ? : (삼항연산자)
    > =, +=, -=, **=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=
    > yield, yield* > ,(쉼표) 
*/


//실수 계산 시 주의할 점
0.5 + 0.5;      // 1

0.1 + 0.2;      //0.300000000000000004 (부동소수점 문제)
0.3 - 0.1;      //0.199999999999999998

(0.3 * 10 - 0.1 * 10) / 10; // 0.2 (실수를 정수로 바꿔서 계산하고 마지막에 다시 실수로 바꾼다)



//2.2.3 불 값(true, false)--------------------------------------------------------
true;   //true
false;  //false

typeof true;    //"boolean"


//비교 연산자 사용하기: 초과, 미만, 이상, 이하, 같음, 같지 않음
5 > 3;      //true
5 < 3;      //false
5 >= 5;     //true
5 <= 4;     //false
5 == 5;     //true
5 == 6;     //false
5 != 5;     //false
5 != 6;     //true

//NaN끼리 비교
NaN == NaN;
NaN >= NaN;
NaN <= NaN;     // 모두 false
NaN != NaN;     // true

true > false;   //true (true(1)가 false(0)보다 큰 값이다)

//문자열끼리 비교: 기본적으로 문자의 번호를 따른다, 첫 문자가 같으면 첫 문자를 빼고 나머지를 다시 비교함
'b' > 'a';      //true
'ad' > 'ab';    //true
'ab' > 'a';     //true

//charCodeAt(): 문자의 번호 알아보는 함수
'a'.charCodeAt();   // 97

'3' < 5;        //true (다른 자료형이 모두 숫자로 형 변환된 후 비교된다)
'abc' < 5;      //false ('abc' -> NaN / NaN과의 비교는 false이다)
'0' < true;     //true (불 값도 비교 연산 할 때는 숫자로 형변환 됨)


//==와 === 차이 이해하기
'1' == 1;       //true
1 == true;      //true
1 == '1';       //true : 자료형이 다르면 형 변환 후 비교하기 때문에 모두 true가 출력됨

//값과 자료형까지 같은지 비교 연산자: ===
'1' === 1;      //false
1 === true;     //false
1 === '1';      //false
1 === 1;        //true

1 != '1'; //false
1 !== '1'; //true (자료형까지 비교)


//논리 연산자 사용하기
10 > 5 && 6 < 8; //true (좌우 식 모두 true여야 전체 결과도  true)
10 < 5 || 6 < 8; //true (좌우 식 중 하나만 true면 true, 둘 다 false여야지 전체 결과 false)

//!= 연산자: 참-> 거짓, 거짓->참 / 다른 자료형을 불 값으로 형 변환함(대부분 값은 불 값으로 형변환하면 true)
!true; //false
!false; //true
!!'a'; //true

//형변환 했을때 false가 되는 값: 거짓인 값 (이외의 값은 모두 true이다: 참인 값)
!!false;    //false
!!'';       // false
!!0;        //false
!!NaN;      //false
!!undefined;     //false
!!null;          //false

//논리 연산자들도 우선순위가 있다 / 우선 순위는 그룹 연산자(소괄호)를 이용해 조정 가능
!(2 < 0);     //true
!2 < 0;       //false



//2.2.4 빈 값 사용하기(undefined, null)--------------------------------------------------------

//undefined: 보통 반환할 결괏값이 없을 때 나옴
console.log('Hello, undefined!'); //Hello, undefined! <undefined
typeof undefined; //"undefined"
!!undefined; //false (불값 형변환)

undefined == false; //false (undefined와 false는 같지 않다)
undefined == 0; //false
undefined == ''; //false

//null
undefined == null; //true (빈 값이라는 점은 같다)
undefined === null; //false (자료형까지 비교하면 다르다)
!!null; //false (불값 형변환)

null == false; //false
null == 0; //false
null == ''; //false

typeof null; //"object"
//값이 null인지 확인하려면 "=== null"을 사용하애 함

/*
null과 undefined는 둘 다 빈 값
undefined: 기본값이라는 의미라도 있음
null: 아무 역할도 없음
*/

//-------------------------------------------------------------------------------------
/*
2.3 변수

-변수(variable): 특정한 값을 저장하고 저장한 값을 불러올 수 있게 하는 것 / 변하는 수
-선언(declaration): 변수를 만드는 행위

-변수를 만드는 방법: let, const, var
    let 변수명 = 식;

-선언문: let으로 시작하는 명령
-total: 변수명
-초기화(initialization): 변수를 선언함과 동시에 값을 대입하는 행위
-변수 선언은 항상 결괏값이 undefined로 출력됨
-변수의 이름과 값은 컴퓨터의 메모리에 저장됨
-변수는 메모리 안에 저장되어 있으므로 메모리를 초기화하면 (변수의 초기화와는 다름) 메모리에 저장되어 있던
변수도 사라진다
-이미 선언한 변수를 다시 선언하면 Error 발생 -> 변수명 겹치지 않도록

-예약어(reserved word): 자바스크립트 프로그래밍에서 특정한 역할을 하므로 변수명으로 쓰지X
await, break, case, catch, class, const, continue, debugger, default, delete, do, else,
enum, export, extends, false, finally, for, function, if, import, in, instanceof, new,
null, return, super, switch, this, throw, true, try, typeof, var, void, while, with, yield

-const: 상수(변하지 않는 수)
const는 엄밀히 말해 상수는 아님, 객체의 내부 값에는 적용X
실수로 값을 수정하는 일을 막기 위해 상수 사용

-var: 변수

*/

// let 변수명 = 식;
let total = 5000 + 8000 + 10000 + 9000; //undefined / 더하기 연산자 결과를 total이라는 이름으로 저장
total; //32000
console.log(total); //32000

let string = 'Hello, variable'; // undefined
string;     //"Hello, variable"

let empty;
empty; // undefined / undefined는 기본값이므로 변수선언 시 값 대입 안하면 기본값이 undefined이다


//변수명 짓기
let banana = 'apple'; //바람직X
let a = 'apple'; //바람직X

//변수명 제약: 특수문자 $와 _만 사용 가능, 숫자로 시작X
//let er^ror = 'No!'; //Error!
//let 2error = 'No!'; //Error!
let 한글 = 'Yes!';
let 漢字 = 'Yes!'; //한글, 한자, 유니코드 변수명 사용 가능

//예약어는 변수명 사용 불가
//let let = 'No!'; //Error!
//let var = 'No!'; //Error!


//2.3.2. 변수의 값 수정하기--------------------------------------------------------
let change = '바꿔 봐'; //undefined
change = '바꿨다'; //chnage 변수의 값 바꿈
change; //"바꿨다"

/* 
change = "바꿨다" 에서 결괏값이 있는 이유는?
let이 없을 때는 코드가 '식'이라서 대입한 값이 결괏값으로 출력되지만,
let이 앞에 붙는 순간 '선언문'이 됨.
문(statement)는 식과 다르게 결괏값이 없고 식의 자리에 사용할 수 없음
*/

//변수에 넣은 값을 비우는 경우: undefined 대입 or null 대입
change = undefined; //undefined
change = null; //null : null을 대입해 갑승ㄹ 의도적으로 지웠다는 의미 부여


//2.3.3 변수 활용하기--------------------------------------------------------

//변수를 다른 변수에 대입
let string = 'Hello, variable'; //undefined
let string2 = string;   //undefined
string2; //"Hello, variable" (string의 변수 값이 string2에 대입됨)

// 자신을 자신에 대입
let number = 5;
number = number + 3; //8 (대입 연산자(=)는 산술 연산자보다 우선순위가 낮아서 연산 후 대입됨)
number += 3; //8

//변수는 중복을 줄일 때도 사용
console.log('엄청 긴 문자열입니다.');
console.log('엄청 긴 문자열입니다.');
console.log('엄청 긴 문자열입니다.');

console.log('엄청 긴 문자열을 수정합니다.');
console.log('엄청 긴 문자열을 수정합니다.');
console.log('엄청 긴 문자열을 수정합니다.');

let string1 = '엄청 긴 문자열입니다.';
console.log(string1);
console.log(string1);
console.log(string1);

let string1 = '엄청 긴 문자열을 수정합니다.'; //변수만 수정하면 된다
console.log(string1);
console.log(string1);
console.log(string1);


//2.3.4 상수 만들기--------------------------------------------------------
let string1 = '엄청 긴 문자열입니다.';

//string1 변수가 나중에 실수로 수정되는 것을 막기 위해 const로 바꿈
const string1 = '엄청 긴 문자열입니다.';

const value = '상수입니다.'; //undefined
value = '바꿀 수 없습니다'; //Error! / 상수에 다른 값 대입하면 에러

//const로 선언한 상수 다시 선언X / 상수 선언 시 초기화하지 않으면 에러 발생
const value = '다시 선언할 수 없습니다.'; //Error!
const wrong;    //Error!


//2.3.5 var 알아보기--------------------------------------------------------
//var로 변수 선언하는 것 = 변수문(variable statement)
var variable = '다시 선언할 수 있습니다'; //undefined
variable; // "다시 선언할 수 있습니다"

var variable2; //undefined
variable2; //undefined

//기존에 선언했던 variable 변수를 다시 선언해도 에러 발생X
var variable = '다시 선언할 수 있습니다.'; //undefined

//예약어와 같은 이름을 변수명으로 사용 가능 (let을 사용하면 에러 발생)
var undefined = 'defined'; //undefined
var Infinity = 0; //undefined
var let = 'const'; //undefined