// 가위 바위 보

// A, B 두 사람이 가위바위보 게임을 한다. 총 n번의 게임을 해 A가 이기면 A를 출력하고, B가 이기면 B를 출력한다. 비길 경우에는 D를 출력한다.
// 가위, 바위, 보는 각각 1, 2, 3이다. A와 B가 내는 것이 각각 배열로 주어질 때 각 회차의 승부값을 배열로 리턴하라. 주어지는 배열의 순서는 A, B이다.

function solution(A, B) {
  const obj = {
    1: ["가위", "보"],
    2: ["바위", "가위"],
    3: ["보", "바위"],
  };
  return A.reduce((acc, crr, idx) => {
    if (crr === B[idx]) {
      acc = [...acc, "D"];
    } else {
      if (obj[B[idx]][0] === obj[crr][1]) {
        acc = [...acc, "A"];
      } else {
        acc = [...acc, "B"];
      }
    }
    return acc;
  }, []);
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]); // ["A", "B", "A", "B", "D"]
