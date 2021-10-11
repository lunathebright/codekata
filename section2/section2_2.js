// 보이는 학생

// 선생님이 n명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생들의 키가 순서대로 주어질 때, 선생님이 맨 앞에 서서 볼 수 있는 학생의 수를 리턴하세요.

function solution(arr) {
  let max = arr[0];

  const resultArr = arr.reduce(
    (acc, crr) => {
      if (crr > max) {
        max = crr;
        acc = [...acc, crr];
      }
      return acc;
    },
    [arr[0]]
  );

  return resultArr.length;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]); // 5
