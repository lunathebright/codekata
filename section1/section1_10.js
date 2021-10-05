// 가운데 문자 출력

// 소문자로 된 문자열이 입력되면 그 단어의 가운데 문자를 리턴하라. 단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력한다.

function solution(str) {
  if (str.length % 2 === 0) {
    return `${str[str.length / 2 - 1]}${str[str.length / 2 - 1]}`;
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

solution("study"); // u
solution("good"); // oo
