// 1부터 n까지의 합  

// 자연수 n을 입력했을 때 1부터 n까지의 합을 리턴하라


function solution(n) {
  const average = 1 + n;
  return Math.floor(average / 2) * average
}

solution(6)  // 21 
solution(10)  // 55  