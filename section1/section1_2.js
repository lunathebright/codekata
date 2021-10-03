// 삼각형 판별하기 

// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 배열로 주어지면 이 세 막대로 삼각형을 만들 수 있는지 여부에 따라 true, false를 리턴


function solution(numbers) {
  const max = Math.max(...numbers);
  const sum = numbers.reduce((acc, crr) => acc += crr);
  return sum - max > max
}

solution([6, 8, 11])
solution([13, 33, 17])