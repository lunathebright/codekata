// 큰 수 출력하기

// n개의 정수로 이루어진 배열을 입력받아 자신의 바로 앞 수보다 큰 수로 이루어진 배열을 리턴하라 (가장 첫 요소는 무조건 포함)

function solution(arr) {
  return arr.reduce(
    (acc, crr, idx, array) => {
      if (crr < array[idx + 1]) {
        acc = [...acc, array[idx + 1]];
      }
      return acc;
    },
    [arr[0]]
  );
}

solution([7, 3, 9, 5, 6, 12]); // [7, 9, 6, 12]
