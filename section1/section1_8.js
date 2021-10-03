// 문자 찾기

// 한 개의 문자열과 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 리턴하라


function solution(str, letter) {
  return str.split(letter).length - 1
}

solution('COMPUTERPROGRAMMING', 'R')  // 3
solution('I like cake, especially strawberry cake', 'cake')  // 2