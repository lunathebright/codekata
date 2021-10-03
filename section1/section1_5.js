// 홀수

// 자연수 n개가 담긴 배열이 주어질 때, 배열 요소 중 홀수인 수를 모두 골라 그 합을 구하고, 고른 홀수 중 최소값을 찾으시오.
// 찾은 값은 배열에 홀수 중 최소값, 홀수의 합 순서로 담아 리턴하시오. 


function solution(numbers) {
  let min = Number.MAX_SAFE_INTEGER
  const oddsSum = numbers.reduce((acc, crr) => {
    if(crr % 2 !== 0) {
      acc += crr
      crr < min && (min = crr)
    }
    return acc
  }, 0)
  return [min, oddsSum]
}

solution([12, 77, 38, 35, 53, 92, 85])  // [35, 250]
