// 대문자 찾기

// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자의 개수를 리턴하라

function solution(str) {
  const replacedStr = str.replace(/[A-Z]/g, "Capital");
  return replacedStr.split("Capital").length - 1;
}

solution("KoreaTimeGood"); // 3

function solution2(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) answer++;
  }
  return answer;
}

solution2("KoreaTimeGood"); // 3
