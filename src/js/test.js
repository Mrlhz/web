/*
 * 输出4444 333 22 1 22 333 4444用JS怎么做
 */

function f(n) {
  for (let i = -n; i <= n; i++) {
    if (i === 0 || i === 1) {
      continue;
    }
    let k = Math.abs(i);
    console.log(k.toString().repeat(k));
  }
}

// 递归？
// let fn = n => (k => n > 1 ? (k(n), f(n - 1), k(n)) : k(n))(n => console.log((n + "").repeat(n)));

function makeClosures(arr, fn) {
  let len = arr.length;
  let result = [];
  for (let i = 0; i < len; i++) {
    result[i] = (function(num) {
      return function() {
        return num;
      };
    })(i);
  }
  return result;
}

function callIt(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
}

function matchesPattern(str) {
  return /^(\d{3}-){2}\d{4}$/.test(str);
}

var fn = function() {
  console.log(this === global);
};

fn();

function fn1(x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  console.log([x, y, f()]);
  return [x, y, f()];
}

fn1(1);

function test() {
  console.log(f1); // function

  f1(); // "called"

  function f1() {
    console.log("called");
  }
}

test();

setTimeout(function() {
  console.log("定时器开始啦4");
});

new Promise(function(resolve) {
  console.log("马上执行for循环啦1");
  for (var i = 0; i < 10000; i++) {
    i == 99 && resolve();
  }
}).then(function() {
  console.log("执行then函数啦3");
});

console.log("代码执行结束2");

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

timeout(2000).then(value => {
  console.log(value);
});

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};
Rectangle.prototype.toString = function() {
  return "[Rectangle " + this.length + "x" + this.height + "]";
};
// inherits from Rectangle
function Square(size) {
  Rectangle.call(this, size, size);
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Square,
    writable: true
  }
});
// call the supertype method
Square.prototype.toString = function() {
  var text = Rectangle.prototype.toString.call(this);
  return text.replace("Rectangle", "Square");
};

var square = new Square(6);
console.log(square.length);
console.log(square.width);
console.log(square.getArea());

var points = [[4, 5], [10, 1], [0, 40]];
//期望得到的数据格式如下，如何实现？
// [
//   {x:4,y:5},
//   {x:10,y:1},
//   {x:0,y:40}
// ]

let newPoints = points.map(pair => {
  const [x, y] = pair;
  return { x, y };
});

const newPonint = points.map(([x, y]) => {
  return { x, y };
});

// [1,1,1,1,2,2,2,3] => [[1,1,1,1],[2,2,2],[3]]


const classifyArray = function (arr) {
  let result = [];
  const o = arr.reduce( (acc, cur) => {
    acc[cur] ? acc[cur] ++: acc[cur] = 1;
    return acc;
  },{})
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      let ele = o[key];
      result.push(new Array(ele).fill(Number(key)));
    }
  }
  return result;
}

const classifyArray = function (arr) {
  let result = [];
  const unique = Array.from(new Set(arr));
  const o = arr.reduce( (acc, cur) => {
        acc[cur] ? acc[cur] ++: acc[cur] = 1;
        return acc;
      },{})
  for (let i = 0, len = arr.length; i < len; i++) {

  }
  return result
}

const classifyArray = function(arr) {
  arr.reduce((acc, cur) => {
    if (!acc[cur-1]) acc[cur-1] = []
    acc[cur-1].push(cur)
    return acc;
  }, [])  
}