// // varによる再宣言}(varのみ再宣言可能)
// var nickname = "taro";
// console.log(nickname);
// var nickname = "ichiro";
// console.log(nickname);

// letによる再宣言(エラーが出る)
// let nickname = "taro";
// console.log(nickname);
// let nickname = "ichiro";
// console.log(nickname);

// // constによる再宣言(エラーが出る)
// const nickname = "taro";
// console.log(nickname);
// const nickname = "ichiro";
// console.log(nickname);

// // varによる再代入(varとletで可能)
// var nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// // letによる再代入(varとletで可能)
// let nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// // constによる再代入(エラーが出る)
// const nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// // スコープ学習
// varのスコープ
// var str = "webcamp"; //グローバルスコープ

// function foo() {
//   console.log(str);
//   var y = "hello"; //関数スコープ
// }

// foo();
// console.log(y);

// letのスコープ(ブロック内がスコープ、constも同じブロックスコープ)
// function foo() {
//   let x = "webcamp";
//   {
//     let y = "hello webcamp";
//   }
//   console.log(x);
//   console.log(y);
// }

// foo();

// 別パターン
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// 巻き上げ(undefinedが表示される、letやconstでも起こる)
// 変数の巻き上げ＝関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになるというもの
// var str = "webcamp";

// function foo() {
//   console.log(str);
//   var str = "dmm webcamp";
//   console.log(str);
// }

// foo();

// 上記内容は以下と同じ
// var str = "webcamp";

// function foo() {
//   var str;
//   console.log(str);
//   str = "dmm webcamp";
//   console.log(str);
// }

// foo();

// 変数宣言の使い分け
// letは以下のようなループで使う＝再代入が可能だから
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// constは定数的に扱える＝再代入が不可能だから
