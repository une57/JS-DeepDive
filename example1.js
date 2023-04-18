// 특정 문자열 세기
function countLetter(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "a") count++
  }
  console.log(count)
}

// 문자열 삽입
function makeNumber(num) {
  let sum = 1
  for (let i = 2; i <= num; i++) {
    sum = sum + "-" + i
  }
  console.log(sum)
}

// 홀수 문자열
function makeOdd(num) {
  let sum = 1
  for (let i = 2; i <= num; i++) {
    if (i % 2 == 1) {
      sum = String(sum) + i
    }
  }
  console.log(sum)
}

// 숫자 더하기
function sum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i
  }
  console.log(sum)
}

//가장 큰 수 찾기
function bigNum(str) {
  let max = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] > max) {
      max = str[i];
    }
  }
  console.log(max);
}

//랜덤 숫자 만들기
function random() {
  let number = 50;
  if(number < Math.floor(Math.random() * 101)){
  console.log('Win');
  }else {
  console.log('Lose');
  }
}

