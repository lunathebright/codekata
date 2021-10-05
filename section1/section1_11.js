// 중복 단어 제거

// n개의 문자열이 배열로 주어졌을 때 중복된 문자열을 제거하고 리턴하라. 단, 출력하는 문자열의 기존 입력 순서가 유지되어야 한다.

function solution(arr) {
  const newArr = [...new Set(arr)];
  return newArr;
}

solution(["good", "time", "good", "time", "student"]); // [ 'good', 'time', 'student' ]
