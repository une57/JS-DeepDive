// 특정 문자열 세기
function countLetter(str) {
	let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() == 'a')
    count++;
  }
  console.log(count);
}

// 문자열 삽입
function makeNumber(num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) {
      sum = sum + '-' + i
    }
    console.log(sum)
  }

// 홀수 문자열
function makeOdd(num) {
    let sum = 1;
    for (let i = 2; i <= num; i++) {
    if(i%2 == 1){
      sum = String(sum) + i
    }
}
    console.log(sum)
  }

