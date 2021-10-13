// 점수 계산

// 여러개의 OX 문제가 주어질 때 답을 연속해서 맞히면 가산점을 부여한다. 연속으로 답이 맞는 경우 첫 번째 문제는 1점, 두 번째 문제는 2점, n번째 문제는 n점이고 틀린 문제는 0점으로 계산한다. 채점 결과가 0과 1로 이루어진 배열로 주어질 때 총 점수를 구하여라(맞은 경우 1, 틀린 경우 0)

function solution(arr) {
  const str = arr.toString().replace(/,/g, "");
  const splited = str.split(0).filter((el) => el !== "");
  return splited.reduce((acc, crr) => {
    for (let i = crr.length; i > 0; i--) {
      acc += i;
    }
    return acc;
  }, 0);
}

function solution2(arr) {
  let count = 0;

  return arr.reduce((acc, crr) => {
    if (crr === 1) {
      count++;
      acc += count;
    } else count = 0;

    return acc;
  }, 0);
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]); // 10
solution2([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]); // 10
