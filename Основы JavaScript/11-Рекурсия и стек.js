// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(44));

// Фокториал
function foctorial(n) {
  if(n == 1) return 1;
  return n * foctorial(n - 1);
}

console.log(foctorial(10));


// Фибоначи

function fibo(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibo(n-1) + fibo(n-2)
  }
}

function fibCicle(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibCicle(771));