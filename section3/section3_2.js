// 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 추출된 순서대로 자연수를 만들어 리턴하라.

function solution(str) {
  const regExp = /[^0-9]/g;
  const extract = str.replace(regExp, "");
  return Number(extract);
}

solution("g0en2T0s8eSoft"); //208
