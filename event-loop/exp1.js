setTimeout(() => console.log("timer 1"), 0);

setTimeout(() => {
  console.log("timer 2");
  process.nextTick(() => console.log("next tick inside timer 2"));
}, 0);

setTimeout(() => console.log("timer 3"), 0);

Promise.resolve().then(() => console.log("promise resolve 1"));

Promise.resolve().then(() => {
  console.log("promise resolve 2");
  process.nextTick(() => console.log("next inside promise 2"));
});

Promise.resolve().then(() => console.log("promise resolve 3"));
process.nextTick(() => console.log("next tick 1"));

process.nextTick(() => {
  console.log("next tick 2");
  process.nextTick(() => console.log("next tick inside next tick 2"));
});

process.nextTick(() => console.log("next tick 3"));

/* 
*task queue and priority order
() => console.log("timer 1") 9
() => console.log("timer 2") 10
() => console.log("timer 3") 11
() => console.log("promise resolve 1") 5
() => {
  console.log("promise resolve 2"); 
  process.nextTick(() => console.log("next inside promise 2"));
  } 6 
() => console.log("next tick 1") 1
() => {
    console.log("next tick 2");
    process.nextTick(() => console.log("next tick inside next tick 2")); 
    } 2
() => console.log("next tick 3") 3
() => console.log("promise resolve 3") 7 
() => console.log("next tick inside timer2") 12
() => console.log("next tick inside next tick 2") 4 
() => console.log("next inside promise 2") 8

*/

/*
   * the out put will be :
next tick 1
next tick 2
next tick 3
next tick inside next tick 2
promise resolve 1
promise resolve 2
promise resolve 3
next inside promise 2
timer 1
timer 2
next tick inside timer2
timer 3
*/
