// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (1 === 1) resolve();
//     else reject("error");
//   }, 1000);
// });

// const time = Date.now();
// myPromise
//   .then(() => {
//     console.log(Date.now() - time);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("operation completed");
//   });

const myPromise2 = (arg) => {
  return new Promise((resolve, reject) => {
    if (arg >= 0) {
      setTimeout(() => {
        resolve(`${arg} is a positive number`);
      }, 1000);
    } else reject(`${arg} is a negative number`);
  });
};

async function asyncFun() {
  try {
    const res = await myPromise2(-1);
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("operation completed");
  }
}
asyncFun();
