// 연필 개수 

// 연필 1 다스는 12자루이다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 학생수 N을 입력하면 필요한 다스 수를 리턴하라.


function solution(students) {
  const unit = 12;
  return Math.ceil(students / unit)
}

solution(178)  // 15
solution(25)  // 3 