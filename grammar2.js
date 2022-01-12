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