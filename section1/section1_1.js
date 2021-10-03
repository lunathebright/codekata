// 배열 원소 중 최솟값 찾기 

// 100이하의 원소로 이루어진 배열을 입력받아 가장 작은 값 리턴


// Math 메소드 사용
function solution(numbers) {
  return Math.min(...numbers)
}

solution([6, 5, 11])

// 반복문 사용
function solution2() {
  let min = Number.MAX_SAFE_INTEGER;
  numbers.forEach(num => {
    if(min > num) {
      min = num
    }
  })
  return min
}

solution2([6, 5, 11])