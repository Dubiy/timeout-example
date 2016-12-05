//chains

//async execution (workers)

// var timeoutId = setTimeout(function() {
//     console.log('timeout execution');
// }, 2000);
//
// clearTimeout(timeoutId);


// var intervalId = setInterval(function() {
//     console.log('hello interval');
//     clearInterval(intervalId);
// }, 1000);



// function say(phrase, who) {
//     console.log(phrase + ', ' + who);
// }
//
// setTimeout(say, 1000, 'Hello', 'John');  // ie10+


// //timer like interval
// var timerId = setTimeout(function sayHello() {
//     console.log('hello');
//     timerId = setTimeout(sayHello, 1000);
// }, 1000);








//some benchmarks
// function heavyFunc() {
//     var str = '';
//     for (var i = 0; i < 1000; i++) {
//         str += 'qwerty' + new Date().getTime();
//         str = str.split('').reverse().join('');
//     }
//     //console.log('heavyFunc()');
// }

// console.time('try');
// heavyFunc();
// console.timeEnd('try');

// console.time('timeout');
// var timerId = setTimeout(function benchmarkTimeout() {
//     console.timeEnd('timeout');
//     heavyFunc();
//     timerId = setTimeout(benchmarkTimeout, 500);
//     console.time('timeout');
// }, 500);


// console.time('interval');
// var intervalId = setInterval(function benchmarkTimeout() {
//     console.timeEnd('interval');
//     heavyFunc();
//     console.time('interval');
// }, 500);


//try simultaneously


///

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log('i =', i);
//     }, i * 100 + 1000)
// }
//
// console.log('after loop i =', i);



// function doSetTimeout(i) {
//     setTimeout(function() {
//         console.log('i =', i);
//     }, i * 100 + 1000);
// }
//
// for (var i = 0; i < 10; i++) {
//     doSetTimeout(i);
// }



// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log('i =', i);
//         }, i * 100 + 1000);
//     })(i);
// }



// function printNumbersInterval() {
//     var i = 1;
//     var timerId = setInterval(function() {
//         console.log(i);
//         if (i == 10) {
//             clearInterval(timerId);
//         }
//         i++;
//     }, 100);
// }
// printNumbersInterval();



////context

// var human = {
//     name: 'John',
//     jumps: 0,
//     jumpingInterval: 0,
//
//     say: function (phrase) {
//         console.log(this.name + ' say: ' + phrase);
//     },
//
//     jumpAndCount: function () {
//         this.jumps ++;
//         console.log(this.name + ' jumped ' + this.jumps + ' times');
//     },
//
//     doJumping: function () {
//         var ctx = this;
//         this.jumpingInterval = setInterval(function () {
//             ctx.jumpAndCount();
//         }, 500);
//     },
//
//     stopJumping: function () {
//         clearInterval(this.jumpingInterval);
//     }
//
// };

// human.say('hello');
// human.jumpAndCount();
// human.jumpAndCount();
// human.jumpAndCount();

// setInterval(function () {
//     human.jumpAndCount();
// }, 500);

// human.doJumping();

// setTimeout(function () {
//     human.stopJumping();
// }, 5000);



// window.addEventListener('resize', function (event) {
//     console.log(window.innerWidth, window.innerHeight);
//     //heavyFunc();
// });

//
// var resizeTimer = 0;
// window.addEventListener('resize', function (event) {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//         console.log(window.innerWidth, window.innerHeight);
//         //heavyFunc();
//     }, 100);
// });

////underscore
// function debounce(func, wait, immediate) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }
//
// window.addEventListener('resize', debounce(function (event) {
//     console.log(window.innerWidth, window.innerHeight);
//     heavyFunc();
// }, 100));










