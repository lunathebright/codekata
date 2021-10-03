// A를 #으로

// 대문자로 이루어진 영어단어가 주어졌을 때 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하라


function solution(date, cars) {
  return cars.reduce((acc, crr) => {
    if(crr % 10 === date) {
      acc += 1
    }
    return acc
  },0)
}

solution(3, [25, 23, 11, 47, 53, 17, 33])  // 'B#N#N#'
