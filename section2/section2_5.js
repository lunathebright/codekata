// 등수 구하기

// n명의 학생의 점수가 하나의 배열로 입력되면 각 학생의 등수를 입력된 순서대로 리턴하라

function solution(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return arr.reduce((acc, crr) => {
    const ranking = sortedArr.indexOf(crr) + 1;
    acc = [...acc, ranking];
    return acc;
  }, []);
}

solution([87, 89, 92, 100, 76, 100]); // [ 5, 4, 3, 1, 6, 1 ]
