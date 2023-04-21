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
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum = sum + i
  }
  console.log(sum)
}

//가장 큰 수 찾기
function bigNum(str) {
  let max = str[0]
  for (let i = 0; i < str.length; i++) {
    if (str[i] > max) {
      max = str[i]
    }
  }
  console.log(max)
}

//랜덤 숫자 만들기
function random() {
  let number = 50
  if (number < Math.floor(Math.random() * 101)) {
    console.log("Win")
  } else {
    console.log("Lose")
  }
}

//나누기 함수 만들기
function num(a, b) {
  return a / b;
}
let num = function (a, b) {
  return a / b;
}
let num = (a, b) => a / b;

//비밀번호 검증 함수
let num = (pw1, pw2) => {
  if (pw1.length >= 7 && pw1.length <= 15 && pw2.length >= 7 && pw2.length <= 15) {
    if (pw1.toLowerCase() == pw2.toLowerCase()) {
      console.log('true')
    } else {
      console.log('비밀번호를 다시 확인해주세요');
    }
  } else {
    console.log('비밀번호는 8~16자리여야 합니다');
  }
  };

//타이머
setTimeout(() => console.log("자동 로그아웃"), 2000);

//날짜 구하기
let today = new Date();
today = "오늘은 " + today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일 " + "입니다.";

//배열 기능 활용
if (email.indexOf('@') !== -1) {
  if (email.indexOf(' ') !== -1) {
      let result = '';
      for (let i = 0; i < email.length; i++) {
      if (email[i] !== ' ') {
        result = result + email[i].toLowerCase()
      }
    }
    console.log(result);
    }
  }

//배열 기능 활용2
let arr = email.split("");
arr.splice(email.indexOf('@')-2, 2, "*", "*");

console.log(arr.join(''));

//filter
let action = movies.filter((value) => value.genre === "액션");
let cgv = movies.filter((value2) => value2.상영관 === "cgv");
let romance = movies.filter((value3) => {
 return value3.상영관 === "cgv" && value3.genre === "로맨스"
});

//sort
List.sort((a, b) => {
  if(a.price > b.price) return 1;
  if(a.price === b.price) return 0;
  if(a.price < b.price) return -1;
});

//타입 변환1
for(let i = 0; i < stringData.length; i++)
if(typeof(stringData[i]) !== 'string')
stringData[i] = String(stringData[i])

//타입 변환2
for(let i = 0; i < numberData.length; i++)
if(typeof(numberData[i]) !== 'number') {
  numberData.splice(i,1);
  i--;
}

//조건문1
input1 = input1.toString().toLowerCase();
input2 = input2.toString().toLowerCase();

if(input1 === input2){
console.log("회원가입을 축하합니다.")
} else {
console.log("비밀번호를 다시 확인해주세요.")
}

//조건문2
for(let i = 0; i < 3; i++){
  console.log('현재 인기'+ fruits[i].number +'위 과일은 ' + fruits[i].title +'입니다.');
}

//반복문
let count = 0;
let sum = 0;
let level = "";

for(let i = 0; i < myShopping.length; i++){
  if(myShopping[i].category === "의류"){
    count++;
    sum = sum + myShopping[i].price;
    if (count >= 0 && count <= 2) {
      level = 'Bronze';
    } else if (count >= 3 && count <= 4) {
      level = 'Silver';
    } else if (count >= 5) {
      level = 'Gold';
    }
  }
}
console.log('의류를 구매한 횟수는 총 '+ count +'회 금액은 ' + sum +'원이며 등급은 '+ level +'입니다.');

//랜덤번호 생성
return Math.floor(Math.random() * 9999)

//진행율
let count = 0;
let sum = 0;

for(let i = 0; i < TodoList.length; i++){
  if(TodoList[i].finish === true)
  count++;
  sum = Math.round(count / TodoList.length * 100)
}
console.log('총 ' + sum + '% 진행하셨습니다.')

//함수
if(email.indexOf('@') !== -1){
  if(password.length >= 8 && password.length <= 16){
    if(password === passwordCheck){
      return '회원가입을 축하합니다.';
    } else {
      return "비밀번호를 다시 확인해주세요.";
    }
  } else {
    return '비밀번호는 8~16자리여야 합니다.';
  }
}else {
  return '이메일 주소를 다시 확인해주세요.';
}

//