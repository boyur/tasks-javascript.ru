// Выведите чётные числа

for (var i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}

// Замените for на while

var i = 0;
while (i < 3) {
  console.log( "номер " + i + "!" );
  i++;
}

// Повторять цикл, пока ввод неверен
var num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);