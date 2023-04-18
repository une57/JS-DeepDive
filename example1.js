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
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) < Number(str[i + 1])) {
      console.log(str[i + 1])
    } else {
      console.log(str[i])
    }
  }
  console.log()
}
bigNum(12345)
