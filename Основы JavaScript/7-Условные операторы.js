// Перепишите if с использованием оператора '?'

var a = 3;
var b = 2;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много';

console.log(result);

// Перепишите if..else с использованием нескольких операторов '?'

var message;
var login = 'Вася';

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравсвуйте' :
  (login = '') ? 'Нет логина' : '';

console.log(message);