// 변수에 초기 입력값을 정의해줍니다
const foo = '10011011001;0110,1001,1001,0,10,11';

// 세미콜론 앞에 있는 값을 문자열 형태로 저장해줍니다
let target = foo.split(';')[0];

// 세미콜론 앞에 있는 값을 하나씩 쪼개어 배열에 담아줍니다
const result = foo.split(';')[0].split('');

// 세미콜론 뒤에 있는 값을 콤마로 구분하여 배열에 담아줍니다
const values = foo.split(';')[1].split(',');

// 치환 함수를 만들고 위에 선언된 3개의 인자값을 받습니다
const replacer = (target, result, values) => {

  // values 배열 안에 있는 값을 쌍으로 묶어서 최대 길이만큼 반복해줍니다
  for (let i = 0; i < values.length / 2; i++) {

    // 하나씩 쪼개어 담긴 배열에 해당 첫번째 인자로 해당 인덱스 값을 찾고, 두번째 인자로 해당 길이만큼 값을 빼고, 세번째 인자로 치환할 값을 배열형태로 넣어줍니다.
    result.splice(

      // 문자열 안에서 주어진 해당 인덱스 값을 찾아서 리턴해줍니다
      target.indexOf(
        values[i * 2]) -
        (values[i * 2].length - values[i * 2 + 1].length) - 
        ((values[i * 2].length - values[i * 2 + 1].length) == 0 ? 0 : values[i == 0 ? 0 : (i - 1) * 2 + 1].length - 1),

      // 해당 길이만큼 값을 뺍니다
      values[i * 2].length,

      // 새롭게 넣을 값을 배열형태로 넣어줍니다 예: [1, 2, 3, [1, 2, 3], 4, 5]
      values[i * 2 + 1].split(''));

    // 배열이었던 값을 문자열로 변환 시키고 target 변수에 다시 넣어줍니다 예: 1231,2,345
    target = result.join('');
  }

  // 반복해서 치환된 최종 값들에 콤마를 없애줍니다 예: 12312345
  return target.replace(/,/g, '');
}

// 만들어진 함수를 실행하여 콘솔에 리턴값을 찍어줍니다
console.log(replacer(target, result, values));