console.log('enter app.js');

// 近似callback hell阿
// fetch('http://localhost:8001/popular?date=2022-12-16&rank=1') // 暢銷書籍排行榜
//   .then((value) => value.json())
//   .then(function (value) {
//     let bookId = value[0].book_id;
//     fetch(`http://localhost:8001/books?id=${bookId}`) // 暢銷書籍
//       .then((value) => value.json())
//       .then((value) => {
//         let authorId = value[0].author_id;
//         fetch(`http://localhost:8001/authors?id=${authorId}`) // 作者
//           .then((value) => value.json())
//           .then((value) => console.log(value));
//       });
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// async function findMostPopular() {
//   try {
//     // await fetch(), fetch返回Promise實例
//     let res = await fetch(
//       'http://localhost:8001/popular?date=2022-12-16&rank=1'
//     )
//       .then((value) => value.json())
//       .then((value) => value);

//     if (res.length === 0) {
//       throw new Error('本週暢銷書籍尚未出爐');
//     }
//     let bookId = res[0].book_id;
//     let res2 = await fetch(`http://localhost:8001/books?id=${bookId}`).then(
//       (value) => value.json()
//     );

//     let authorId = res2[0].author_id;
//     let res3 = await fetch(`http://localhost:8001/authors?id=${authorId}`).then(
//       (value) => value.json()
//     );
//     console.log(res3); // 找到作者

// 		// JS引擎預設慧返回undefined
//   } catch (error) {
//     console.log(error);
//   }
// }

// findMostPopular();
// // const p = findMostPopular()

console.log('end app.js');
