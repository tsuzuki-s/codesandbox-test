// var val1 = "var変数";

// var val1 = "var変数を上書き";

// var val1 = "var変数を再宣言";

// let val2 = "let変数";

// val2 = "let変数を上書き";

// let val2 = "let変数を再宣言";

// const val3 = "const変数";

// //val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "aaa",
//   age: 28
// };

// val4.name = "bbb";
// val4.address = "sagamihara";

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");

// const name = "aaa";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// function func1(str) {
//   return str;
// }

// const func2 = (str2) => {
//   return str2;
// };

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// const myProfile = {
//   name: "aaa",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。
//                   年齢は${myProfile.age}です。`;

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。
//                   年齢は${age}です。`;

// const myProfile = ["aaa", 28];

// const message3 = `名前は${myProfile[0]}です。
//                   年齢は${myProfile[1]}歳です。`;

// const [name, age] = myProfile;

// const sayHello = (name = "aaa") => console.log(`こんにちは！${name}さん！`);

// sayHello();

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;

// console.log(arr4);

const nameArr = ["あああ", "いいい", "ううう"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ううう") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;

// console.log(formattedNum);

// const checkNum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています！` : `許容範囲内です`;
// };

// console.log(checkNum(100, 100));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }

const num = null;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
