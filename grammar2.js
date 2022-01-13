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